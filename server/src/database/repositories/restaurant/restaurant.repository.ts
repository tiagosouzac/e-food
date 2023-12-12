import { Injectable } from '@nestjs/common';
import { Restaurant } from '../../entities/restaurant.entity';

@Injectable()
export abstract class RestaurantRepository {
  abstract list(): Promise<Restaurant[]>;
  abstract findBySlug(slug: string): Promise<Restaurant | null>;
  abstract search(id: string): Promise<Restaurant[] | null>;
}
