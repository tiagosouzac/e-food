import { Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../database/repositories/restaurant/restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async list() {
    return this.restaurantRepository.list();
  }

  async findBySlug(slug: string) {
    return this.restaurantRepository.findBySlug(slug);
  }
}
