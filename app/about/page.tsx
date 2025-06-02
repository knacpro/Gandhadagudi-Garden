"use client";
import Image from "next/image";
import Link from "next/link";
import BookResort from "@/components/BookResort";
import HeaderComponent from "@/components/header/header";
import {
  TreeDeciduous,
  Gamepad2,
  Mountain,
  Flame,
  Utensils,
  Waves,
  MessageCircle,
  Phone,
} from "lucide-react";

import { useState } from "react";
import FooterComponent from "@/components/footer/footer";

export default function Home() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqItems = [
    {
      id: "item-0",
      question: "How far is the garden from the city?",
      answer:
        "Gandhadagudi Garden is just a short drive of 16kms from Hubli, located in the peaceful village called Byahatti.",
    },

    {
      id: "item-1",
      question: "What can visitors do at Gandhadagudi Garden?",
      answer:
        "Visitors can enjoy nature walks, relax in cozy stays, play indoor and outdoor games, and even experience horse riding.",
    },
    {
      id: "item-2",
      question: "Is food available at the garden?",
      answer:
        "Yes! We offer homely, freshly cooked vegetarian and non-vegetarian meals on request.",
    },
    {
      id: "item-3",
      question: "Do we need to book in advance?",
      answer:
        "Advance booking is recommended, especially on weekends, to ensure availability of rooms and activities.",
    },
    {
      id: "item-4",
      question: "Is the garden suitable for kids and families?",
      answer:
        "Absolutely! Families love the peaceful atmosphere, open spaces, and safe play areas for childrens.",
    },
  ];

  return (
    <>
    <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    <main className="min-h-screen bg-green-100">
      

      <section
        className="text-center bg-cover bg-center text-white py-30 px-5"
        style={{ backgroundImage: "url(/images/aboutus-background.png)" }}
      >
        <h1 className="text-5xl font-bold mt-8">About Us</h1>
        <h6 className="text-2xl font-bold mt-2">
          Welcome to Gandhadagudi Garden
        </h6>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-green-600 font-medium mb-2">
          A Paradise Cultivated Just for You
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-3xl font-medium text-gray-800 mb-6">
            Gandhadagudi Garden is a peaceful family getaway in the heart of
            nature, offering fun-filled one-day experiences, friendly
            hospitality, and refreshing outdoor activities for all age groups.
          </h1>

          <p className="text-gray-600 mb-4">
            For those seeking tranquility, we offer the most enchanting garden
            experiences without compromising on serenity, ensuring you immerse
            yourself in natures beauty at its purest.
          </p>
        </div>

        {/* Video Section */}

        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full transform rotate-270"
            src="https://www.youtube.com/embed/yZ5nDoVQgcs?autoplay=1&mute=1&controls=0&loop=1&playlist=yZ5nDoVQgcs"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-green-600 font-medium mb-2">WELCOME TO</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Gandhadagudi Garden
              </h3>
              <p className="text-gray-600 mb-4">
                🌿 Nestled in the serene village of Byahatti, Gandhadagudi
                Garden offers a peaceful escape from the hustle of city life.
                Surrounded by lush greenery, our garden is a perfect blend of
                natural beauty and modern amenities.
              </p>
              <p className="text-gray-600">
                At Gandhadagudi Garden, we aim to provide an authentic
                countryside experience with warm hospitality and fun-filled
                adventure. Come, relax, and reconnect with nature — the village
                way 🌿🏡.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/aboutus-welcomebk.jpg"
                alt="Resort Activity"
                width={300}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                src="/images/aboutus-welcomebk1.jpg"
                alt="Adventure Activity"
                width={300}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resort Facilities Section */}
      <section className="w-full py-12 md:py-24 bg-green-100 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Images */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src="/images/resort-facility.jpg"
                  alt="Resort room interior"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src="/images/resort-facility2.jpg"
                  alt="Resort exterior with greenery"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-7 space-y-8 ">
              <div>
                <h3 className="text-green-600 font-medium uppercase tracking-wider text-sm md:text-base">
                  Discover the Services We Offer
                </h3>
                <h2 className="text-3xl md:text-5xl font-serif mt-2 text-gray-800">
                  Our Garden Facilities
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <TreeDeciduous className="w-6 h-6 text-green-600" />,
                    title: "Nature Walk & Relaxation",
                    desc: "Enjoy peaceful strolls under shady trees, explore the greenery, and unwind in nature's lap.",
                  },
                  {
                    icon: <Gamepad2 className="w-6 h-6" />,
                    title: "Indoor & Outdoor Games",
                    desc: "Volleyball, cricket, carrom, badminton, chess, or even traditional Indian games like lagori or gilli-danda.",
                  },
                  {
                    icon: <Mountain className="w-6 h-6" />,
                    title: "Outdoor Adventure Activities",
                    desc: "Horse riding, bullock cart rides, zip-lining, archery, or nature trails through nearby farms or forest paths.",
                  },
                  {
                    icon: <Flame className="w-6 h-6" />,
                    title: "Bonfire & Cultural Evenings",
                    desc: "Evening bonfires with light music, traditional games, and local folk dance performances.",
                  },

                  {
                    icon: <Utensils className="w-6 h-6" />,
                    title: "Home-style Organic Dining",
                    desc: "Fresh, locally-sourced meals cooked in traditional village style—served in banana leaves or terracotta plates.",
                  },
                  {
                    icon: <Waves className="w-6 h-6" />,
                    title: "Natural Swimming Pond or Eco Pool",
                    desc: "A nature-themed pool with safety arrangements, surrounded by greenery. Relaxing, eco-friendly, and refreshing.",
                  },
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-green-600 bg-green-100 p-2 rounded-full">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-green-600 font-medium mb-2">FAQ&apos;S</h3>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-800 leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.id} className="border-none">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full bg-gray-50 px-6 py-4 rounded-md text-left font-medium text-gray-800 flex justify-between items-center"
                >
                  <span className="text-lg">{item.question}</span>
                  <span className="text-lime-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-6 w-6 transition-transform duration-200 ${
                        openItem === item.id ? "rotate-45" : ""
                      }`}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {openItem === item.id && (
                  <div className="px-6 pt-2 pb-4 text-gray-700">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <FooterComponent />
    </main>
  </>
  );
}
