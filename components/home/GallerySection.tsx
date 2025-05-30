"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function GallerySectionComponent() {
  const t = useTranslations('HomePage');
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  const images = [
    {
      src: "/images/kayaking.png",
      alt: "Kayaking",
    },
    {
      src: "/images/bird.png",
      alt: "Colorful bird on a branch",
    },
    {
      src: "/images/pigeon.png",
      alt: "Colorful bird on a branch",
    },
    {
      src: "/images/peacock.png",
      alt: "Colorful bird on a branch",
    },
    {
      src: "/images/children-package.png",
      alt: "Colorful bird on a branch",
    },
    {
      src: "/images/swimming-pool.png",
      alt: "Colorful bird on a branch",
    },
    {
      src: "/images/zip-line.png",
      alt: "Zipline",
    },
  ]

  const startAutoScroll = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
    }

    autoScrollTimerRef.current = setInterval(() => {
      if (isAutoScrolling && scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.scrollWidth
        const viewportWidth = scrollContainerRef.current.offsetWidth
        const maxScroll = containerWidth - viewportWidth

        let newPosition = scrollPosition + 1
        if (newPosition > maxScroll) {
          newPosition = 0
        }

        setScrollPosition(newPosition)
        scrollContainerRef.current.scrollLeft = newPosition
      }
    }, 20)
  }

  const stopAutoScroll = () => {
    setIsAutoScrolling(false)
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
      autoScrollTimerRef.current = null
    }
  }

  const handlePrev = () => {
    stopAutoScroll()
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.offsetWidth / 4
      const newPosition = Math.max(0, scrollPosition - itemWidth)
      setScrollPosition(newPosition)
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
    }
  }

  const handleNext = () => {
    stopAutoScroll()
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.scrollWidth
      const viewportWidth = scrollContainerRef.current.offsetWidth
      const maxScroll = containerWidth - viewportWidth
      const itemWidth = viewportWidth / 4

      const newPosition = Math.min(maxScroll, scrollPosition + itemWidth)
      setScrollPosition(newPosition)
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    startAutoScroll()

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }
    }
  }, [isAutoScrolling, scrollPosition])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollPosition(scrollContainerRef.current.scrollLeft)
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-green-600 font-medium tracking-wide">{t('gallery')}</div>
      <h1 className="text-[#333333] text-4xl sm:text-5xl font-serif mb-8">{t('gandhadagudiGardenGallery')}</h1>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] flex-shrink-0 h-[500px] overflow-hidden"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md focus:outline-none z-10"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md focus:outline-none z-10"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
