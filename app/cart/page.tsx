"use client"

import { useCart } from "@/lib/cart-context"
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, cartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-background pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-8 fade-in">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="text-center py-20 fade-in-up">
            <ShoppingBag size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
            <h1 className="text-3xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
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
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-8 fade-in">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 fade-in-up">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className={`flex gap-4 p-6 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl card-hover fade-in-up stagger-${(index % 3) + 1}`}
              >
                <div className="text-5xl">{item.image}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 bg-white/10 dark:bg-black/20 rounded hover:bg-primary/20 dark:hover:bg-primary/30 transition"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-white/10 dark:bg-black/20 rounded hover:bg-primary/20 dark:hover:bg-primary/30 transition"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">${item.price} each</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 hover:bg-destructive/20 dark:hover:bg-destructive/20 rounded-lg transition text-destructive"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 border border-white/10 dark:border-white/5 rounded-2xl fade-in-right">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-white/10 dark:border-white/5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">$10.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">${(cartTotal + 10 + cartTotal * 0.1).toFixed(2)}</span>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent dark:from-primary dark:to-accent hover:shadow-lg hover:shadow-primary/50">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
