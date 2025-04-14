"use client"

import { useState } from "react"
import Image from "next/image"

export default function ResortPackagesComponent() {
  const packages = [
    {
      title: "Students Packages",
      image: "/images/children-package.png",
    },
    {
      title: "Corporate Packages",
      image: "/images/corporate-package.png",
    },
    {
      title: "Family Packages",
      image: "/images/family-package.png",
    },
    {
      title: "Weekend Packages",
      image: "/images/weekend-package.png",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-4">
        <h3 className="text-[#8ab73a] text-lg font-medium uppercase tracking-wide">OUR PACKAGES</h3>
      </div>

      <h2 className="text-center text-[#333] text-3xl md:text-4xl font-medium mb-12">
        ATTRACTIVE GANDHADAGUDI GARDEN PACKAGES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard key={index} title={pkg.title} image={pkg.image} />
        ))}
      </div>
    </div>
  )
}

function PackageCard({ title, image }: { title: string; image: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[450px] border border-[#8ab73a] p-1">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end pb-12">
            <h3 className="text-white text-2xl font-medium mb-4">{title}</h3>
            <button className="text-white uppercase text-sm tracking-wider font-medium">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}
