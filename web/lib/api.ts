import { Restaurants } from "@/core/api/restaurants"
import { AuthHelpers } from "./auth"
import { Search } from "@/core/api/search"

export class ApiHelpers {
  private access_token: string
  private url: string

  constructor() {
    const authHelpers = new AuthHelpers()
    this.access_token = authHelpers.getAccessToken()
    this.url = authHelpers.getPageUrl()
  }

  async restaurantsList() {
    const api = new Restaurants()
    const restaurants = await api.list(this.access_token)
    return restaurants
  }

  async findRestaurantBySlug() {
    const slug = new URL(this.url).pathname.replace("/restaurant/", "")
    const api = new Restaurants()

    try {
      const restaurant = await api.find(slug, this.access_token)
      return restaurant
    } catch (error) {
      return null
    }
  }

  async searchByQuery() {
    const api = new Search()
    const query = new URL(this.url).searchParams.get("query")

    try {
      const result = await api.search(query, this.access_token)
      return result
    } catch (error) {
      return []
    }
  }
}
