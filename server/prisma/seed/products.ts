import { PrismaClient } from '@prisma/client';

export async function seedProducts(prisma: PrismaClient) {
  await prisma.product.create({
    data: {
      name: 'Mc Lanche',
      slug: 'mc-lanche',
      description: 'Mc Lanche',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-footer-bg-white.png',
            },
          },
          alt: 'McDonalds',
        },
      },
      price: 2000,
      Restaurant: {
        connect: {
          slug: 'mc-donalds',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Chicken Júnior',
      slug: 'chicken-junior',
      description: 'Chicken Júnior',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://d3sn2rlrwxy0ce.cloudfront.net/Chicken-Jr-1.png?mtime=20230703115900&focal=none',
            },
          },
          alt: 'Chicken Júnior',
        },
      },
      price: 1850,
      Restaurant: {
        connect: {
          slug: 'burguer-king',
        },
      },
    },
  });
}
