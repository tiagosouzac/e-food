import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { FindBySlugDto } from './dtos/find-by-slug.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('restaurants')
@UseGuards(AuthGuard)
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
