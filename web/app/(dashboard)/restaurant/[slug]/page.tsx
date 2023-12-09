import { Icon } from "@/components/Icon"
import { Picture } from "@/components/Picture"
import { Product } from "@/components/cards/Product"

export default function Page() {
  return (
    <>
      <div className="py-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-restaurant-details lg:gap-8">
        <Picture
          className="w-full h-full rounded-2xl object-cover"
          sources={[
            {
              src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              media: "(max-width: 1024px)",
            },
            {
              src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              media: "(min-width: 1024px)",
            },
          ]}
          alt="Nome do restaurante"
        />

        <div className="grid content-center gap-6">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Nome do restaurante</h2>

            <div className="mb-6 flex gap-2">
              <div className="badge badge-outline h-6">Tradicional</div>
              <div className="badge badge-outline h-6">Chinesa</div>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              harum at temporibus ipsa sunt incidunt nam quo quam aperiam ea
              laudantium, minus aliquam illum voluptatum labore ipsum sapiente
              dignissimos repellendus.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-full">
            <li>
              <span className="mb-1 font-medium flex items-center gap-1">
                <Icon id="phone" width={20} height={20} />
                Telefone(s)
              </span>

              <span className="block">(11) 3831-0000</span>
              <span className="block">(11) 3831-0001</span>
            </li>

            <li>
              <span className="mb-1 font-medium flex items-center gap-1">
                <Icon id="location" width={20} height={20} />
                Endereço
              </span>

              <span>Rua Qualquer, 134, Centro - São Paulo, SP</span>
            </li>

            <li>
              <span className="mb-1 font-medium flex items-center gap-1">
                <Icon id="clock" width={20} height={20} />
                Horário de funcionamento
              </span>

              <span>Seg. a Sex., das 10h às 22h</span>
            </li>

            <li>
              <span className="mb-1 font-medium flex items-center gap-1">
                <Icon id="link" width={20} height={20} />
                Redes sociais
              </span>

              <ul className="flex gap-2">
                <li>
                  <a href="#" target="_blank">
                    <Icon id="whatsapp" width={28} height={28} />
                  </a>
                </li>

                <li>
                  <a href="#" target="_blank">
                    <Icon id="instagram" width={28} height={28} />
                  </a>
                </li>

                <li>
                  <a href="#" target="_blank">
                    <Icon id="facebook" width={28} height={28} />
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="mt-4">
            <span className="font-medium">Confira o cardápio:</span>

            <ul className="mt-2 flex flex-wrap gap-2">
              <li>
                <a className="btn btn-outline btn-sm" href="#dishes">
                  <Icon id="food" width={20} height={20} />
                  Pratos
                </a>
              </li>

              <li>
                <a className="btn btn-outline btn-sm" href="#drinks">
                  <Icon id="beer" width={20} height={20} />
                  Bebidas
                </a>
              </li>

              <li>
                <a className="btn btn-outline btn-sm" href="#desserts">
                  <Icon id="dessert" width={20} height={20} />
                  Sobremesas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="dishes" className="py-6">
        <h3 className="text-2xl font-bold">Pratos</h3>

        <div className="mt-4 grid grid-cols-card-list gap-6">
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div id="drinks" className="py-6">
        <h3 className="text-2xl font-bold">Bebidas</h3>

        <div className="mt-4 grid grid-cols-card-list gap-6">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div id="desserts" className="py-6">
        <h3 className="text-2xl font-bold">Sobremesas</h3>

        <div className="mt-4 grid grid-cols-card-list gap-6">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  )
}
