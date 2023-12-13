import { Api } from "."

export class Restaurants extends Api {
  async list(access_token: string): Promise<[]> {
    return this._get("/restaurants", {
      headers: {
        Authorization: access_token,
      },
    })
  }

  async find(slug: string, access_token: string): Promise<{}> {
    return this._get(`/restaurants/${slug}`, {
      headers: {
        Authorization: access_token,
      },
    })
  }
}
