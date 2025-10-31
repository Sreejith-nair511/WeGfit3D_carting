"use client"

import { useCart } from "@/lib/cart-context"
import { Trash2, ArrowLeft, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, isInWishlist } = useCart()

  if (wishlist.length === 0) {
    return (
      <main className="min-h-screen bg-background pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-8 fade-in">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="text-center py-20 fade-in-up">
            <Heart size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
            <h1 className="text-3xl font-bold mb-2">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">Add items to your wishlist to save them for later</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-primary to-accent">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-8 fade-in">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 fade-in-up">My Wishlist</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 p-6 card-hover fade-in-up stagger-${(index % 3) + 1}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-5xl">{item.image}</div>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="p-2 bg-white/10 dark:bg-black/20 rounded-lg hover:bg-destructive/20 dark:hover:bg-destructive/20 transition text-destructive"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">${item.price}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => addToCart(item, 1)}
                className="w-full bg-gradient-to-r from-primary to-accent dark:from-primary dark:to-accent hover:shadow-lg hover:shadow-primary/50"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
