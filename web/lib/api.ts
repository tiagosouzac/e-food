import { Restaurants } from "@/core/api/restaurants"
import { AuthHelpers } from "./auth"

export class ApiHelpers {
  private access_token: string

  constructor() {
    this.access_token = new AuthHelpers().getAccessToken()
  }

  async restaurantsList() {
    const api = new Restaurants()
    const restaurants = await api.list(this.access_token)
    return restaurants
  }

  async findRestaurant(slug: string) {
    const api = new Restaurants()
    const restaurant = await api.find(slug, this.access_token)
    return restaurant
  }
}
