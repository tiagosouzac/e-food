import { PrismaClient } from '@prisma/client';
import { seedRestaurantsTable } from './restaurants';
import { seedProducts } from './products';

const prisma = new PrismaClient();

const seed = async () => {
  await seedRestaurantsTable(prisma);
  await seedProducts(prisma);
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
