import Link from "next/link"
import { Restaurant } from "@/core/types/restaurant"
import { Product } from "./Product"

export function SearchItem({ name, slug, images, products }: Restaurant) {
  const firstImage = images?.[0]
  const firstImageVariation = firstImage?.urls?.[0]

  return (
    <div className="grid gap-6">
      <Link
        className="w-max flex items-center gap-2"
        href={`/restaurant/${slug}`}
      >
        <figure>
          <img
            className="w-12 h-12 rounded-full"
            src={firstImageVariation?.url}
            alt={firstImage?.alt}
          />
        </figure>

        <h2 className="text-xl font-bold">{name}</h2>
      </Link>

      <ul className="grid grid-cols-card-list gap-6">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </div>
  )
}
