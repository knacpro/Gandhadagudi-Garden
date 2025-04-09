"use client"

import Image from "next/image"
import HeaderComponent from "@/components/header/header"
import SocialMediaFloatingIcons from "@/components/home/SocialMediaFloatingIcons"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
        <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="Forest road background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      {!mobileMenuOpen && (
      <main className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 mt-16 sm:mt-32">
        <h2 className="text-base sm:text-lg tracking-wider mb-4 font-semibold">WELCOME AND EXPERIENCE</h2>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          GANDHADAGUDI GARDEN
          <br />
          HEBSUR ROAD
          <br />
          BYAHATTI, HUBBALLI
        </h1>
      </main>
      )}


      <SocialMediaFloatingIcons />
    </div>
  )
}
