import { Logo } from "@/components/Logo"
import { AuthHelpers } from "@/lib/auth"
import { redirect } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  const helpers = new AuthHelpers()
  const access_token = helpers.getAccessToken()
  if (access_token) redirect("/")

  return (
    <html lang="pt-br">
      <body>
        <div className="container py-12 grid justify-items-center content-center gap-12 lg:min-h-screen">
          <Logo />

          <div className="w-full max-w-sm card card-bordered card-body">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
