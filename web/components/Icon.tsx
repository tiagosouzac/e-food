type Icons = "search"

interface Props {
  id: Icons
  width: number
  height: number
  className?: string
}

export function Icon({ id, width, height, className }: Props) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`/icons.svg#${id}`} />
    </svg>
  )
}
