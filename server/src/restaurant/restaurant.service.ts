import { Injectable, NotFoundException } from '@nestjs/common';
import { RestaurantRepository } from '../database/repositories/restaurant/restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async list() {
    return this.restaurantRepository.list();
  }

  async findBySlug(slug: string) {
    const restaurant = await this.restaurantRepository.findBySlug(slug);

    if (!restaurant) {
      throw new NotFoundException(['Restaurant not found']);
    }

    return restaurant;
  }
}
