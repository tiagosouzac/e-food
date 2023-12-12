import { Injectable, NotFoundException } from '@nestjs/common';
import { RestaurantRepository } from '../database/repositories/restaurant/restaurant.repository';

@Injectable()
export class SearchService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async search(query: string) {
    const result = await this.restaurantRepository.search(query);

    if (!result?.length) {
      throw new NotFoundException(['No results found']);
    }

    return result;
  }
}
