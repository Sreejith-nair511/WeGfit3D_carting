"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Users, Globe, Heart, Zap, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const team = [
    { name: "Sarah Chen", role: "Founder & CEO", emoji: "👩‍💼" },
    { name: "Marcus Johnson", role: "CTO", emoji: "👨‍💻" },
    { name: "Elena Rodriguez", role: "Design Lead", emoji: "👩‍🎨" },
    { name: "James Park", role: "Operations", emoji: "👨‍💼" },
  ]

  const values = [
    {
      icon: <Heart size={32} />,
      title: "Customer First",
      description: "Every decision we make is centered around our customers' happiness and satisfaction",
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with 3D printing technology",
    },
    {
      icon: <Globe size={32} />,
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and sustainable manufacturing",
    },
    {
      icon: <Users size={32} />,
      title: "Community",
      description: "We believe in building a vibrant community of creators and gift-givers",
    },
  ]

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "100K+", label: "Gifts Created" },
    { number: "15+", label: "Countries Served" },
    { number: "99.8%", label: "Satisfaction Rate" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/2 dark:via-background dark:to-accent/2" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-animation" />
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-animation"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance fade-in-up">Our Story</h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance fade-in-up stagger-1">
            How we're revolutionizing the art of gifting with 3D printing technology
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl text-center fade-in-up stagger-${(index % 4) + 1}`}
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At WeGift3D, we believe that every gift should tell a story. We're on a mission to transform the way
              people give and receive gifts by combining cutting-edge 3D printing technology with heartfelt
              personalization.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2020, we've grown from a small startup to a global leader in personalized 3D-printed gifts,
              serving customers across 15+ countries and creating over 100,000 unique gifts.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-3">
                <Award size={24} className="text-primary" />
                <div>
                  <p className="font-semibold">Award Winning</p>
                  <p className="text-sm text-muted-foreground">Best Innovation 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Lightbulb size={24} className="text-primary" />
                <div>
                  <p className="font-semibold">Trusted Brand</p>
                  <p className="text-sm text-muted-foreground">By millions worldwide</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 rounded-3xl p-8 border border-white/10 dark:border-white/5 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🎁</div>
                  <p className="text-muted-foreground">Transforming gifts since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground">What drives us every single day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`p-8 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 border border-white/10 dark:border-white/5 rounded-2xl card-hover fade-in-up stagger-${(index % 4) + 1}`}
            >
              <div className="text-primary mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">Passionate creators behind WeGift3D</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className={`p-8 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl text-center card-hover fade-in-up stagger-${(index % 4) + 1}`}
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <div className="p-12 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 border border-white/10 dark:border-white/5 rounded-3xl fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of happy customers and start your gifting journey today
          </p>
          <a
            href="/customize"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent dark:from-primary dark:to-accent hover:shadow-lg hover:shadow-primary/50 rounded-lg font-semibold transition-all text-primary-foreground"
          >
            Start Creating
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
