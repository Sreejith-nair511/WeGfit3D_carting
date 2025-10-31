"use client"

import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart()
  const inWishlist = isInWishlist(product.id)

  return (
    <div className="group relative overflow-hidden rounded-2xl card-premium card-3d-hover fade-in-up">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5" />

      <div className="relative p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="text-6xl">{product.image}</div>
          <button
            onClick={() => (inWishlist ? removeFromWishlist(product.id) : addToWishlist(product))}
            className={`p-2 rounded-lg transition-all duration-300 ${
              inWishlist
                ? "bg-gradient-to-r from-accent to-accent text-white shadow-lg shadow-accent/50"
                : "bg-white/20 dark:bg-black/20 hover:bg-gradient-to-r hover:from-accent hover:to-accent hover:text-white hover:shadow-lg hover:shadow-accent/50 text-muted-foreground"
            }`}
          >
            <Heart size={20} fill={inWishlist ? "currentColor" : "none"} />
          </button>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ${product.price}
          </span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
          </div>
        </div>

        <Button
          onClick={() => addToCart(product, 1)}
          className="w-full btn-primary shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50"
        >
          <ShoppingCart size={18} className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
