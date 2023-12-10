import { PrismaClient } from '@prisma/client';
import { seedRestaurantsTable } from './restaurants';

const prisma = new PrismaClient();

Promise.all([new Promise(() => seedRestaurantsTable(prisma))])
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
