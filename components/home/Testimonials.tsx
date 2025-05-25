"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

// Array of activities that can be expanded
const reviews = [
    {
      id: 1,
      rating: 5,
      text: '"The hotel is well located. Rooms are very clean. Great services. Very kind people from front desk and delicious breakfast. And I really love the spa!"',
      author: "Abhishek Shiratti",
      source: "TRIPADVISOR",
      image: "/images/abhishek-shiratti.png?height=80&width=80",
    },
    {
      id: 2,
      rating: 5,
      text: '"The rooms are all renovated and modern. And the staff are very willing to help you plan your day. Thanks for all the staff and this pleased trip!"',
      author: "Shivaraj Patil",
      source: "TRIPADVISOR",
      image: "/images/shivaraj.png?height=80&width=80",
    },
    {
      id: 3,
      rating: 4,
      text: '"Brilliant staff and exceptional customer service. The place is fantastic. Great facilities and atmosphere. Buffet breakfast daily is very generous."',
      author: "Malathi P",
      source: "TRIPADVISOR",
      image: "/images/malathi.png?height=80&width=80",
    },
    {
        id: 4,
        rating: 4,
        text: '"Brilliant staff and exceptional customer service. The place is fantastic. Great facilities and atmosphere. Buffet breakfast daily is very generous."',
        author: "Praveen Kumar",
        source: "TRIPADVISOR",
        image: "/images/praveen-kumar.png?height=80&width=80",
      },
      {
        id: 5,
        rating: 5,
        text: '"Brilliant staff and exceptional customer service. The place is fantastic. Great facilities and atmosphere. Buffet breakfast daily is very generous."',
        author: "Lalitha Pawar",
        source: "TRIPADVISOR",
        image: "/images/lalitha.png?height=80&width=80",
      },
      {
        id: 6,
        rating: 4,
        text: '"Brilliant staff and exceptional customer service. The place is fantastic. Great facilities and atmosphere. Buffet breakfast daily is very generous."',
        author: "Kaveri Hulkoti",
        source: "TRIPADVISOR",
        image: "/images/kaveri.png?height=80&width=80",
      },
      {
        id: 7,
        rating: 4,
        text: '"Brilliant staff and exceptional customer service. The place is Awesome. Great facilities and atmosphere. Buffet breakfast daily is very generous."',
        author: "Mahesh Kumbar",
        source: "GOIBIBO",
        image: "/images/mahesh.png?height=80&width=80",
      },
    // You can add more reviews here following the same structure
  ]

export default function TestimonialsComponent() {
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
      <div className="text-center mb-12">
        <h3 className="text-green-600 uppercase tracking-wide font-medium mb-2">FEEDBACK FROM OUR DEAR GUESTS</h3>
        <h2 className="text-5xl font-serif text-[#333] mt-4">What They Say About Us</h2>
      </div>

      {/* Activities carousel */}
      <div className="relative">
        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="flex-none w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] snap-start items-center text-center">
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                ))}
              </div>
              <p className="text-[#333] mb-6 font-serif leading-relaxed">{review.text}</p>
              <div className="mt-auto">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.author}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-serif text-lg text-[#333]">{review.author}</h4>
                <p className="text-sm text-[#666] uppercase tracking-wide">{review.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
