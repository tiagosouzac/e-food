import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class RestaurantService {
  constructor(private readonly prismaService: PrismaService) {}

  list() {
    return this.prismaService.restaurant.findMany({
      include: { categories: true },
    });
  }

  findBySlug(slug: string) {
    return this.prismaService.restaurant.findUnique({
      where: { slug },
      include: {
        address: true,
        categories: true,
        phone: true,
        social: true,
        images: true,
        products: true,
      },
    });
  }
}
