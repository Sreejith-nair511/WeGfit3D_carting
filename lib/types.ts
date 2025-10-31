export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
  description: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface WishlistItem extends Product {}
