interface Source {
  src: string
  media: `(max-width: ${number}px)` | `(min-width: ${number}px)`
}

interface Props {
  sources?: Source[]
  alt?: string
  className?: string
}

export function Picture({ sources, alt, className }: Props) {
  return (
    <picture>
      {sources?.map((source) => (
        <source key={source.src} media={source.media} srcSet={source.src} />
      ))}

      <img className={className} src={sources?.[0].src} alt={alt} />
    </picture>
  )
}
