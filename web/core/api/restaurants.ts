import { Api } from "."

export class Restaurants extends Api {
  async list(): Promise<[]> {
    return this._get("/restaurants")
  }

  async find(slug: string): Promise<{}> {
    return this._get(`/restaurants/${slug}`)
  }
}
