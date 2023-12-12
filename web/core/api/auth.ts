import { Api } from "."

interface LoginRequest {
  email: string
  password: string
}

interface RegisterRequest {
  email: string
  password: string
  passwordConfirmation: string
}

interface AuthResponse {
  access_token: string
}

export class Auth extends Api {
  async login(email: string, password: string) {
    try {
      const { access_token } = await this.post<LoginRequest, AuthResponse>(
        "/api/auth/login",
        { email, password }
      )

      return access_token
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  async register(
    email: string,
    password: string,
    passwordConfirmation: string
  ) {
    const { access_token } = await this.post<RegisterRequest, AuthResponse>(
      "/auth/login",
      { email, password, passwordConfirmation }
    )

    if (!access_token) {
      throw new Error("Preencha os dados corretamente")
    }

    return access_token
  }
}
