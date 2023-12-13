import { AuthHelpers } from "@/lib/auth"
import { login } from "./action"

export default function Page() {
  const helpers = new AuthHelpers()
  const error = helpers.getErrorMessage()

  return (
    <>
      <strong className="text-3xl text-center font-bold">
        Bem vindo de volta!
      </strong>

      <p className="text-center">Faça seu login para acessar a plataforma</p>

      <form className="mt-8 grid gap-3" action={login}>
        <input
          className="input input-bordered"
          type="email"
          name="email"
          placeholder="E-mail, ex.: nome@email.com"
          required
        />

        <input
          className="input input-bordered"
          type="password"
          name="password"
          placeholder="Senha"
          required
        />

        <button className="btn btn-primary">Entrar</button>

        {error && (
          <p className="text-red-500 text-sm text-center font-medium">
            {error}
          </p>
        )}
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
