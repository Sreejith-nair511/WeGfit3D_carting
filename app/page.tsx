"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductCategories from "@/components/product-categories"
import FeaturedCreations from "@/components/featured-creations"
import CustomBuilder from "@/components/custom-builder"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <FeaturedCreations />
      <CustomBuilder />
      <AboutSection />
      <Footer />
    </main>
  )
}
