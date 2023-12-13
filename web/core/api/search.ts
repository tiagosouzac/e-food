import { Api } from "."

export class Search extends Api {
  async search(query: string): Promise<{}> {
    return this._get(`/search?query=${query}`)
  }
}
