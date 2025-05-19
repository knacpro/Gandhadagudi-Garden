"use client"

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
import { BackgroundImagesComponent } from "@/components/home/BackgroundImagesComponent"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-full bg-green-100">
      <BackgroundImagesComponent />
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
