"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function ResortPackagesComponent() {
  const t = useTranslations('HomePage');
  const packages = [
    {
      id: 1,
      title: t('studentsPackages'),
      image: "/images/children-package.png",
    },
    {
      id: 2,
      title: t('corporatePackages'),
      image: "/images/swimming-pool.png",
    },
    {
      id: 3,
      title: t('familyPackages'),
      image: "/images/family-package.png",
    },
    {
      id: 4,
      title: t('weekendPackages'),
      image: "/images/group.png",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-4">
        <h3 className="text-green-600 text-lg font-medium uppercase tracking-wide">{t('ourPackages')}</h3>
      </div>

      <h2 className="text-center text-[#333] text-3xl md:text-4xl font-medium mb-12">
        {t('attractiveGandhadagudiGardenPackages')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <div key={pkg.id}>
            <PackageCard key={index} title={pkg.title} image={pkg.image} t={t} />
          </div>
        ))}
      </div>
    </div>
  )
}

function PackageCard({ title, image, t }: { title: string; image: string; t: (key: string) => string }) {
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
            <Link href={'https://wa.me/919740806599?text=Hi%2C%20I%20am%20interested%20in%20your%20services.'} target="_blank" className="text-white uppercase text-sm tracking-wider font-medium hover:border-b-2 hover:border-yellow-400">{t('bookNow')}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
