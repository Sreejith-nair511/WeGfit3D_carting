"use client"

import { Play } from "lucide-react"

const featured = [
  { id: 1, name: "Custom Photo Lamp", price: "$89", image: "💡", rating: 4.9 },
  { id: 2, name: "Personalized Keychain", price: "$29", image: "🔑", rating: 4.8 },
  { id: 3, name: "Smart NFC Gift Tag", price: "$49", image: "📱", rating: 4.7 },
]

export default function FeaturedCreations() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Creations</h2>
        <p className="text-lg text-muted-foreground">Handpicked masterpieces from our community</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((item, index) => (
          <div key={item.id} className={`group relative overflow-hidden rounded-2xl fade-in-up stagger-${index + 1}`}>
            {/* Product card */}
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-2xl p-8 h-80 flex flex-col justify-between border border-white/10 dark:border-white/5 card-hover">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-primary font-semibold">{item.price}</p>
                </div>
                <button className="p-3 bg-white/10 dark:bg-black/20 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-all">
                  <Play size={20} className="text-primary" fill="currentColor" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-4xl">{item.image}</span>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.rating} rating</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
