"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function ResortActivitiesComponent() {
  const t = useTranslations('HomePage');
  const activities = [
    {
      id: 1,
      title: t('gym'),
      image: "/images/gym.png?height=400&width=500",
      link: "/activities/gym"
    },
    {
      id: 2,
      title: t('garadiMane'),
      image: "/images/garadi-mane.png?height=400&width=500",
      link: "/activities/garadi-mane"
    },
    {
      id: 3,
      title: t('birdWatching'),
      image: "/images/bird.png?height=400&width=500",
      link: "/activities/bird-watching"
  
    },
    {
      id: 4,
      title: t('horseRiding'),
      image: "/images/horse-riding.png?height=400&width=500",
      link: "/activities/horse-riding"
  
    },
    {
      id: 5,
      title: t('swimming'),
      image: "/images/swimming-pool.png?height=400&width=500",
      link: "/activities/swimming"
  
    },
    {
      id: 6,
      title: t('cowFarming'),
      image: "/images/cow-farming.png?height=400&width=500",
      link: "/activities/cow-farming"
    },
    {
      id: 7,
      title: t('boatRiding'),
      image: "/images/kayaking.png?height=400&width=500",
      link: "/activities/boat-riding"
    },
    {
      id: 8,
      title: t('chess'),
      image: "/images/chess.png?height=400&width=500",
      link: "/activities/carrom-chess-archery"
    },
    {
      id: 9,
      title: t('rainDance'),
      image: "/images/rain-dance.png?height=400&width=500",
      link: "/activities/rain-dance"
    },
    {
      id: 10,
      title: t('fireCamp'),
      image: "/images/fire-camp.png?height=400&width=500",
      link: "/activities/fire-camp"
    },
    {
      id: 11,
      title: t('treeHouseActivities'),
      image: "/images/tree-house.png?height=400&width=500",
      link: "/activities/tree-house"
    },
    {
      id: 12,
      title: t('zipLine'),
      image: "/images/zip-line.png?height=400&width=500",
      link: "/activities/zip-line"
    },
    {
      id: 13,
      title: t('archery'),
      image: "/images/archery.png?height=400&width=500",
      link: "/activities/carrom-chess-archery"
    },
    {
      id: 14,
      title: t('carrom'),
      image: "/images/carrom.png?height=400&width=500",
      link: "/activities/carrom-chess-archery"
    },
    {
      id: 15,
      title: t('goatFarming'),
      image: "/images/goat-farming.png?height=400&width=500",
      link: "/activities/goat-farm"
    },
    {
      id: 16,
      title: t('poultry'),
      image: "/images/poultry.png?height=400&width=500",
      link: "/activities/poultry"
    },
    {
      id: 17,
      title: t('tractorRiding'),
      image: "/images/tractor-riding.png?height=400&width=500",
      link: "/activities/small-tractor-riding"
    },
    {
      id: 18,
      title: t('bullockKartRiding'),
      image: "/images/bullock-kart.png?height=400&width=500",
      link: "/activities/bullock-kart"
    },
    {
      id: 19,
      title: t('deerPark'),
      image: "/images/deer-park.png?height=400&width=500",
      link: "/activities/deer-park"
    },
    {
      id: 20,
      title: t('rabbit'),
      image: "/images/rabbit.png?height=400&width=500",
      link: "/activities/rabbit"
    },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading section with exact colors */}
      <h3 className="text-green-600 text-lg font-medium tracking-wide">{t('enjoyUltimateAlpineExperiences')}</h3>
      <h2 className="text-[#333333] text-4xl font-medium mt-4 mb-10">
        {t('gandhadagudiGardenActivities')}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">

        {activities.map((activity) => (
          <div key={activity.id} className="group">
            <Link href={activity.link}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-green-800 bg-opacity-50 text-white text-center py-2">
                  <h2 className="font-normal">{activity.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  )
}
