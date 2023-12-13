export class Api {
  private baseUrl = "http://localhost:3000/api/v1/"

  private async fetch(path: string, options?: RequestInit) {
    path = path.trim().replace(/^\/+|\/+$/, "")
    const url = new URL(path, this.baseUrl).href

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return await response.json()
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  protected async get(path: string, options?: RequestInit) {
    return this.fetch(path, {
      ...options,
      method: "GET",
    })
  }

  protected async post(path: string, options?: RequestInit) {
    return this.fetch(path, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
