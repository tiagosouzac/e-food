import { PrismaClient } from '@prisma/client';
import { hash, genSalt } from 'bcrypt';

export async function seedUsers(prisma: PrismaClient) {
  await prisma.user.create({
    data: {
      name: 'Fred',
      email: 'fred@graodireto.com.br',
      password: await hash('123Fred', await genSalt()),
    },
  });
}
