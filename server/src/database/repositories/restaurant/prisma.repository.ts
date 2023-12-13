import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from '../../entities/restaurant.entity';

@Injectable()
export class PrismaRestaurantRepository implements RestaurantRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async list(): Promise<Restaurant[]> {
    return await this.prismaService.restaurant.findMany({
      include: { categories: true, images: { include: { urls: true } } },
    });
  }

  async findBySlug(slug: string): Promise<Restaurant | null> {
    return await this.prismaService.restaurant.findUnique({
      where: { slug },
      include: {
        address: true,
        categories: true,
        images: true,
        phone: true,
        products: true,
        social: true,
      },
    });
  }

  async search(query: string): Promise<Restaurant[] | null> {
    return await this.prismaService.restaurant.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            products: {
              some: {
                OR: [
                  {
                    name: {
                      contains: query,
                    },
                  },
                  {
                    description: {
                      contains: query,
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      include: {
        products: {
          where: {
            OR: [
              {
                name: {
                  contains: query,
                },
              },
              {
                description: {
                  contains: query,
                },
              },
            ],
          },
        },
      },
    });
  }
}
