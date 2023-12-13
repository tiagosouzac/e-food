import { Api } from "."
import { Restaurant } from "@/core/types/restaurant"

export class Restaurants extends Api {
  async list(access_token: string): Promise<[]> {
    return this._get("/restaurants", {
      headers: {
        Authorization: access_token,
      },
    })
  }

  async find(slug: string, access_token: string): Promise<Restaurant> {
    return this._get(`/restaurants/${slug}`, {
      headers: {
        Authorization: access_token,
      },
    })
  }
}
