"use server"

import { Auth } from "@/core/api/auth"
import { AuthHelpers } from "@/lib/auth"

export const login = async (formData: FormData) => {
  const email = formData.get("email").toString()
  const password = formData.get("password").toString()
  const helpers = new AuthHelpers()

  if (!email || !password) {
    return helpers.setError("Preencha todos os campos")
  }

  try {
    const api = new Auth()
    const { access_token } = await api.login(email, password)
    helpers.setAccessToken(access_token)
  } catch (error) {
    console.error(error)
    helpers.setError("E-mail ou senha inválidos")
  }
}
