const Api = require(".")

class Restaurants extends Api {
  /**
   * @returns {Promise<Array>}
   */
  async list() {
    return this._get("/restaurants")
  }

  /**
   * @param {string} slug
   * @returns {Promise<Object>}
   */
  async find(slug) {
    return this._get(`/restaurants/${slug}`)
  }
}

module.exports = Restaurants
