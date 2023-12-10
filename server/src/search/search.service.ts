import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class SearchService {
  constructor(private readonly prismaService: PrismaService) {}

  async search(query: string) {
    const result = await this.prismaService.restaurant.findMany({
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
        products: true,
      },
    });

    console.log(JSON.stringify(result, null, 2));
  }
}
