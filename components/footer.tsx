"use client"

import { Instagram, Youtube, Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/3 border-t border-white/10 dark:border-white/5 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-bold text-sm">W3D</span>
              </div>
              <span className="font-bold">WeGift3D</span>
            </div>
            <p className="text-sm text-muted-foreground">We don't need an occasion to gift.</p>
            <p className="text-xs text-muted-foreground mt-2">A vertical of Roberon</p>
          </div>

          {/* Links */}
          <div className="fade-in-up stagger-2">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-primary transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#customize" className="hover:text-primary transition">
                  Custom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="fade-in-up stagger-3">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-in-up stagger-4">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>hello@wegift3d.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="p-2 bg-white/5 dark:bg-black/20 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 dark:bg-black/20 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 dark:bg-black/20 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 WeGift3D. All rights reserved.</p>
          <p className="mt-4 md:mt-0">You don't need an occasion to gift.</p>
        </div>
      </div>
    </footer>
  )
}
