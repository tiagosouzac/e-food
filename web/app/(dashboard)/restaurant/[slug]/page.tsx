import { Icon } from "@/components/Icon"
import { Picture } from "@/components/Picture"
import { Product } from "@/components/cards/Product"
import { formatAddress } from "@/core/utils/format-address"
import { ApiHelpers } from "@/lib/api"

export default async function Page() {
  const helpers = new ApiHelpers()
  const restaurant = await helpers.findRestaurantBySlug()

  if (!restaurant) {
    return (
      <strong className="pt-32 text-primary-content text-3xl text-center font-bold col-span-full block">
        Restaurante não encontrado
      </strong>
    )
  }

  const {
    images,
    name,
    categories,
    description,
    opening_hours,
    phone,
    social,
    address,
    products,
  } = restaurant

  const addresses = address.map(formatAddress)

  return (
    <>
      <div className="py-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-restaurant-details lg:gap-8">
        {images.map((image) => (
          <Picture
            key={image.alt}
            className="w-full h-full rounded-2xl object-cover"
            urls={image.urls}
            alt={image.alt}
          />
        ))}

        <div className="grid content-center gap-6">
          <div>
            <h2 className="mb-2 text-2xl font-bold">{name}</h2>

            <div className="mb-6 flex gap-2">
              {categories.map(({ name }) => (
                <span className="badge badge-outline h-6">{name}</span>
              ))}
            </div>

            <p>{description}</p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-full">
            <li>
              <span className="mb-1 font-medium flex items-center gap-1">
                <Icon id="phone" width={20} height={20} />
                Telefone(s)
              </span>

              {phone.map(({ value }) => (
                <span className="block">{value}</span>
              ))}
            </li>

            <li>
              <span className="mb-1 font-medium flex items-center gap-1">
                <Icon id="location" width={20} height={20} />
                Endereços
              </span>

              {addresses.map((address) => (
                <span>{address}</span>
              ))}
            </li>

            <li>
              <span className="mb-1 font-medium flex items-center gap-1">
                <Icon id="clock" width={20} height={20} />
                Horário de funcionamento
              </span>

              <span>{opening_hours}</span>
            </li>

            <li>
              <span className="mb-1 font-medium flex items-center gap-1">
                <Icon id="link" width={20} height={20} />
                Redes sociais
              </span>

              <ul className="flex gap-2">
                {social.map(({ type, url }) => (
                  <li>
                    <a href={url} target="_blank">
                      <Icon
                        id={
                          type.toLowerCase() as
                            | "whatsapp"
                            | "instagram"
                            | "facebook"
                        }
                        width={28}
                        height={28}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-10">
        <h3 className="w-max mx-auto px-20 pb-4 border-b-2 border-neutral-300 text-3xl text-center font-bold">
          Cardápio
        </h3>

        <div className="mt-10 grid grid-cols-card-list gap-6">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  )
}
