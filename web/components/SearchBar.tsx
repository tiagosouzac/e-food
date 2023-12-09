import { Icon } from "@/components/Icon"

export function SearchBar() {
  return (
    <form action="/search" className="navbar-end w-full flex gap-1 lg:max-w-sm">
      <input
        className="w-full input input-bordered overflow-hidden text-ellipsis whitespace-nowrap"
        name="search"
        type="text"
        placeholder="Restaurante, prato, bebida, sobremesa..."
      />

      <button
        className="btn btn-primary btn-square"
        aria-label="Pesquisar por um restaurante, prato, bebida ou sobremesa"
      >
        <Icon id="search" width={20} height={20} />
      </button>
    </form>
  )
}
