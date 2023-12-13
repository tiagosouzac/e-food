export interface Restaurant {
  id: string
  name: string
  slug: string
  description: string
  opening_hours: string
  phone: Phone[]
  social: Social[]
  address: Address[]
  categories: Category[]
  images: Image[]
  products: Product[]
}

export interface Phone {
  id: string
  value: string
}

export interface Social {
  id: string
  type: "WhatsApp" | "Instagram" | "Facebook"
  url: string
}

export interface Address {
  id: string
  street: string
  number: string
  neighboorhood: string
  city: string
  state: string
  complement?: string
  postal_code: string
  country: string
}

export interface Category {
  id: string
  name: string
}

export interface Image {
  urls: ImageVariation[]
  alt?: string
}

export interface ImageVariation {
  id: string
  url: string
  media_width?: number
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: Image[]
}
