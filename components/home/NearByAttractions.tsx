"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"

// Array of attractions that can be expanded


export default function NearByAttractionsComponent() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }

  const t = useTranslations('HomePage');
const attractions = [
  {
    id: 1,
    title: t('siddharodaMatha'),
    image: "/images/siddharodha-matha.png?height=400&width=500",
    description:
      t('siddharodaMathaDescription'),
  },
  {
    id: 2,
    title: t('moorSavirMatha'),
    image: "/images/moor-savir-matha.png?height=400&width=500",
    description: t('moorSavirMathaDescription'),
  },
  {
    id: 3,
    title: t('chandraMouleshwarTemple'),
    image: "/images/chandra-mouleshwar-temple.png?height=400&width=500",
    description:
      t('chandraMouleshwarTempleDescription'),
  },
  {
    id: 4,
    title: t('tolanakereLake'),
    image: "/images/tolankere.png?height=400&width=500",
    description:
      t('tolanakereLakeDescription'),
  },
  {
    id: 5,
    title: t('unakalLake'),
    image: "/images/unakal-lake.png?height=400&width=500",
    description:
      t('unakalLakeDescription'),
  },
  {
    id: 6,
    title: t('nrupatungaHill'),
    image: "/images/nrupatunga.png?height=400&width=500",
    description:
      t('nrupatungaHillDescription'),
  }
]

  useEffect(() => {
    const container = scrollContainerRef.current
    let autoScrollInterval: NodeJS.Timeout
    let pauseTimeout: NodeJS.Timeout
  
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (container) {
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
            container.scrollTo({ left: 0, behavior: "smooth" })
          } else {
            container.scrollBy({ left: 300, behavior: "smooth" })
          }
        }
      }, 20)
    }
  
    const pauseAutoScroll = () => {
      clearInterval(autoScrollInterval)
      clearTimeout(pauseTimeout)
      pauseTimeout = setTimeout(() => {
        startAutoScroll()
      }, 5000) // resume auto-scroll after 5s of no interaction
    }
  
    if (container) {
      container.addEventListener("scroll", () => {
        checkScrollButtons()
        pauseAutoScroll()
      })
      container.addEventListener("mouseenter", pauseAutoScroll)
      container.addEventListener("mouseleave", startAutoScroll)
  
      window.addEventListener("resize", checkScrollButtons)
  
      checkScrollButtons()
      startAutoScroll()
    }
  
    return () => {
      clearInterval(autoScrollInterval)
      clearTimeout(pauseTimeout)
      if (container) {
        container.removeEventListener("scroll", pauseAutoScroll)
        container.removeEventListener("mouseenter", pauseAutoScroll)
        container.removeEventListener("mouseleave", startAutoScroll)
      }
      window.removeEventListener("resize", checkScrollButtons)
    }
  }, [])
  

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (container) {
      const cardWidth = container.querySelector("div")?.offsetWidth || 0
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading section with exact colors */}
      <div className="text-center mb-12">
          <h3 className="text-green-600 text-sm md:text-base font-medium tracking-wide uppercase">
            {t('localAttractions')}
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 text-[#333] leading-tight">
            {t('nearbyAttractionsAround')}
            <br />
            {t('gandhadagudiGarden')}
          </h2>
        </div>

      {/* Activities carousel */}
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#8BAD2B] p-2 rounded-r-md ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {attractions.map((activity) => (
            <div
              key={activity.id}
              className="flex-none w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] border border-[#8BAD2B] snap-start"
            >
              <div className="h-[300px] relative">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-[#333333] font-medium mb-4">{activity.title}</h3>
                <p className="text-[#333333] mb-6">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#8BAD2B] p-2 rounded-l-md ${!canScrollRight ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  )
}
