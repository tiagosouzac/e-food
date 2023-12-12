import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { FindBySlugDto } from './dtos/find-by-slug.dto';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async list() {
    return await this.restaurantService.list();
  }

  @Get(':slug')
  async findBySlug(@Param() { slug }: FindBySlugDto) {
    return await this.restaurantService.findBySlug(slug);
  }
}
