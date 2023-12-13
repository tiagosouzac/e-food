import Link from "next/link"
import { Restaurant } from "@/core/types/restaurant"

export function Restaurant({
  name,
  description,
  slug,
  categories,
  images,
}: Restaurant) {
  const firstImage = images[0]
  const firstImageVariation = firstImage?.urls[0]

  return (
    <Link
      className="card card-bordered card-compact border-neutral-200"
      href={`/restaurant/${slug}`}
    >
      <figure className="aspect-video">
        {firstImage && (
          <img
            className="w-full h-full"
            src={firstImageVariation?.url}
            alt={firstImage.alt}
          />
        )}
      </figure>

      <div className="card-body">
        {!!categories.length && (
          <div className="card-actions mb-2 gap-1">
            {categories.map(({ id, name }) => (
              <span key={id} className="badge badge-outline h-6">
                {name}
              </span>
            ))}
          </div>
        )}

        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}
