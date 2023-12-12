import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from './repositories/user/user.repository';
import { PrismaUserRepository } from './repositories/user/prisma.repository';

@Module({
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
