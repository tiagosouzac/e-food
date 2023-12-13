import { Image } from "@/core/types/restaurant"

interface Source {
  src: string
  media: `(max-width: ${number}px)` | `(min-width: ${number}px)`
}

interface Props extends Image {
  className?: string
}

export function Picture({ urls, alt, className }: Props) {
  return (
    <picture>
      {urls?.map((source) => (
        <source
          key={source.id}
          media={`(max-width: ${source.media_width}px)`}
          srcSet={source.url}
        />
      ))}

      <img className={className} src={urls?.[0].url} alt={alt} />
    </picture>
  )
}
