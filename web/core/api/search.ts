import { Api } from "."
import { Restaurant } from "@/core/types/restaurant"

export class Search extends Api {
  async search(query: string, access_token: string): Promise<Restaurant[]> {
    return this._get(`/search?query=${query}`, {
      headers: {
        Authorization: access_token,
      },
    })
  }
}
