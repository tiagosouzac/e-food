export interface Restaurant {
  id: string
  name: string
  slug: string
  description: string
  opening_hours: string
  categories: Category[]
  images: Image[]
  products: Product[]
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
