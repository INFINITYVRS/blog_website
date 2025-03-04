"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BlogCarousel({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === posts.length - 1 ? 0 : prevIndex + 1))
  }, [posts.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? posts.length - 1 : prevIndex - 1))
  }, [posts.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [nextSlide])

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaX > 50) {
        nextSlide()
      } else if (e.deltaX < -50) {
        prevSlide()
      }
    }

    const carouselElement = document.querySelector(".carousel-container")
    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheel)
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheel)
      }
    }
  }, [nextSlide, prevSlide])

  if (!posts.length) return null

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg carousel-container">
      <div className="absolute inset-0 z-10 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={posts[currentIndex].image || "/placeholder.svg"}
              alt={posts[currentIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <Link href={`/blog/${posts[currentIndex].slug}`} className="absolute inset-0 z-0">
              <span className="sr-only">Read {posts[currentIndex].title}</span>
            </Link>
            <div className="absolute bottom-0 left-0 p-6 text-white z-10">
              <p className="text-sm uppercase tracking-wider mb-2">{posts[currentIndex].category}</p>
              <h2 className="text-3xl font-bold mb-2">{posts[currentIndex].title}</h2>
              <p className="mb-4 line-clamp-2">{posts[currentIndex].excerpt}</p>
              <Link
                href={`/blog/${posts[currentIndex].slug}`}
                className="inline-flex bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
                Read more
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

