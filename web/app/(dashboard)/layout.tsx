import { Header } from "@/components/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
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
