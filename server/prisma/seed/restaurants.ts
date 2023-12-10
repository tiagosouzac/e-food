import { PrismaClient } from '@prisma/client';

export async function seedRestaurantsTable(prisma: PrismaClient) {
  await prisma.restaurant.create({
    data: {
      name: 'McDonalds',
      slug: 'mc-donalds',
      description: 'Best food ever',
      phone: {
        createMany: {
          data: {
            value: '(11) 1111-1111',
          },
        },
      },
      opening_hours: 'Seg. à sex. das 10h às 22h',
      address: {
        create: {
          street: 'Rua Qualquer',
          number: '123',
          neighboorhood: 'Centro',
          city: 'São Paulo',
          state: 'SP',
          country: 'Brasil',
          postal_code: '12345-678',
          complement: '',
        },
      },
      categories: {
        createMany: {
          data: [
            {
              name: 'Tradicional',
            },
            {
              name: 'Fast Food',
            },
          ],
        },
      },
      social: {
        createMany: {
          data: [
            {
              type: 'WhatsApp',
              url: 'https://api.whatsapp.com/send?phone=5511999999999',
            },
            {
              type: 'Instagram',
              url: 'https://www.instagram.com/mcdonalds/',
            },
            {
              type: 'Facebook',
              url: 'https://www.facebook.com/mcdonalds/',
            },
          ],
        },
      },
    },
  });

  await prisma.restaurant.create({
    data: {
      name: 'Burguer King',
      slug: 'burguer-king',
      description: 'Best food ever 2',
      phone: {
        createMany: {
          data: {
            value: '(22) 2222-2222',
          },
        },
      },
      opening_hours: 'Seg. à sex. das 10h às 23h',
      address: {
        create: {
          street: 'Outra Rua Qualquer',
          number: '124',
          neighboorhood: 'Centro',
          city: 'São Paulo',
          state: 'SP',
          country: 'Brasil',
          postal_code: '12345-679',
          complement: 'Better than Mc Donalds',
        },
      },
      categories: {
        createMany: {
          data: [
            {
              name: 'Tradicional',
            },
            {
              name: 'Fast Food',
            },
            {
              name: 'Hamburgueria',
            },
          ],
        },
      },
      social: {
        createMany: {
          data: [
            {
              type: 'WhatsApp',
              url: 'https://api.whatsapp.com/send?phone=5522999999999',
            },
            {
              type: 'Instagram',
              url: 'https://www.instagram.com/burguerking/',
            },
            {
              type: 'Facebook',
              url: 'https://www.facebook.com/burguerking/',
            },
          ],
        },
      },
    },
  });
}
