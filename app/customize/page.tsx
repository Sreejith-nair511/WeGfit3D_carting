"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Upload, Wand2, Palette, Maximize2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CustomizePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [material, setMaterial] = useState("resin")
  const [size, setSize] = useState("medium")
  const [color, setColor] = useState("white")

  const materials = [
    { id: "resin", name: "Premium Resin", price: "$49.99", description: "Crystal clear, high detail" },
    { id: "pla", name: "Eco PLA", price: "$29.99", description: "Biodegradable, sustainable" },
    { id: "nylon", name: "Nylon Pro", price: "$39.99", description: "Durable, flexible" },
  ]

  const sizes = [
    { id: "small", name: "Small", dimension: "5cm", price: "+$0" },
    { id: "medium", name: "Medium", dimension: "10cm", price: "+$15" },
    { id: "large", name: "Large", dimension: "15cm", price: "+$30" },
  ]

  const colors = [
    { id: "white", name: "Pearl White", hex: "#f5f5f5" },
    { id: "black", name: "Midnight Black", hex: "#1a1a1a" },
    { id: "gold", name: "Gold", hex: "#d4af37" },
    { id: "silver", name: "Silver", hex: "#c0c0c0" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/2 dark:via-background dark:to-accent/2" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating" />
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-slow"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance fade-in-up">Create Your Masterpiece</h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance fade-in-up stagger-1">
            Transform your memories into stunning 3D-printed gifts with our advanced customization tool
          </p>
        </div>
      </section>

      {/* Main Customize Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Preview */}
          <div className="fade-in-left sticky top-24">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 rounded-3xl p-8 border border-white/10 dark:border-white/5 min-h-96 flex items-center justify-center overflow-hidden">
                {uploadedImage ? (
                  <div className="relative w-full h-full">
                    <img
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-7xl mb-4 animate-bounce">🎨</div>
                    <p className="text-lg text-muted-foreground font-medium">Your 3D preview will appear here</p>
                    <p className="text-sm text-muted-foreground mt-2">Upload an image to get started</p>
                  </div>
                )}
              </div>
            </div>

            {/* Preview Info */}
            <div className="mt-8 p-6 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl fade-in-up stagger-2">
              <h3 className="font-semibold mb-4">Preview Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material:</span>
                  <span className="font-medium capitalize">{material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="font-medium capitalize">{size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Color:</span>
                  <span className="font-medium capitalize">{color}</span>
                </div>
                <div className="border-t border-white/10 dark:border-white/5 pt-3 mt-3 flex justify-between font-semibold">
                  <span>Estimated Price:</span>
                  <span>$49.99</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Builder */}
          <div className="fade-in-right space-y-8">
            {/* Upload Section */}
            <div>
              <h2 className="text-3xl font-bold mb-2">Step 1: Upload Your Design</h2>
              <p className="text-muted-foreground mb-6">Choose a photo or design to transform into a 3D gift</p>

              <div className="border-2 border-dashed border-white/20 dark:border-white/10 rounded-2xl p-12 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <Upload size={48} className="mx-auto mb-4 text-primary" />
                </div>
                <p className="font-semibold mb-2 text-lg">Drag and drop your image</p>
                <p className="text-sm text-muted-foreground">or click to browse (PNG, JPG up to 10MB)</p>
              </div>
            </div>

            {/* Material Selection */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette size={20} className="text-primary" />
                <h3 className="text-xl font-bold">Step 2: Choose Material</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setMaterial(mat.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      material === mat.id
                        ? "border-primary bg-primary/10 dark:bg-primary/5"
                        : "border-white/10 dark:border-white/5 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">{mat.name}</p>
                        <p className="text-sm text-muted-foreground">{mat.description}</p>
                      </div>
                      <p className="font-bold text-primary">{mat.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Maximize2 size={20} className="text-primary" />
                <h3 className="text-xl font-bold">Step 3: Select Size</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      size === s.id
                        ? "border-primary bg-primary/10 dark:bg-primary/5"
                        : "border-white/10 dark:border-white/5 hover:border-primary/50"
                    }`}
                  >
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.dimension}</p>
                    <p className="text-sm font-medium text-primary mt-1">{s.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette size={20} className="text-primary" />
                <h3 className="text-xl font-bold">Step 4: Pick Color</h3>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      color === c.id ? "border-primary scale-110" : "border-white/10 dark:border-white/5"
                    }`}
                  >
                    <div
                      className="w-full h-12 rounded-lg mb-2 border border-white/20"
                      style={{ backgroundColor: c.hex }}
                    />
                    <p className="text-xs font-medium text-center">{c.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button className="w-full h-14 bg-gradient-to-r from-primary to-accent dark:from-primary dark:to-accent hover:shadow-lg hover:shadow-primary/50 text-lg font-semibold fade-in-up stagger-5">
              <Wand2 className="mr-2" size={20} />
              Generate 3D Preview & Add to Cart
            </Button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white/5 dark:bg-black/20 rounded-lg border border-white/10 dark:border-white/5">
                <Zap size={20} className="text-primary mb-2" />
                <p className="text-sm font-medium">Fast Processing</p>
                <p className="text-xs text-muted-foreground">Ready in 24 hours</p>
              </div>
              <div className="p-4 bg-white/5 dark:bg-black/20 rounded-lg border border-white/10 dark:border-white/5">
                <Zap size={20} className="text-primary mb-2" />
                <p className="text-sm font-medium">Quality Guaranteed</p>
                <p className="text-xs text-muted-foreground">Premium materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-white/5 dark:bg-black/20 rounded-3xl border border-white/10 dark:border-white/5">
        <h2 className="text-4xl font-bold text-center mb-16 fade-in-up">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Upload", desc: "Share your photo or design" },
            { step: "2", title: "Customize", desc: "Choose material, size & color" },
            { step: "3", title: "Preview", desc: "See your 3D model in real-time" },
            { step: "4", title: "Order", desc: "Add to cart and checkout" },
          ].map((item, idx) => (
            <div key={idx} className={`text-center fade-in-up stagger-${(idx % 4) + 1}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
