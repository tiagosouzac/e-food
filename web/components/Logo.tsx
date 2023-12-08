interface Props {
  size?: "default" | "large"
}

export function Logo({ size = "default" }: Props) {
  return (
    <h1
      className={`font-bold whitespace-nowrap transition-opacity duration-300 hover:opacity-75 ${
        size === "default" ? "text-2xl" : "text-4xl"
      }`}
    >
      <a href="/">e-Food</a>
    </h1>
  )
}
