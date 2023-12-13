import { PrismaClient } from '@prisma/client';

export async function seedRestaurantsTable(prisma: PrismaClient) {
  await prisma.restaurant.create({
    data: {
      name: 'Sabor Divino',
      slug: 'sabor-divino',
      description:
        'Um refúgio gastronômico que combina ingredientes frescos e técnicas culinárias inovadoras para criar pratos que são verdadeiras obras de arte para o paladar. Do ambiente acolhedor à fusão de sabores, cada refeição no Sabor Divino é uma experiência única e memorável.',
      images: {
        create: {
          urls: {
            createMany: {
              data: [
                {
                  url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  media_width: 640,
                },
                {
                  url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  media_width: 1024,
                },
                {
                  url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  media_width: 1920,
                },
              ],
            },
          },
          alt: 'Sabor Divino',
        },
      },
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
              url: 'https://www.instagram.com/sabor-divino/',
            },
            {
              type: 'Facebook',
              url: 'https://www.facebook.com/sabor-divino/',
            },
          ],
        },
      },
    },
  });

  await prisma.restaurant.create({
    data: {
      name: 'Cantinho da Toscana',
      slug: 'cantinho-da-toscana',
      description:
        'Transportando seus clientes diretamente para a ensolarada região da Toscana, este restaurante é uma homenagem à tradição culinária italiana. Com massas frescas feitas à mão, molhos aromáticos e uma seleção cuidadosa de vinhos, o Cantinho da Toscana celebra a autenticidade e o calor da cozinha italiana.',
      images: {
        create: {
          urls: {
            createMany: {
              data: [
                {
                  url: 'https://images.unsplash.com/photo-1557955776-857434f1c951?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  media_width: 640,
                },
                {
                  url: 'https://images.unsplash.com/photo-1557955776-857434f1c951?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  media_width: 1024,
                },
                {
                  url: 'https://images.unsplash.com/photo-1557955776-857434f1c951?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  media_width: 1920,
                },
              ],
            },
          },
          alt: 'Cantinho da Toscana',
        },
      },
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
          complement: 'Próximo a uma praça',
        },
      },
      categories: {
        createMany: {
          data: [
            {
              name: 'Tradicional',
            },
            {
              name: 'Italiana',
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
              url: 'https://www.instagram.com/cantinho-da-toscana/',
            },
            {
              type: 'Facebook',
              url: 'https://www.facebook.com/cantinho-da-toscana/',
            },
          ],
        },
      },
    },
  });

  await prisma.restaurant.create({
    data: {
      name: 'Aromas do Oriente',
      slug: 'aromas-do-oriente',
      description:
        'Uma jornada sensorial pelos sabores exóticos e temperos intrigantes da culinária do Oriente Médio e Asiática. Este restaurante oferece uma mistura deliciosa de pratos picantes, aromáticos e coloridos, proporcionando uma experiência de sabores que cativam e surpreendem.',
      images: {
        create: {
          urls: {
            createMany: {
              data: [
                {
                  url: 'https://images.unsplash.com/photo-1515780166631-d291bd3d3a6a?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  media_width: 640,
                },
                {
                  url: 'https://images.unsplash.com/photo-1515780166631-d291bd3d3a6a?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  media_width: 1024,
                },
                {
                  url: 'https://images.unsplash.com/photo-1515780166631-d291bd3d3a6a?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  media_width: 1920,
                },
              ],
            },
          },
          alt: 'Aromas do Oriente',
        },
      },
      phone: {
        createMany: {
          data: {
            value: '(33) 3333-3333',
          },
        },
      },
      opening_hours: 'Seg. à sex. das 8h às 22h',
      address: {
        create: {
          street: 'Mais Uma Rua Qualquer',
          number: '153',
          neighboorhood: 'Centro',
          city: 'São Paulo',
          state: 'SP',
          country: 'Brasil',
          postal_code: '11325-679',
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
              name: 'Asiática',
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
              url: 'https://www.instagram.com/aromas-do-oriente/',
            },
            {
              type: 'Facebook',
              url: 'https://www.facebook.com/aromas-do-oriente/',
            },
          ],
        },
      },
    },
  });
}
