import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService, JwtService, ConfigService],
})
export class RestaurantModule {}
