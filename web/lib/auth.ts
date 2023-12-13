import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

export class AuthHelpers {
  getPageUrl() {
    return headers().get("page_url")
  }

  setError(errorMessage: string) {
    const url = new URL(this.getPageUrl())
    url.searchParams.set("error", errorMessage)
    return redirect(url.href)
  }

  getErrorMessage() {
    const pageUrl = this.getPageUrl()
    const error = new URL(pageUrl).searchParams.get("error")
    return error
  }

  getAccessToken() {
    return cookies().get("access_token").value
  }

  /**
   * @description The access token is already prefixed with "Bearer"
   */
  setAccessToken(access_token: string) {
    cookies().set("access_token", `Bearer ${access_token}`)
  }
}
