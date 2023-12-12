class Api {
  #baseUrl = "http://localhost:3000/api/v1/"

  /**
   * @param {string} path
   * @param {RequestInit} options
   */
  async #fetch(path, options) {
    path = path.trim().replace(/^\/+|\/+$/, "")
    const url = new URL(path, this.#baseUrl).href

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return await response.json()
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  /**
   * @param {string} path
   * @param {RequestInit} options
   */
  async _get(path, options) {
    return this.#fetch(path, {
      ...options,
      method: "GET",
    })
  }

  /**
   * @param {string} path
   * @param {RequestInit} options
   */
  async _post(path, options) {
    return this.#fetch(path, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

module.exports = Api
