"use client"

import Image from "next/image"
import HeaderComponent from "@/components/header/header"
import SocialMediaFloatingIcons from "@/components/home/SocialMediaFloatingIcons"
import { useState } from "react"
import HeroSectionComponent from "@/components/home/HeroSection"
import WelcomeSectionComponent from "@/components/home/WelcomeSection"
import ResortFacilitiesComponent from "@/components/home/ResortFacilities"
import ResortActivitiesComponent from "@/components/home/ResortActivities"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-[850px]">
        <Image src="/images/background.png" alt="Forest road background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      {!mobileMenuOpen && (
        <>
          <HeroSectionComponent />
          <WelcomeSectionComponent />
          <ResortFacilitiesComponent />
          <ResortActivitiesComponent />
        </>
      )}
      <SocialMediaFloatingIcons />
    </div>
  )
}
