"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Array of activities that can be expanded
const activities = [
  {
    id: 1,
    title: "Gym",
    image: "/images/gym.png?height=400&width=500",
    description:
      "The gym is a place where you challenge your limits, build strength, and grow both physically and mentally.",
  },
  {
    id: 2,
    title: "Garadi Mane",
    image: "/images/garadi-mane.png?height=400&width=500",
    description: "Garadi Mane is a traditional Indian gymnasium where warriors once trained in wrestling and martial arts, preserving age-old physical culture and discipline.",
  },
  {
    id: 3,
    title: "Bird Watching",
    image: "/images/bird.png?height=400&width=500",
    description:
      "Bird watching is a peaceful hobby that connects you with nature while observing the beauty and behavior of birds in their natural habitats.",
  },
  {
    id: 4,
    title: "Horse Riding",
    image: "/images/horse-riding.png?height=400&width=500",
    description:
      "Horse riding is a graceful blend of balance, strength, and harmony between rider and horse.",
  },
  {
    id: 5,
    title: "Swimming",
    image: "/images/swimming-pool.png?height=400&width=500",
    description:
      "Swimming is a full-body workout that refreshes the mind while building strength, endurance, and coordination.",
  },
  {
    id: 6,
    title: "Cow Farming",
    image: "/images/cow-farming.png?height=400&width=500",
    description:
      "Cow farming is the practice of raising cattle for milk, meat, and agriculture, blending tradition with sustainable livelihood.",
  },
  {
    id: 7,
    title: "Boat Riding",
    image: "/images/boat-riding.png?height=400&width=500",
    description:
      "Boat riding is a serene and adventurous way to explore water bodies, blending relaxation with a touch of thrill.",
  },
  {
    id: 8,
    title: "Adventure Kayaking",
    image: "/images/kayaking-1.png?height=400&width=500",
    description:
      "Kayaking is an exhilarating water sport that combines adventure, skill, and a close connection with nature.",
  },
  {
    id: 9,
    title: "Rain Dance",
    image: "/images/rain-dance.png?height=400&width=500",
    description:
      "Rain dance is a joyful celebration of music and water, where people dance freely under showers, embracing the rhythm and the rain.",
  },
  {
    id: 10,
    title: "Fire Camp",
    image: "/images/fire-camp.png?height=400&width=500",
    description:
      "A fire camp is a cozy gathering around a crackling flame, where stories, warmth, and memories are shared under the open sky.",
  },
  {
    id: 11,
    title: "Tree House",
    image: "/images/tree-house1.png?height=400&width=500",
    description:
      "A tree house is a magical retreat nestled among branches, offering adventure, serenity, and a childhood dream come true.",
  },
  {
    id: 12,
    title: "Zip Line",
    image: "/images/zip-line1.png?height=400&width=500",
    description:
      "Zip lining is a thrilling adventure that lets you soar through the air, gliding high above the ground with a rush of adrenaline.",
  },
  {
    id: 13,
    title: "Archery",
    image: "/images/archery.png?height=400&width=500",
    description:
      "Archery is a focused sport of precision and control, where each arrow reflects the archer’s skill and concentration.",
  },
]

export default function ResortActivitiesComponent() {
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
      <h3 className="text-[#8BAD2B] text-lg font-medium tracking-wide">ENJOY ULTIMATE ALPINE EXPERIENCES</h3>
      <h2 className="text-[#333333] text-4xl font-medium mt-4 mb-10">
        GANDHADAGUDI GARDEN ACTIVITIES: ADVENTURE, RELAXATION & MORE
      </h2>

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
          {activities.map((activity) => (
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
                <button className="bg-[#8BAD2B] text-white py-2 px-8 hover:bg-[#7a9a25] transition-colors">
                  View Details
                </button>
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
