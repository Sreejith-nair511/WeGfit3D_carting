"use client"

import { useState, useEffect } from "react"
import { Heart, ShoppingCart, User, Search, Menu, X, Moon, Sun } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { cartCount, wishlist } = useCart()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10 dark:border-white/5 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-accent flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-white font-bold text-sm">W3D</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WeGift3D
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold hover:text-primary transition-colors duration-300 uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm font-semibold hover:text-primary transition-colors duration-300 uppercase tracking-wide"
            >
              Shop
            </Link>
            <Link
              href="/customize"
              className="text-sm font-semibold hover:text-primary transition-colors duration-300 uppercase tracking-wide"
            >
              Customize
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold hover:text-primary transition-colors duration-300 uppercase tracking-wide"
            >
              About
            </Link>
          </div>

          <div className="hidden lg:flex items-center bg-white/30 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-full px-4 py-2 gap-2 w-48 backdrop-blur-xl hover:bg-white/40 dark:hover:bg-black/30 transition-all duration-300">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search gifts..."
              className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground dark:placeholder:text-muted-foreground"
            />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/wishlist"
              className="relative p-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-lg transition-all duration-300 hover-glow-accent"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-gradient-to-r from-accent to-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg shadow-accent/50">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="relative p-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-lg transition-all duration-300 hover-glow"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-gradient-to-r from-primary to-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg shadow-primary/50">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="p-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-lg transition-all duration-300 hover-glow">
              <User size={20} />
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-lg transition-all duration-300 hover-glow"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 fade-in-down">
            <Link href="/" className="block px-4 py-2 hover:bg-white/5 rounded">
              Home
            </Link>
            <Link href="/shop" className="block px-4 py-2 hover:bg-white/5 rounded">
              Shop
            </Link>
            <Link href="/customize" className="block px-4 py-2 hover:bg-white/5 rounded">
              Customize
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-white/5 rounded">
              About
            </Link>
            <Link href="/cart" className="block px-4 py-2 hover:bg-white/5 rounded">
              Cart ({cartCount})
            </Link>
            <Link href="/wishlist" className="block px-4 py-2 hover:bg-white/5 rounded">
              Wishlist ({wishlist.length})
            </Link>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full text-left px-4 py-2 hover:bg-white/5 rounded flex items-center gap-2"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
