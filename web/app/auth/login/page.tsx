export default function Page() {
  return (
    <div className="container py-12 grid justify-items-center content-center gap-10 lg:min-h-screen">
      <h1 className="text-4xl font-bold">
        <a href="/">e-Food</a>
      </h1>

      <div className="card card-bordered card-body">
        <strong className="text-3xl font-bold">Bem vindo de volta!</strong>
        <p>Faça seu login para acessar a plataforma</p>

        <form className="mt-8 grid gap-3">
          <input
            className="input input-bordered"
            type="email"
            name="email"
            placeholder="Ex.: nome@email.com"
          />

          <input
            className="input input-bordered"
            type="password"
            name="password"
            placeholder="Sua senha"
          />

          <button className="btn btn-primary">Entrar</button>
        </form>

        <a className="text-sm link link-hover" href="/">
          Esqueci minha senha
        </a>
      </div>
    </div>
  )
}
