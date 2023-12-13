import { SearchItem } from "@/components/cards/SearchItem"
import { ApiHelpers } from "@/lib/api"

export default async function Page() {
  const helpers = new ApiHelpers()
  const result = await helpers.searchByQuery()

  if (!result?.length) {
    return (
      <strong className="pt-32 text-primary-content text-3xl text-center font-bold col-span-full block">
        Nenhum resultado encontrado
      </strong>
    )
  }

  return (
    <div className="py-6 grid gap-12">
      {result.map((item) => (
        <SearchItem key={item.id} {...item} />
      ))}
    </div>
  )
}
