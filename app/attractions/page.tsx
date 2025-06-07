"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";
import HeaderComponent from "@/components/header/header";
import BookResort from "@/components/BookResort";
import FooterComponent from "@/components/footer/footer";
import SocialMediaFloatingIcons from "@/components/home/SocialMediaFloatingIcons";

interface Attraction {
  id: number;
  title: string;
  description: string;
  image: string;
}

const attractions: Attraction[] = [
  {
    id: 1,
    title: "Sathodi Falls",
    description:
      "Sathodi Falls is a serene and picturesque waterfall nestled in the forests near Yellapur in Uttara Kannada. Surrounded by lush greenery, it's a perfect spot for nature lovers and those seeking tranquility.",
    image: "/images/SathodiFalls1.jpg",
  },
  {
    id: 2,
    title: "Nuggikeri Hanuman Temple",
    description:
      "Temple, located near Dharwad, is a sacred site dedicated to Lord Hanuman. Known for its spiritual ambiance and historical significance, the temple attracts devotees seeking peace, blessings, and fulfillment of wishes.",
    image: "/images/nuggikeri.jpg",
  },
  {
    id: 3,
    title: "Madod Falls",
    description:
      "Magod Falls is a stunning two-tiered waterfall near Yellapur, where the Bedti River cascades down rugged cliffs into a deep rocky valley. Surrounded by dense forests, it's a perfect escape for nature lovers and photographers.",
    image: "/images/magod.jpg",
  },
  {
    id: 4,
    title: "Shri Shivashakti Dhama",
    description:
      "Shri Shivashakti Dhama, situated in Hubballi, Karnataka, is a spiritual complex encompassing temples dedicated to Lord Shiva, Ganesha, Chandikeshwari Mata, and Shaneshwar, spread across 6.5 acres. ",
    image: "/images/shiv.jpg",
  },
];

function AttractionsCarousel() {
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
      }, 5000);
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
      <div className="text-center mb-12">
        <h3 className="text-[#a4b743] uppercase tracking-wide font-medium mb-4">
          LOCAL ACTIVITIES & EVENTS
        </h3>
        <h2 className="text-[#2d4a3e] text-5xl font-medium tracking-wide">
          ATTRACTIONS AROUND OUR GARDEN
        </h2>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#a4b743] text-white p-3 rounded-r-md ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="flex-none w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] border border-[#a4b743] snap-start"
            >
              <div className="h-[300px] relative">
                <Image
                  src={attraction.image}
                  alt={attraction.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-medium text-[#2d4a3e] mb-4">
                  {attraction.title}
                </h3>
                <p className="text-gray-700 mb-6">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#a4b743] text-white p-3 rounded-l-md ${
            !canScrollRight ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default function AttractionsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="bg-green-100">
        <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <section
        className="text-center bg-cover bg-center text-white py-40 px-5"
        style={{ backgroundImage: "url(/images/attractions-background.png)" }}
      >
        <h1 className="text-5xl font-bold">Attractions</h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 md:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lime-600 font-medium uppercase tracking-wide ">
                ATTRACTIONS
              </h2>
              <h1 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
                Attractions Around Gandhadagudi Garden
              </h1>
            </div>

            <div className="text-gray-700 space-y-4">
              <p className="leading-relaxed">
                Discover the charm of Byahatti and its surroundings! After
                enjoying a peaceful day at Gandhadagudi Garden, explore nearby
                attractions like serene countryside roads, local temples,
                traditional farming scenes, and seasonal flower fields. Whether
                you are into nature photography, village exploration, or simply
                unwinding in green open spaces — there&apos;s always something
                beautiful just around the corner.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-lime-500 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-lime-600" />
                </div>
                <div>
                  <p className="text-lime-600 text-sm font-medium">
                    CALL US FOR MORE INFORMATION
                  </p>
                  <p className="text-2xl font-medium text-gray-800">
                    +91 9740806599
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/attraction-1.png"
                alt="Gandhadagudi Garden"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/attraction-2.jpg"
                alt="Gandhadagudi Garden"
                fill
                className="object-cover object-right"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Dudhsagar Falls */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:px-6 lg:px-8 bg-green-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 md:h-[350px] overflow-hidden rounded-lg group">
            <Image
              src="/images/Siddharood_Swami_Math.jpg"
              alt="your_alt"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6 p-4">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
              Sri SiddharoodhaSwami Math
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Siddharoodha Swami Math, located in Hubballi, is a revered
              spiritual center known for its peaceful ambiance and deep-rooted
              cultural significance. Surrounded by calm surroundings and visited
              by devotees from all over, it offers a serene space for
              meditation, prayer, and quiet reflection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 p-4 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
              Unkal Lake
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unkal Lake, located in Hubballi, is a calm and scenic spot perfect
              for family outings and peaceful evening walks. Surrounded by
              greenery and known for its beautiful sunset views, it&apos;s an ideal
              place to relax, unwind, and connect with nature.
            </p>
          </div>

          <div className="relative h-96 md:h-[350px] overflow-hidden rounded-lg order-1 lg:order-2 group">
            <Image
              src="/images/unkal.jpg"
              alt="unkal_lake"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 md:h-[350px] overflow-hidden rounded-lg group">
            <Image
              src="/images/betta.jpg"
              alt="N_betta"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6 p-4">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
              Nrupatunga Betta
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nrupatunga Betta, located in Hubballi, is a popular hilltop garden
              offering panoramic views of the city. With well-maintained paths,
              fresh air, and a peaceful atmosphere, it is a favorite spot for
              morning walks, light trekking, and sunset watching.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 p-4 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
              Chandramauleshwara Temple
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Chandramouleshwar Temple, situated near Unkal in Hubballi, is an
              ancient stone temple dedicated to Lord Shiva. Known for its
              remarkable Chalukyan architecture and historical significance, it
              offers a serene atmosphere for spiritual reflection and cultural
              exploration.
            </p>
          </div>

          <div className="relative h-96 md:h-[350px] overflow-hidden rounded-lg order-1 lg:order-2 group">
            <Image
              src="/images/temple.jpeg"
              alt="Temple_view"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 md:h-[350px] overflow-hidden rounded-lg group">
            <Image
              src="/images/tolankere.png"
              alt="Tolankere_view"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6 p-4">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
              Tolankere Lake
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tolankere Lake, nestled in the heart of Hubballi, is a peaceful
              retreat surrounded by lush greenery. Ideal for early morning
              walks, bird watching, and quiet moments by the water, it&apos;s a
              hidden gem for those looking to connect with nature away from the
              city&apos;s rush.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 p-4 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
              Moorusavira Math
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Moorsavira Matha, located in Hubballi, is a renowned spiritual
              center with a rich legacy of over 800 years. Known for its
              community service, cultural activities, and peaceful surroundings,
              it offers visitors a place for devotion, learning, and quiet
              contemplation.
            </p>
          </div>

          <div className="relative h-96 md:h-[350px] overflow-hidden rounded-lg order-1 lg:order-2 group">
            <Image
              src="/images/moorsavirmath.jpg"
              alt="Moorsavira_math"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <AttractionsCarousel />
      <BookResort />
      <FooterComponent />
      <SocialMediaFloatingIcons />
    </main>
  );
}