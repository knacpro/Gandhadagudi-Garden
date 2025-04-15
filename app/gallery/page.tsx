import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import BookResort from "@/components/BookResort";
import HeaderComponent from "@/components/header/header";

export default function GalleryPage() {
  const adventures = [
    { id: 1, src: "/images/garden1.jpeg", alt: "Garden View 1" },
    { id: 2, src: "/images/garden2.jpeg", alt: "Garden View 2" },
    { id: 3, src: "/images/garden3.jpeg", alt: "Garden View 3" },
    { id: 4, src: "/images/garden4.jpeg", alt: "Garden View 4" },
    { id: 5, src: "/images/garden5.jpeg", alt: "Garden View 5" },
    { id: 6, src: "/images/garden6.jpeg", alt: "Garden View 6" },
    { id: 7, src: "/images/garden5.jpeg", alt: "Garden View 7" },
    { id: 8, src: "/images/garden1.jpeg", alt: "Garden View 8" },
    { id: 9, src: "/images/garden3.jpeg", alt: "Garden View 9" },
    { id: 10, src: "/images/garden4.jpeg", alt: "Garden View 10" },
    { id: 11, src: "/images/garden2.jpeg", alt: "Garden View 11" },
    { id: 12, src: "/images/garden1.jpeg", alt: "Garden View 12" },
    { id: 13, src: "/images/garden5.jpeg", alt: "Garden View 13" },
    { id: 14, src: "/images/garden3.jpeg", alt: "Garden View 14" },
    { id: 15, src: "/images/garden6.jpeg", alt: "Garden View 15" },
    { id: 16, src: "/images/garden1.jpeg", alt: "Garden View 16" },
    { id: 17, src: "/images/garden3.jpeg", alt: "Garden View 17" },
    { id: 18, src: "/images/garden5.jpeg", alt: "Garden View 18" },
    { id: 19, src: "/images/garden6.jpeg", alt: "Garden View 19" },
    { id: 20, src: "/images/garden2.jpeg", alt: "Garden View 20" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderComponent />

      {/* Hero Section */}
      <section
        className="text-center bg-cover bg-center text-white py-40 px-5"
        style={{ backgroundImage: "url(/images/gallerybg.jpeg)" }}
      >
        <h1 className="text-6xl font-bold">Gallery</h1>
        <h6 className="text-3xl font-bold mt-4">
          Welcome to Gandhadagudi Nature’s Gallery: Byahatti Edition
        </h6>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto w-full px-4 pb-10">
        <h1 className="text-3xl font-bold py-8 text-center text-gray-600 tracking-wider uppercase">
          Garden Diaries – In Pictures
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {adventures.map((adventure) => (
            <div key={adventure.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={adventure.src || "/placeholder.svg"}
                  alt={adventure.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
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
    </main>
  );
}
