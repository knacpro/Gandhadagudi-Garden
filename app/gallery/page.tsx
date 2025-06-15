"use client"
import Image from "next/image";
import BookResort from "@/components/BookResort";
import HeaderComponent from "@/components/header/header";
import FooterComponent from "@/components/footer/footer";
import { useState } from "react";
import SocialMediaFloatingIcons from "@/components/home/SocialMediaFloatingIcons";
import Link from "next/link";

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const adventures = [
    { id: 1, src: "/images/1.jpg", alt: "Garden View 1" },
    { id: 2, src: "/images/2.jpg", alt: "Garden View 2" },
    { id: 3, src: "/images/3.jpg", alt: "Garden View 3" },
    { id: 4, src: "/images/4.jpg", alt: "Garden View 4" },
    { id: 5, src: "/images/5.jpg", alt: "Garden View 5" },
    { id: 6, src: "/images/25.jpg", alt: "Garden View 6" },
    { id: 7, src: "/images/24.jpg", alt: "Garden View 7" },
    { id: 8, src: "/images/8.jpg", alt: "Garden View 8" },
    { id: 9, src: "/images/9.jpg", alt: "Garden View 9" },
    { id: 10, src: "/images/10.jpg", alt: "Garden View 10" },
    { id: 11, src: "/images/11.jpg", alt: "Garden View 11" },
    { id: 12, src: "/images/12.jpg", alt: "Garden View 12" },
    { id: 13, src: "/images/13.jpg", alt: "Garden View 13" },
    { id: 14, src: "/images/14.jpg", alt: "Garden View 14" },
    { id: 15, src: "/images/15.jpg", alt: "Garden View 15" },
    { id: 16, src: "/images/16.jpg", alt: "Garden View 16" },
    { id: 17, src: "/images/21.jpg", alt: "Garden View 17" },
    { id: 18, src: "/images/18.jpg", alt: "Garden View 18" },
    { id: 19, src: "/images/19.jpg", alt: "Garden View 19" },
    { id: 20, src: "/images/20.jpg", alt: "Garden View 20" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-green-100">
      <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

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
        <Link href="https://drive.google.com/drive/folders/1Gi_oYwRv4g9vLFA8WZ4RkFX3y5JtHpCp?usp=sharing" target="_blank" className="font-semibold inline-block text-green-600 text-md hover:border-b hover:border-green-500 ml-[530px] pt-4">
                    View more
                </Link>
      </section>

      <BookResort />

    

      <FooterComponent />
      <SocialMediaFloatingIcons />
    </main>
  );
}
