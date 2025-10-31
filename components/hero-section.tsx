"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/3 dark:via-background dark:to-accent/3" />

      <div className="absolute inset-0 overflow-hidden particle-bg">
        <div className="particle top-20 left-10 w-96 h-96 bg-primary/30 dark:bg-primary/15 rounded-full floating" />
        <div
          className="particle top-40 right-10 w-96 h-96 bg-accent/30 dark:bg-accent/15 rounded-full floating-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="particle -bottom-8 left-1/2 w-96 h-96 bg-accent/20 dark:bg-accent/10 rounded-full floating-fast"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/40 dark:bg-black/30 border border-white/30 dark:border-white/10 rounded-full fade-in backdrop-blur-xl hover:bg-white/50 dark:hover:bg-black/40 transition-all duration-300">
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-semibold uppercase tracking-wide">Welcome to the future of gifting</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance fade-in-up stagger-1 gradient-text">
          We don't need an occasion to gift
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance fade-in-up stagger-2 max-w-3xl mx-auto">
          Personalized. 3D-Printed. Uniquely Yours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
          <Link href="/shop">
            <Button
              size="lg"
              className="btn-primary shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50"
            >
              Shop Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link href="/customize">
            <Button size="lg" className="btn-outline">
              Build Your Own Gift
            </Button>
          </Link>
        </div>

        <div className="mt-20 relative h-96 flex items-center justify-center fade-in-up stagger-4">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl dark:from-primary/5" />
          <div className="relative w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 rounded-3xl flex items-center justify-center border border-white/20 dark:border-white/10 floating shadow-3d backdrop-blur-sm">
            <div className="text-center">
              <div className="text-8xl mb-4 animate-bounce">🎁</div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">3D Gift Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
