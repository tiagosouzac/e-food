export class Api {
  private url = "http://localhost:3000/api/"

  private async fetch<T>(url: string, headers?: RequestInit): Promise<T> {
    try {
      const response = await fetch(new URL(url, this.url), headers)
      return await response.json()
    } catch (error) {
      throw new Error(error)
    }
  }

  protected async get<T>(url: string): Promise<T> {
    return await this.fetch<T>(url)
  }

  protected async post<T, U>(url: string, body: T): Promise<U> {
    try {
      return await this.fetch<U>(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}
