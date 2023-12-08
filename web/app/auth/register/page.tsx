export default function Page() {
  return (
    <div className="container py-12 grid justify-items-center content-center gap-10 lg:min-h-screen">
      <h1 className="text-4xl font-bold">
        <a href="/">e-Food</a>
      </h1>

      <div className="w-full max-w-sm card card-bordered card-body">
        <strong className="text-3xl font-bold">Bem vindo!</strong>
        <p>Para se cadastrar, por favor, preencha os dados abaixo</p>

        <form className="mt-8 grid gap-3">
          <input
            className="input input-bordered"
            type="email"
            name="email"
            placeholder="Seu e-mail, ex.: nome@email.com"
          />

          <input
            className="input input-bordered"
            type="password"
            name="password"
            placeholder="Senha"
          />

          <input
            className="input input-bordered"
            type="password"
            name="passwordConfirmation"
            placeholder="Confirme sua senha"
          />

          <button className="btn btn-primary">Cadastrar</button>
        </form>

        <a className="link link-hover text-sm text-center" href="/auth/login">
          Já tem uma conta? Faça login
        </a>
      </div>
    </div>
  )
}
