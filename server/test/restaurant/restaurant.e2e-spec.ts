import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/database/prisma/prisma.service';

describe('(V1) Restaurants', () => {
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

  describe('/restaurants (GET)', () => {
    it('should return an empty array if no restaurants are found', async () => {
      await request(app.getHttpServer())
        .get('/restaurants')
        .expect(200)
        .expect(({ body }) => {
          expect(body).toEqual([]);
        });
    });

    it('should return a list of restaurants', async () => {
      await prismaService.restaurant.createMany({
        data: [
          {
            name: 'Restaurant 1',
            slug: 'restaurant-1',
            opening_hours: '',
          },
          {
            name: 'Restaurant 2',
            slug: 'restaurant-2',
            opening_hours: '',
          },
        ],
      });

      await request(app.getHttpServer())
        .get('/restaurants')
        .expect(200)
        .expect(({ body }) => {
          expect(body).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                name: 'Restaurant 1',
                slug: 'restaurant-1',
              }),
              expect.objectContaining({
                name: 'Restaurant 2',
                slug: 'restaurant-2',
              }),
            ]),
          );
        });
    });
  });

  describe('/restaurants/:slug (GET)', () => {
    it('should return the details of a restaurant', async () => {
      await request(app.getHttpServer())
        .get(`/restaurants/restaurant-1`)
        .expect(200)
        .expect(({ body }) => {
          expect(body).toEqual(
            expect.objectContaining({
              name: 'Restaurant 1',
              slug: 'restaurant-1',
            }),
          );
        });
    });

    it('should return an error if the restaurant does not exist', async () => {
      await request(app.getHttpServer())
        .get('/restaurants/invalid-slug')
        .expect(404, {
          error: 'Not Found',
          message: ['Restaurant not found'],
          statusCode: 404,
        });
    });
  });
});
