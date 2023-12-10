import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  list() {
    return this.restaurantService.list();
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string) {
    return this.restaurantService.findBySlug(slug);
  }
}
