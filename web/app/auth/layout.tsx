import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Logo } from "@/components/Logo"

export default function Layout({ children }: { children: React.ReactNode }) {
  const access_token = cookies().get("access_token")
  if (access_token) redirect("/")

  return (
    <html lang="pt-br">
      <body>
        <div className="container py-12 grid justify-items-center content-center gap-10 lg:min-h-screen">
          <Logo size="large" />

          <div className="w-full max-w-sm card card-bordered card-body">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
