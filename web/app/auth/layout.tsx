export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="container py-12 grid justify-items-center content-center gap-10 lg:min-h-screen">
          <h1 className="text-4xl font-bold">
            <a href="/">e-Food</a>
          </h1>

          <div className="w-full max-w-sm card card-bordered card-body">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
