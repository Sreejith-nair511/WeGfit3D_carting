"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const categories = [
  { id: 1, name: "3D Printed Gifts", icon: "🎁", color: "from-primary" },
  { id: 2, name: "Lamps & Lights", icon: "💡", color: "from-secondary" },
  { id: 3, name: "Frames & Posters", icon: "🖼️", color: "from-accent" },
  { id: 4, name: "Keychains & Tags", icon: "🔑", color: "from-purple-500" },
  { id: 5, name: "Badges & Souvenirs", icon: "🏆", color: "from-pink-500" },
  { id: 6, name: "NFC Smart Gifting", icon: "📱", color: "from-blue-500" },
]

export default function ProductCategories() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Collections</h2>
        <p className="text-lg text-muted-foreground">Discover our curated selection of personalized gifts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={category.id}
            onMouseEnter={() => setHoveredId(category.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer card-hover fade-in-up stagger-${(index % 5) + 1}`}
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.color} to-transparent opacity-10 group-hover:opacity-20 transition-opacity dark:opacity-5 dark:group-hover:opacity-10`}
            />

            {/* Card content */}
            <div className="relative p-8 h-64 flex flex-col justify-between border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm dark:bg-black/20 dark:border-white/5">
              <div>
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold">{category.name}</h3>
              </div>

              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Explore</span>
                <ChevronRight size={16} />
              </div>
            </div>

            {/* Hover glow effect */}
            {hoveredId === category.id && (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl dark:from-primary/10" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
