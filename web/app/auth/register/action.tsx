"use server"

import { Auth } from "@/core/api/auth"
import { AuthHelpers } from "@/lib/auth"

export const register = async (formData: FormData) => {
  const name = formData.get("name")?.toString()
  const email = formData.get("email")?.toString()
  const password = formData.get("password")?.toString()
  const passwordConfirmation = formData.get("passwordConfirmation")?.toString()
  const helpers = new AuthHelpers()

  if (!email || !password) {
    return helpers.setError("Preencha todos os campos")
  }

  try {
    const api = new Auth()

    const { access_token } = await api.register(
      name,
      email,
      password,
      passwordConfirmation
    )

    helpers.setAccessToken(access_token)
  } catch (error) {
    console.error(error)
    helpers.setError("Preencha os dados corretamente")
  }
}
