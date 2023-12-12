const Api = require(".")

class Auth extends Api {
  /**
   * @param {string} email
   * @param {string} password
   *
   * @returns {Promise<{ access_token: string }>}
   */
  async login(email, password) {
    return this._post("/auth/login", {
      body: JSON.stringify({
        email,
        password,
      }),
    })
  }

  /**
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @param {string} passwordConfirmation
   *
   * @returns {Promise<{ access_token: string }>}
   */
  async register(name, email, password, passwordConfirmation) {
    return this._post("/auth/register", {
      body: JSON.stringify({
        name,
        email,
        password,
        passwordConfirmation,
      }),
    })
  }
}

module.exports = Auth
