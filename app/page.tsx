"use client"

import Image from "next/image"
import HeaderComponent from "@/components/header/header"
import SocialMediaFloatingIcons from "@/components/home/SocialMediaFloatingIcons"
import { useState } from "react"
import HeroSectionComponent from "@/components/home/HeroSection"
import WelcomeSectionComponent from "@/components/home/WelcomeSection"
import ResortFacilitiesComponent from "@/components/home/ResortFacilities"
import ResortActivitiesComponent from "@/components/home/ResortActivities"
import GallerySectionComponent from "@/components/home/GallerySection"
import ResortPackagesComponent from "@/components/home/ResortPackages"
import NearByAttractionsComponent from "@/components/home/NearByAttractions"
import TestimonialsComponent from "@/components/home/Testimonials"
import BookResort from "@/components/BookResort"
import FooterComponent from "@/components/footer/footer"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-[850px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/LufF96pUkeI?autoplay=1&mute=1&controls=0&loop=1&playlist=LufF96pUkeI"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

      </div>

      <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      {!mobileMenuOpen && (
        <>
          <HeroSectionComponent />
          <WelcomeSectionComponent />
          <ResortFacilitiesComponent />
          <ResortActivitiesComponent />
          <GallerySectionComponent />
          <ResortPackagesComponent />
          <NearByAttractionsComponent />
          <TestimonialsComponent />
          <BookResort />
          <FooterComponent />
        </>
      )}
      <SocialMediaFloatingIcons />
    </div>
  )
}
