"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function ResortPackagesComponent() {
  const t = useTranslations('HomePage');
  const whatsappMessage = `Welcome to Gandhadagudi Garden Byahatti!

  Thank you for inquiring about our services. We are happy to help you:
  
  Location: Hebsur Road, Byahatti, Karnataka 580023
  Timings: 10:30 AM - 6:00 PM (All Days)
  Contact: +91 9740806599
  Email: gandhadagudigardenbyahatti@gmail.com
  
  Our Activities:
  • Tree House Stay
  • Traditional Gym
  • Boat Ride
  • Adventure Kayaking
  • Zip Line
  • Swimming Pool
  • Rain Dance
  • Bird Watching
  • Horse Riding
  • Cow Farming
  • Chess and Carrom
  • Campfire
  • Archery
  • Goat Farming
  • Poultry Farming
  • Tractor Ride
  • Buffalo Ride
  • Deer Park
  • Rabbit House
  
  Our Packages:
  • Student Package
  • Corporate Package
  • Family Package
  • Weekend Package
  
  Additional Facilities:
  • Party Hall
  • Restaurant
  • Lawn Garden
  • Free WiFi
  
  How can we help you?
  
  ----------------------------------------
  
  ಗಂಧದಗುಡಿ ತೋಟ ಬ್ಯಾಹಟ್ಟಿಗೆ ಸುಸ್ವಾಗತ!
  
  ನಮ್ಮ ಸೇವೆಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಿದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವು ಸಂತುಷ್ಟರಾಗಿದ್ದೇವೆ:
  
  ಸ್ಥಳ: ಹೇಬ್ಸೂರ್ ರಸ್ತೆ, ಬ್ಯಾಹಟ್ಟಿ, ಕರ್ನಾಟಕ 580023
  ವೇಳೆ: ಬೆಳಿಗ್ಗೆ 10:30 - ಸಂಜೆ 6:00 (ಎಲ್ಲಾ ದಿನಗಳೂ)
  ಸಂಪರ್ಕ: +91 9740806599
  ಇಮೇಲ್: gandhadagudigardenbyahatti@gmail.com
  
  ನಮ್ಮ ಚಟುವಟಿಕೆಗಳು:
  • ಮರ ಮನೆ ವಾಸ
  • ಗರಡಿ ಮನೆ (ಸಾಂಪ್ರದಾಯಿಕ ಜಿಮ್)
  • ದೋಣಿ ಸವಾರಿ
  • ಸಾಹಸ ಕಾಯಕಿಂಗ್
  • ಜಿಪ್ ಲೈನ್
  • ಈಜುಕೊಳ
  • ಮಳೆ ನೃತ್ಯ
  • ಹಕ್ಕಿ ವೀಕ್ಷಣೆ
  • ಕುದುರೆ ಸವಾರಿ
  • ಹಸು ಕೃಷಿ
  • ಚೆಸ್ ಮತ್ತು ಕೇರೊಮ್
  • ಅಗ್ನಿ ಶಿಬಿರ
  • ತೀರಂದಾಜಿ
  • ಮೇಕೆ ಸಾಕಾಣಿಕೆ
  • ಕೋಳಿ ಕೃಷಿ
  • ಟ್ರ್ಯಾಕ್ಟರ್ ಸವಾರಿ
  • ಎಮ್ಮೆಕಾರು ಸವಾರಿ
  • ಜಿಂಕೆ ಉದ್ಯಾನವನ
  • ಮೊಲಗಳ ಮನೆ
  
  ನಮ್ಮ ಪ್ಯಾಕೇಜ್‌ಗಳು:
  • ವಿದ್ಯಾರ್ಥಿ ಪ್ಯಾಕೇಜ್
  • ಕಾರ್ಪೊರೇಟ್ ಪ್ಯಾಕೇಜ್
  • ಕುಟುಂಬ ಪ್ಯಾಕೇಜ್
  • ವಾರಾಂತ್ಯ ಪ್ಯಾಕೇಜ್
  
  ಹೆಚ್ಚುವರಿ ಸೌಕರ್ಯಗಳು:
  • ಪಾರ್ಟಿ ಹಾಲ್
  • ರೆಸ್ಟುರಾಂಟ್
  • ಲಾನ್ ತೋಟ
  • ಉಚಿತ ವೈಫೈ
  
  ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?`;
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
            <PackageCard key={index} title={pkg.title} image={pkg.image} t={t} whatsappMessage={whatsappMessage} />
          </div>
        ))}
      </div>
    </div>
  )
}

function PackageCard({ title, image, t, whatsappMessage }: { title: string; image: string; t: (key: string) => string; whatsappMessage: string }) {
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
            <Link href={`https://wa.me/919740806599?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" className="text-white uppercase text-sm tracking-wider font-medium hover:border-b-2 hover:border-yellow-400">{t('bookNow')}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
