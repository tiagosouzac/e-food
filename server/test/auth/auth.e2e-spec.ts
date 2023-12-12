import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/database/prisma/prisma.service';

describe('(V1) Auth', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    prismaService = await moduleFixture.resolve(PrismaService);
  });

  afterAll(async () => {
    await prismaService.cleanDatabase();
    await prismaService.$disconnect();
    await app.close();
  });

  describe('/register (POST)', () => {
    it('should return an error if email is invalid', async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          name: 'username',
          email: 'user',
          password: 'Strong@Password1',
          passwordConfirmation: 'Strong@Password1',
        })
        .expect(400, {
          error: 'Bad Request',
          message: ['Invalid email'],
          statusCode: 400,
        });
    });

    it('should return an error if password or password confirmation is invalid', async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          name: 'username',
          email: 'user@email.com',
          password: 'Strong',
          passwordConfirmation: 'StrongPassword',
        })
        .expect(400, {
          error: 'Bad Request',
          message: ['Invalid password', 'Invalid password confirmation'],
          statusCode: 400,
        });
    });

    it('should return an error if passwords do not match', async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          name: 'username',
          email: 'user@email.com',
          password: 'Strong@Password1',
          passwordConfirmation: 'Strong@Password2',
        })
        .expect(400, {
          error: 'Bad Request',
          message: ['Passwords do not match'],
          statusCode: 400,
        });
    });

    it('should return an access token', async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          name: 'username',
          email: 'user@email.com',
          password: 'Strong@Password1',
          passwordConfirmation: 'Strong@Password1',
        })
        .expect(201)
        .expect(({ body }) => {
          expect(body.access_token).toBeDefined();
          expect(body.access_token).toEqual(expect.any(String));
        });
    });

    it('should returna an error if user is already registered', async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          name: 'username',
          email: 'user@email.com',
          password: 'Strong@Password1',
          passwordConfirmation: 'Strong@Password1',
        })
        .expect(403, {
          error: 'Forbidden',
          message: ['User already registered'],
          statusCode: 403,
        });
    });
  });

  describe('/login (POST)', () => {
    it('should return an access token', async () => {
      // await request(app.getHttpServer()).post('/auth/register').send({
      //   name: 'username',
      //   email: 'user@email.com',
      //   password: 'Strong@Password1',
      //   passwordConfirmation: 'Strong@Password1',
      // });

      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email.com',
          password: 'Strong@Password1',
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
        .expect(400, {
          error: 'Bad Request',
          message: ['Invalid email'],
          statusCode: 400,
        });
    });

    it('should return an error if password is invalid', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'user@email.com',
          password: 'Password',
        })
        .expect(401, {
          error: 'Unauthorized',
          message: ['Invalid password'],
          statusCode: 401,
        });
    });

    it('should return an error if user is not found', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'other.user@email.com',
          password: 'Strong@Password1',
        })
        .expect(404, {
          error: 'Not Found',
          message: ['User not found'],
          statusCode: 404,
        });
    });
  });
});
