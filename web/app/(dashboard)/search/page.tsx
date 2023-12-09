import { Restaurant } from "@/components/cards/Restaurant"
import { SearchProduct } from "@/components/cards/SearchProduct"

export default function Page() {
  return (
    <>
      <div className="py-6">
        <h2 className="text-2xl font-bold">Restaurantes</h2>

        <div className="mt-4 grid grid-cols-card-list gap-6">
          <Restaurant />
          <Restaurant />
          <Restaurant />
        </div>
      </div>

      <div className="py-6">
        <h3 className="text-2xl font-bold">Pratos</h3>

        <div className="mt-4 grid grid-cols-card-list gap-6">
          <SearchProduct />
          <SearchProduct />
          <SearchProduct />
        </div>
      </div>

      <div className="py-6">
        <h3 className="text-2xl font-bold">Bebidas</h3>

        <div className="mt-4 grid grid-cols-card-list gap-6">
          <SearchProduct />
          <SearchProduct />
          <SearchProduct />
        </div>
      </div>

      <div id="dishes" className="py-6">
        <h3 className="text-2xl font-bold">Sobremesas</h3>

        <div className="mt-4 grid grid-cols-card-list gap-6">
          <SearchProduct />
          <SearchProduct />
          <SearchProduct />
        </div>
      </div>
    </>
  )
}
