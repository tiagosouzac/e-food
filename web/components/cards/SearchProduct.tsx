import Link from "next/link"

export function SearchProduct() {
  return (
    <Link
      className="card card-bordered card-compact border-neutral-200"
      href="/"
    >
      <figure>
        <img
          className="aspect-video object-cover"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <div className="mb-2">
          <h2 className="card-title !mb-0">Nome do prato</h2>
          <span className="text-sm underline">Nome do restaurante</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          nostrum ea blanditiis at vero officia?
        </p>

        <span className="mt-4 text-xl font-semibold text-right">R$ 20,00</span>
      </div>
    </Link>
  )
}
