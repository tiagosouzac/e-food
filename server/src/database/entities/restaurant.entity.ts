import { randomUUID } from 'node:crypto';

export interface IRestaurant {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  opening_hours: string;
  created_at: Date;
}

export class Restaurant implements IRestaurant {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  opening_hours: string;
  created_at: Date;

  constructor({ id, created_at, ...rest }: IRestaurant) {
    this.id = id ?? randomUUID();
    this.created_at = created_at ?? new Date();
    Object.assign(this, rest);
  }
}
