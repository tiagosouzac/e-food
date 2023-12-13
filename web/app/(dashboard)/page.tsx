import { Restaurant } from "@/components/cards/Restaurant"
import type { Restaurant as IRestaurant } from "@/core/types/restaurant"
import { ApiHelpers } from "@/lib/api"

export default async function Page() {
  const helpers = new ApiHelpers()
  const restaurants = await helpers.restaurantsList()
  const isEmpty = !restaurants.length

  return (
    <div className="py-6 grid grid-cols-card-list gap-6">
      {isEmpty ? (
        <strong className="pt-32 text-primary-content text-3xl text-center font-bold col-span-full">
          Nenhum restaurante encontrado
        </strong>
      ) : (
        <>
          {restaurants.map((restaurant: IRestaurant) => (
            <Restaurant key={restaurant.id} {...restaurant} />
          ))}
        </>
      )}
    </div>
  )
}
