"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"
import { useState } from "react"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(products.map((p) => p.category)))
  const filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">Shop All Products</h1>
        <p className="text-lg text-muted-foreground mb-12 fade-in-up stagger-1">
          Browse our complete collection of personalized gifts
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 fade-in-up stagger-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-white/10 text-foreground"
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-white/10 text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
