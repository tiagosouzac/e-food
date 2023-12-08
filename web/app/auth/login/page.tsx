export default function Page() {
  return (
    <div className="container py-12 grid justify-items-center content-center gap-10 lg:min-h-screen">
      <h1 className="text-4xl font-bold">
        <a href="/">e-Food</a>
      </h1>

      <div className="w-full max-w-sm card card-bordered card-body">
        <strong className="text-3xl font-bold">Bem vindo de volta!</strong>
        <p>Faça seu login para acessar a plataforma</p>

        <form className="mt-8 grid gap-3">
          <input
            className="input input-bordered"
            type="email"
            name="email"
            placeholder="E-mail, ex.: nome@email.com"
          />

          <input
            className="input input-bordered"
            type="password"
            name="password"
            placeholder="Senha"
          />

          <button className="btn btn-primary">Entrar</button>
        </form>

        <a className="link link-hover text-sm text-center" href="/">
          Esqueci minha senha
        </a>

        <div className="divider text-neutral-300">ou</div>

        <a className="btn btn-accent" href="/auth/register">
          Crie uma conta
        </a>
      </div>
    </div>
  )
}
