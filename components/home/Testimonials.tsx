"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { useTranslations } from "next-intl"
// Array of activities that can be expanded


export default function TestimonialsComponent() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  // const [canScrollLeft, setCanScrollLeft] = useState(false)
  // const [canScrollRight, setCanScrollRight] = useState(true)
  const t = useTranslations('HomePage');
  const checkScrollButtons = () => {
    const container = scrollContainerRef.current
    if (container) {
      // setCanScrollLeft(container.scrollLeft > 0)
      // setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: t('abhishekShiratti'),
      author: t('abhishekShirattiName'),
      source: "TRIPADVISOR",
      image: "/images/abhishek-shiratti.png?height=80&width=80",
    },
    {
      id: 2,
      rating: 5,
      text: t('shivarajPatil'),
      author: t('shivarajPatilName'),
      source: "TRIPADVISOR",
      image: "/images/shivaraj.png?height=80&width=80",
    },
    {
      id: 3,
      rating: 4,
      text: t('malathiP'),
      author: t('malathiPName'),
      source: "TRIPADVISOR",
      image: "/images/malathi.png?height=80&width=80",
    },
    {
        id: 4,
        rating: 4,
        text: t('praveenKumar'),
        author: t('praveenKumarName'),
        source: "TRIPADVISOR",
        image: "/images/praveen-kumar.png?height=80&width=80",
      },
      {
        id: 5,
        rating: 5,
        text: t('lalithaPawar'),
        author: t('lalithaPawarName'),
        source: "TRIPADVISOR",
        image: "/images/lalitha.png?height=80&width=80",
      },
      {
        id: 6,
        rating: 4,
        text: t('kaveriHulkoti'),
        author: t('kaveriHulkotiName'),
        source: "TRIPADVISOR",
        image: "/images/kaveri.png?height=80&width=80",
      },
      {
        id: 7,
        rating: 4,
        text: t('maheshKumbar'),
        author: t('maheshKumbarName'),
        source: "GOIBIBO",
        image: "/images/mahesh.png?height=80&width=80",
      },
    // You can add more reviews here following the same structure
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
  

  // const scroll = (direction: "left" | "right") => {
  //   const container = scrollContainerRef.current
  //   if (container) {
  //     const cardWidth = container.querySelector("div")?.offsetWidth || 0
  //     const scrollAmount = direction === "left" ? -cardWidth : cardWidth
  //     container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  //   }
  // }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading section with exact colors */}
      <div className="text-center mb-12">
        <h3 className="text-green-600 uppercase tracking-wide font-medium mb-2">{t('feedbackFromOurDearGuests')}</h3>
        <h2 className="text-5xl font-serif text-[#333] mt-4">{t('whatTheySayAboutUs')}</h2>
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
