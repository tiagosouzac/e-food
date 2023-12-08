import Link from "next/link"

export function Restaurant() {
  return (
    <Link
      className="card card-bordered card-compact border-neutral-200"
      href="/search"
    >
      <figure>
        <img
          className="aspect-video object-cover"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Nome do restaurante</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          nostrum ea blanditiis at vero officia?
        </p>

        <div className="card-actions mt-3">
          <div className="badge badge-outline h-6">Tradicional</div>
          <div className="badge badge-outline h-6">Chinesa</div>
        </div>
      </div>
    </Link>
  )
}
