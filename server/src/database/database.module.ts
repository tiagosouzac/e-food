import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from './repositories/user/user.repository';
import { PrismaUserRepository } from './repositories/user/prisma.repository';
import { RestaurantRepository } from './repositories/restaurant/restaurant.repository';
import { PrismaRestaurantRepository } from './repositories/restaurant/prisma.repository';

@Module({
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
    { provide: RestaurantRepository, useClass: PrismaRestaurantRepository },
  ],
  exports: [UserRepository, RestaurantRepository],
})
export class DatabaseModule {}
