import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  @UseGuards(AuthGuard)
  list() {
    return this.restaurantService.list();
  }

  @Get(':slug')
  @UseGuards(AuthGuard)
  findBySlug(@Param('slug') slug: string) {
    return this.restaurantService.findBySlug(slug);
  }
}
