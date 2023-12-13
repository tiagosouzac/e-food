import { Product } from "@/core/types/restaurant"
import { formatPrice } from "@/core/utils/format-price"

export function Product({ name, description, images, price }: Product) {
  const formattedPrice = formatPrice(price)
  const firstImage = images?.[0]
  const firstImageVariation = firstImage?.urls?.[0]

  return (
    <li className="card card-bordered card-compact border-neutral-200">
      <figure>
        <img
          className="aspect-video object-cover"
          src={firstImageVariation?.url}
          alt={firstImage?.alt}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>

        <span className="mt-4 text-xl font-semibold text-right">
          {formattedPrice}
        </span>
      </div>
    </li>
  )
}
