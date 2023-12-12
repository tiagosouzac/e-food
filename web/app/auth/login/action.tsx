"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Auth as AuthApi } from "@/core/api/auth"

const api = new AuthApi()

export async function login(formData: FormData) {
  const email = formData.get("email").toString()
  const password = formData.get("password").toString()

  try {
    const accessToken = await api.login(email, password)

    if (!accessToken) {
      throw new Error("E-mail ou senha inválidos")
    }

    cookies().set("access_token", accessToken)
  } catch (error) {
    console.error(error)
    // TODO: handle error
  }

  if (cookies().get("access_token")) {
    redirect("/")
  }
}
