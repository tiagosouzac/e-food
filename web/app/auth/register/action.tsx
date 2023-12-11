"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export async function register(formData: FormData) {
  const email = formData.get("email").toString()
  const password = formData.get("password").toString()
  const passwordConfirmation = formData.get("passwordConfirmation").toString()

  try {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, passwordConfirmation }),
    })

    if (!response.ok) {
      throw new Error("E-mail ou senhas inválidas")
    }

    const data = await response.json()
    const token = data.access_token
    cookies().set("access_token", token)
  } catch (error) {
    console.error(error)

    return {
      error: error.message,
    }
  }

  if (cookies().get("access_token")) {
    redirect("/")
  }
}
