import { Train, Plane, Triangle } from "lucide-react"
import { useTranslations } from "next-intl"

export default function DistancePlacesComponent() {
  const t = useTranslations('HomePage');
  return (
    <div className="w-full p-8 bg-green-100">
      {/* Main heading */}
      <div className="mb-8">
        <h1 className="text-green-700 text-4xl font-bold mb-2">{t('distanceFromPlaces')}</h1>
        <div className="w-24 h-1 bg-green-400"></div>
      </div>

      {/* Railway Station and Airport sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Nearest Railway Station */}
        <div className="bg-green-600 bg-opacity-20 p-6 rounded">
          <div className="flex items-center gap-3 mb-4">
            <Train className="text-white w-8 h-8" />
            <h2 className="text-white text-2xl font-bold">{t('nearestRailwayStation')}</h2>
          </div>
          <div className="w-full h-px bg-white mb-4"></div>
          <div className="flex justify-between">
            <span className="text-white text-lg">{t('hubballi')} - 18 {t('kms')}</span>
            <span className="text-white text-lg">{t('dharwad')} - 27 {t('kms')}</span>
          </div>
        </div>

        {/* Nearest Airport */}
        <div className="bg-green-600 bg-opacity-20 p-6 rounded">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="text-white w-8 h-8" />
            <h2 className="text-white text-2xl font-bold">{t('nearestAirport')}</h2>
          </div>
          <div className="w-full h-px bg-white mb-4"></div>
          <div className="flex justify-between">
            <span className="text-white text-lg">{t('hubballi')} - 24 {t('kms')}</span>
            <span className="text-white text-lg">{t('belgaum')} - 145 {t('kms')}</span>
          </div>
        </div>
      </div>

      {/* Utsav Rock Garden section */}
      <div className="mt-8">
        <div className="flex items-center gap-3 mb-6">
          <Triangle className="text-green-900 w-8 h-8 fill-current" />
          <h2 className="text-green-700 text-2xl font-bold">{t('gandhadagudiGardenDistanceFromProminentPlaces')}</h2>
        </div>
        <div className="w-full h-px bg-green-600 mb-6"></div>

        {/* Distance grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          <span className="text-black text-lg">{t('hubballi')} - 18 {t('kms')}</span>
          <span className="text-black text-lg">{t('dharwad')} - 25 {t('kms')}</span>
          <span className="text-black text-lg">{t('navalgund')} - 22 {t('kms')}</span>
          <span className="text-black text-lg">{t('gadag')} - 56 {t('kms')}</span>
          <span className="text-black text-lg">{t('savadatti')} - 53 {t('kms')}</span>
          <span className="text-black text-lg">{t('haveri')} - 91 {t('kms')}</span>
          <span className="text-black text-lg">{t('belgaum')} - 102 {t('kms')}</span>
          <span className="text-black text-lg">{t('davangere')} - 165 {t('kms')}</span>
        </div>
      </div>
    </div>
  )
}
