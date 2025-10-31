"use client"

import { useState } from "react"
import { Upload, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CustomBuilder() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  return (
    <section id="customize" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Preview */}
        <div className="relative fade-in-left">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 rounded-3xl p-8 border border-white/10 dark:border-white/5 h-96 flex items-center justify-center">
            {uploadedImage ? (
              <img
                src={uploadedImage || "/placeholder.svg"}
                alt="Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-muted-foreground">Your 3D preview will appear here</p>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Builder */}
        <div className="fade-in-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Create Your Custom Gift</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Upload your photo or text, and watch it transform into a stunning 3D-printed gift. Spin to view from every
            angle.
          </p>

          <div className="space-y-6">
            {/* Upload area */}
            <div className="border-2 border-dashed border-white/20 dark:border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload size={32} className="mx-auto mb-4 text-primary" />
              <p className="font-semibold mb-2">Upload your image or text</p>
              <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Material</label>
                <select className="w-full bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-lg px-4 py-2 text-foreground">
                  <option>Resin (Premium)</option>
                  <option>PLA Plastic</option>
                  <option>Nylon</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <select className="w-full bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-lg px-4 py-2 text-foreground">
                  <option>Small (5cm)</option>
                  <option>Medium (10cm)</option>
                  <option>Large (15cm)</option>
                </select>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-accent dark:from-primary dark:to-accent hover:shadow-lg hover:shadow-primary/50">
              <Wand2 className="mr-2" size={20} />
              Generate 3D Preview
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
