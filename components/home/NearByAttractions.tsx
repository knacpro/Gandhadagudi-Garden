"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Array of attractions that can be expanded
const attractions = [
  {
    id: 1,
    title: "Siddharoda Matha",
    image: "/images/siddharodha-matha.png?height=400&width=500",
    description:
      "Siddharoodha Matha in Hubli is a revered spiritual center dedicated to the teachings of Shri Siddharoodha Swami, attracting devotees from across India.",
  },
  {
    id: 2,
    title: "Moor Savir Matha",
    image: "/images/moor-savir-matha.png?height=400&width=500",
    description:
      "​Moorusavira Matha in Hubli is a historic 12th-century Lingayat monastery, named after the arrival of 3,000 Shivasharanas led by Channabasaveshwara, and is renowned for its spiritual heritage and community service.",
  },
  {
    id: 3,
    title: "ChandraMouleshwar Temple",
    image: "/images/chandra-mouleshwar-temple.png?height=400&width=500",
    description:
      "The Chandramouleshwara Temple in Unkal, Hubli, is a 900-year-old Chalukyan-era shrine dedicated to Lord Shiva, renowned for its unique four-faced linga and exquisite carvings that reflect a blend of Shaivism, Vaishnavism, and Shaktism traditions.",
  },
  {
    id: 4,
    title: "Tolanakere Lake",
    image: "/images/tolankere.png?height=400&width=500",
    description:
      "Tolankere Lake in Hubli is a rejuvenated urban oasis featuring walking paths, an open gym, children's play areas, and a serene lake, making it a popular spot for fitness enthusiasts and families alike.",
  },
  {
    id: 5,
    title: "Unakal Lake",
    image: "/images/unakal-lake.png?height=400&width=500",
    description:
      "​Unkal Lake in Hubli is a 200-acre man-made reservoir built in the 11th century during the Chalukya dynasty, serving as a major water source and a scenic spot for recreation and boating.",
  },
  {
    id: 6,
    title: "Nrupatunga Hill",
    image: "/images/nrupatunga.png?height=400&width=500",
    description:
      "​Nrupatunga Hill, also known as Nrupatunga Betta, is a serene hillock in Hubli offering panoramic views of the twin cities, a children's park, and a tranquil environment ideal for morning walks and picnics. ",
  },
];

export default function NearByAttractionsComponent() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    let autoScrollInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (container) {
          if (
            container.scrollLeft >=
            container.scrollWidth - container.clientWidth - 10
          ) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 20);
    };

    const pauseAutoScroll = () => {
      clearInterval(autoScrollInterval);
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        startAutoScroll();
      }, 5000); // resume auto-scroll after 5s of no interaction
    };

    if (container) {
      container.addEventListener("scroll", () => {
        checkScrollButtons();
        pauseAutoScroll();
      });
      container.addEventListener("mouseenter", pauseAutoScroll);
      container.addEventListener("mouseleave", startAutoScroll);

      window.addEventListener("resize", checkScrollButtons);

      checkScrollButtons();
      startAutoScroll();
    }

    return () => {
      clearInterval(autoScrollInterval);
      clearTimeout(pauseTimeout);
      if (container) {
        container.removeEventListener("scroll", pauseAutoScroll);
        container.removeEventListener("mouseenter", pauseAutoScroll);
        container.removeEventListener("mouseleave", startAutoScroll);
      }
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading section with exact colors */}
      <div className="text-center mb-12">
        <h3 className="text-[#8aad2d] text-sm md:text-base font-medium tracking-wide uppercase">
          LOCAL ACTIVITIES & EVENTS
        </h3>
        <h2 className="text-3xl md:text-5xl font-serif mt-4 text-[#333] leading-tight">
          NEARBY ATTRACTIONS AROUND
          <br />
          GANDHADAGUDI GARDEN
        </h2>
      </div>

      {/* Activities carousel */}
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#8BAD2B] p-2 rounded-r-md ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
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
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-[#333333] font-medium mb-4">
                  {activity.title}
                </h3>
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
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#8BAD2B] p-2 rounded-l-md ${
            !canScrollRight ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}
