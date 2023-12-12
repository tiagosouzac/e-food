import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/database/prisma/prisma.service';

describe('(V1) Auth', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    prismaService = moduleFixture.get(PrismaService);
    await prismaService.cleanDatabase();
  });

  describe('/login (POST)', () => {
    it('should return an access token', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email.com',
          password: 'Strong@Password',
        })
        .expect(200)
        .expect(({ body }) => {
          expect(body.access_token).toBeDefined();
          expect(body.access_token).toEqual(expect.any(String));
        });
    });

    it('should return an error if email is invalid', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email',
          password: 'Strong@Password',
        })
        .expect(400)
        .expect(({ body }) => {
          expect(body.error).toBeDefined();
          expect(body.message).toBeDefined();
          expect(body.message).toEqual('Invalid email or password');
        });
    });

    it('should return an error if password is invalid', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email.com',
          password: 'Strong',
        })
        .expect(400)
        .expect(({ body }) => {
          expect(body.error).toBeDefined();
          expect(body.message).toBeDefined();
          expect(body.message).toEqual('Invalid email or password');
        });
    });

    it('should return an error if user is not found', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email.com',
          password: 'Strong@Password',
        })
        .expect(404)
        .expect(({ body }) => {
          expect(body.error).toBeDefined();
          expect(body.message).toBeDefined();
          expect(body.message).toEqual('User not found');
        });
    });
  });

  describe('/register (POST)', () => {
    it('should return an access token', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email.com',
          password: 'Strong@Password',
          passwordConfirmation: 'Strong@Password',
        })
        .expect(200)
        .expect(({ body }) => {
          expect(body.access_token).toBeDefined();
          expect(body.access_token).toEqual(expect.any(String));
        });
    });

    it('should returna an error if user is already registered', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email.com',
          password: 'Strong@Password',
          passwordConfirmation: 'Strong@Password',
        })
        .expect(400)
        .expect(({ body }) => {
          expect(body.error).toBeDefined();
          expect(body.message).toBeDefined();
          expect(body.message).toEqual('User already registered');
        });
    });

    it('should return an error if email is invalid', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email',
          password: 'Strong@Password',
          passwordConfirmation: 'Strong@Password',
        })
        .expect(400)
        .expect(({ body }) => {
          expect(body.error).toBeDefined();
          expect(body.message).toBeDefined();
          expect(body.message).toEqual('Invalid email or password');
        });
    });

    it('should return an error if password or password confirmation is invalid', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email.com',
          password: 'Strong',
          passwordConfirmation: 'StrongPassword',
        })
        .expect(400)
        .expect(({ body }) => {
          expect(body.error).toBeDefined();
          expect(body.message).toBeDefined();
          expect(body.message).toEqual('Invalid email or password');
        });
    });

    it('should return an error if password or password confirmation is weak', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email.com',
          password: 'StrongPassword',
          passwordConfirmation: 'StrongPassword',
        })
        .expect(400)
        .expect(({ body }) => {
          expect(body.error).toBeDefined();
          expect(body.message).toBeDefined();
          expect(body.message).toEqual('Password is too weak');
        });
    });
  });
});
