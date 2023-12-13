import { redirect } from "next/navigation"
import { Header } from "@/components/Header"
import { AuthHelpers } from "@/lib/auth"

export default function Layout({ children }: { children: React.ReactNode }) {
  const helpers = new AuthHelpers()
  const access_token = helpers.getAccessToken()
  if (!access_token) redirect("/auth/login")

  return (
    <html lang="pt-br">
      <body>
        <div className="container">
          <Header />

          {children}
        </div>
      </body>
    </html>
  )
}
