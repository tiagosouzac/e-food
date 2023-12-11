import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Header } from "@/components/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  const access_token = cookies().get("access_token")
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
