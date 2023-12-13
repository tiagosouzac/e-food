import { PrismaClient } from '@prisma/client';
import { seedRestaurantsTable } from './restaurants';
import { seedProducts } from './products';
import { seedUsers } from './users';

const prisma = new PrismaClient();

const seed = async () => {
  await seedUsers(prisma);
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
