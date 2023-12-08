export default function Page() {
  return (
    <>
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
    </>
  )
}
