"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel slide data
  const slides = [
    {
      id: 1,
      background: "bg-[url('/blog1.jpg?height=600&width=1200')]",
    },
    {
      id: 2,
      background: "bg-[url('/blog2.jpg?height=600&width=1200&text=Slide+2')]",
    },
    {
      id: 3,
      background: "bg-[url('/blog3.webp?height=600&width=1200&text=Slide+3')]",
    },
  ]

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative h-[60vh] min-h-[400px] mb-8 overflow-hidden">
      {/* Carousel slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
              currentSlide === index
                ? "opacity-100 translate-x-0"
                : index < currentSlide || (currentSlide === 0 && index === slides.length - 1)
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            } ${slide.background} bg-cover bg-center`}
            aria-hidden={currentSlide !== index}
          />
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

