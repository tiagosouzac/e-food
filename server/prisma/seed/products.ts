import { PrismaClient } from '@prisma/client';

export async function seedProducts(prisma: PrismaClient) {
  await prisma.product.create({
    data: {
      name: 'Filet Mignon ao Molho de Vinho Tinto',
      slug: 'filet-mignon-ao-molho-de-vinho-tinto',
      description:
        'Um suculento filet mignon grelhado na perfeição, coberto por um molho encorpado de vinho tinto, acompanhado por batatas rústicas assadas e legumes frescos da estação.',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://static.itdg.com.br/images/1200-675/d5111f1ee6d9d8d3265e427aa5ee4464/274586-original.jpg',
            },
          },
          alt: 'Filet Mignon ao Molho de Vinho Tinto',
        },
      },
      price: 2000,
      Restaurant: {
        connect: {
          slug: 'sabor-divino',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Risoto de Camarão com Aspargos',
      slug: 'risoto-de-camarao-com-aspargos',
      description:
        'Um risoto cremoso, preparado com camarões suculentos, aspargos frescos e finalizado com um toque de queijo parmesão ralado e ervas frescas.',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://anamariabraga.globo.com/wp-content/uploads/2017/10/risoto-de-camarao-e-aspargo.jpg',
            },
          },
          alt: 'Risoto de Camarão com Aspargos',
        },
      },
      price: 2500,
      Restaurant: {
        connect: {
          slug: 'sabor-divino',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Pavlova de Frutas Tropicais',
      slug: 'pavlova-de-frutas-tropicais',
      description:
        'Uma sobremesa leve e refrescante com base de merengue crocante, coberta por uma generosa porção de creme de baunilha e uma variedade de frutas tropicais frescas, como manga, kiwi e maracujá.',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://anamariabraga.globo.com/wp-content/uploads/2021/01/pavlova-com-frutas-1024x576.jpg',
            },
          },
          alt: 'Pavlova de Frutas Tropicais',
        },
      },
      price: 3500,
      Restaurant: {
        connect: {
          slug: 'sabor-divino',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Pappardelle ao Ragu de Cordeiro',
      slug: 'pappardelle-ao-ruagu-de-cordeiro',
      description:
        'Massa fresca pappardelle servida com um ragu robusto de cordeiro, lentamente cozido com tomates frescos, ervas aromáticas e vinho tinto, polvilhado com queijo pecorino ralado.',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://www.acomarcanet.com.br/materias/fotos/5898_522.png',
            },
          },
          alt: 'Pappardelle ao Ragu de Cordeiro',
        },
      },
      price: 3000,
      Restaurant: {
        connect: {
          slug: 'cantinho-da-toscana',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Osso Buco com Risoto Alla Milanese',
      slug: 'osso-buco-com-risoto-alla-milanese',
      description:
        'Um clássico italiano, osso buco lentamente cozido em um molho rico à base de vinho branco e caldo de carne, acompanhado por um risoto cremoso Alla Milanese, feito com açafrão e queijo parmesão.',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://i0.wp.com/memoriediangelina.com/wp-content/uploads/2009/11/Ossobuco.jpg?w=839',
            },
          },
          alt: 'Osso Buco com Risoto Alla Milanese',
        },
      },
      price: 2700,
      Restaurant: {
        connect: {
          slug: 'cantinho-da-toscana',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Tiramisu Tradicional',
      slug: 'tiramisu-tradicional',
      description:
        'Uma sobremesa indulgente de camadas de biscoitos embebidos em café, creme mascarpone levemente doce e cacau em pó polvilhado por cima, uma delícia para os amantes de café e sobremesas italianas.',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://media.gazetadopovo.com.br/2022/09/05154646/bigstock-Homemade-Tiramisu-Cake-Decorat-401850266-960x540.jpg',
            },
          },
          alt: 'Tiramisu Tradicional',
        },
      },
      price: 2200,
      Restaurant: {
        connect: {
          slug: 'cantinho-da-toscana',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Frango Tikka Masala',
      slug: 'frango-tikka-masala',
      description:
        'Pedacinhos suculentos de frango marinados em especiarias indianas e iogurte, cozidos em um molho cremoso de tomate com garam masala, servido com arroz basmati aromático.',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_610126394.jpg',
            },
          },
          alt: 'Frango Tikka Masala',
        },
      },
      price: 2400,
      Restaurant: {
        connect: {
          slug: 'aromas-do-oriente',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Sushi Fusion',
      slug: 'sushi-fusion',
      description:
        'Uma seleção de sushis inovadores que combinam sabores orientais e ocidentais, como rolos de tempurá com recheios variados e nigiris criativos, proporcionando uma explosão de sabores.',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/40/5c/36/c-fusion-sushi.jpg',
            },
          },
          alt: 'Sushi Fusion',
        },
      },
      price: 2400,
      Restaurant: {
        connect: {
          slug: 'aromas-do-oriente',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Baklava de Pistache e Nozes',
      slug: 'baklava-de-pistache-e-nozes',
      description:
        'Uma sobremesa clássica do Oriente Médio, camadas finas de massa folhada crocante intercaladas com uma mistura irresistível de pistache, nozes e xarope de açúcar, uma doçura para encerrar a refeição.',
      images: {
        create: {
          urls: {
            create: {
              url: 'https://www.aperitifalafrancaise.com.br/wp-content/uploads/2023/10/como-fazer-baklava-de-pistache.webp',
            },
          },
          alt: 'Baklava de Pistache e Nozes',
        },
      },
      price: 1800,
      Restaurant: {
        connect: {
          slug: 'aromas-do-oriente',
        },
      },
    },
  });
}
