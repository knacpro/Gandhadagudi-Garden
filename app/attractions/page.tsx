"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import BookResort from "@/components/BookResort";
import HeaderComponent from "@/components/header/header";

interface Attraction {
  id: number;
  title: string;
  description: string;
  image: string;
}

function AttractionsCarousel() {
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
      description: "Shri Shivashakti Dhama, situated in Hubballi, Karnataka, is a spiritual complex encompassing temples dedicated to Lord Shiva, Ganesha, Chandikeshwari Mata, and Shaneshwar, spread across 6.5 acres. ",
      image: "/images/shiv.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? attractions.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex >= attractions.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const visibleAttractions = () => {
    const result = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (startIndex + i) % attractions.length;
      result.push(attractions[index]);
    }
    return result;
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
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
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#a4b743] text-white p-4"
          aria-label="Previous attraction"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
          {visibleAttractions().map((attraction) => (
            <div key={attraction.id} className="border border-gray-200">
              <div className="relative h-64 w-full">
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
                <p className="text-gray-700">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#a4b743] text-white p-4"
          aria-label="Next attraction"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

export default function Attractions() {
  return (
    <main>
      <HeaderComponent />
      <section
        className="text-center bg-cover bg-center text-white py-40 px-5"
        style={{ backgroundImage: "url(/images/attractions-background.png)" }}
      >
        <h1 className="text-5xl font-bold">Attractions</h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lime-600 font-medium uppercase tracking-wide">
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
                you're into nature photography, village exploration, or simply
                unwinding in green open spaces — there’s always something
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
                    +91 96204 65007
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
      <section className="max-w-7xl mx-auto px-4 py-16 md:px-6 lg:px-8 bg-gray-50">
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
            <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 font-medium transition-colors">
              View Details
            </button>
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
              greenery and known for its beautiful sunset views, it’s an ideal
              place to relax, unwind, and connect with nature.
            </p>
            <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 font-medium transition-colors">
              View Details
            </button>
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
              fresh air, and a peaceful atmosphere, it's a favorite spot for
              morning walks, light trekking, and sunset watching.
            </p>
            <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 font-medium transition-colors">
              View Details
            </button>
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
            <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 font-medium transition-colors">
              View Details
            </button>
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
              walks, bird watching, and quiet moments by the water, it’s a
              hidden gem for those looking to connect with nature away from the
              city’s rush.
            </p>
            <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 font-medium transition-colors">
              View Details
            </button>
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
            <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 font-medium transition-colors">
              View Details
            </button>
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

      {/* Floating Contact Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-2 z-50">
        <Link
          href="#"
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
          aria-label="Call"
        >
          <Phone className="h-6 w-6" />
        </Link>
      </div>
    </main>
  );
}


