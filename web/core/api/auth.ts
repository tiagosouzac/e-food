import { Api } from "."

interface AuthResponse {
  access_token: string
}

export class Auth extends Api {
  async login(email: string, password: string): Promise<AuthResponse> {
    return this._post("/auth/login", {
      body: JSON.stringify({
        email,
        password,
      }),
    })
  }

  async register(
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ): Promise<AuthResponse> {
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
