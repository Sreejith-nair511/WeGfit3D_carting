"use client"

import { CheckCircle, Users, Zap, Award } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Get your custom 3D-printed gifts in just 5-7 business days",
    },
    {
      icon: <Users size={32} />,
      title: "Community Driven",
      description: "Join thousands of happy customers creating unique gifts",
    },
    {
      icon: <Award size={32} />,
      title: "Premium Quality",
      description: "High-quality materials and expert craftsmanship guaranteed",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "100% Satisfaction",
      description: "Money-back guarantee if you're not completely satisfied",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        {/* Left side - Content */}
        <div className="fade-in-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About WeGift3D</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We believe that every gift should tell a story. Founded in 2023, WeGift3D revolutionized the gifting
            industry by combining cutting-edge 3D printing technology with personalization.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Our mission is simple: make it easy for anyone to create meaningful, personalized gifts that leave a lasting
            impression. Whether it's a birthday, anniversary, or just because, we don't need an occasion to gift.
          </p>

          <div className="space-y-4">
            {[
              "Over 50,000 happy customers",
              "Custom 3D printing technology",
              "Eco-friendly materials",
              "Fast and reliable shipping",
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-3 fade-in-up stagger-${index + 1}`}>
                <CheckCircle size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Visual */}
        <div className="relative fade-in-right">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 rounded-3xl p-12 border border-white/10 dark:border-white/5 h-96 flex flex-col items-center justify-center text-center">
            <div className="text-7xl mb-6">🎨</div>
            <h3 className="text-2xl font-bold mb-2">Creativity Meets Technology</h3>
            <p className="text-muted-foreground">Transforming ideas into tangible masterpieces</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl hover:border-primary/50 transition-colors card-hover fade-in-up stagger-${(index % 4) + 1}`}
          >
            <div className="text-primary mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
