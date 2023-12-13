import { AuthHelpers } from "@/lib/auth"
import { register } from "./action"

export default function Page() {
  const helpers = new AuthHelpers()
  const error = helpers.getErrorMessage()

  return (
    <>
      <strong className="text-3xl text-center font-bold">Bem vindo!</strong>

      <p className="text-center">
        Para se cadastrar, por favor, preencha os dados abaixo
      </p>

      <form className="mt-8 grid gap-3" action={register}>
        <input
          className="input input-bordered"
          type="text"
          name="name"
          placeholder="Seu nome"
          required
        />

        <input
          className="input input-bordered"
          type="email"
          name="email"
          placeholder="Seu e-mail, ex.: nome@email.com"
          required
        />

        <input
          className="input input-bordered"
          type="password"
          name="password"
          placeholder="Senha"
          required
        />

        <input
          className="input input-bordered"
          type="password"
          name="passwordConfirmation"
          placeholder="Confirme sua senha"
          required
        />

        <button className="btn btn-primary">Cadastrar</button>

        {error && (
          <p className="text-red-500 text-sm text-center font-medium">
            {error}
          </p>
        )}
      </form>

      <a className="link link-hover text-sm text-center" href="/auth/login">
        Já tem uma conta? Faça login
      </a>
    </>
  )
}
