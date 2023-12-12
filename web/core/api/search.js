const Api = require(".")

class Search extends Api {
  /**
   * @param {string} query
   * @returns {Promise<Array>}
   */
  async search(query) {
    return this._get(`/search?query=${query}`)
  }
}

module.exports = Search
