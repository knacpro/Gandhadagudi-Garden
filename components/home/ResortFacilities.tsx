import Image from "next/image";
import TreeHouse from "../icons/TreeHouse";
import Wifi from "../icons/Wifi";
import Restuarant from "../icons/Restuarant";
import Housekeeper from "../icons/HouseKeeper";
import LaundryServices from "../icons/LaundryServices";
import SwimmingPool from "../icons/SwimmingPool";
import { useTranslations } from "next-intl";

export default function ResortFacilitiesComponent() {
  const t = useTranslations('HomePage');
  return (
    <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center md:text-left mb-12">
        <p className="text-green-600 uppercase tracking-wide font-medium mb-4">
          {t('discover')}
        </p>
        <h2 className="text-[#333] text-4xl font-serif">
          {t('facilities')}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: First 3 facilities */}
        <div className="space-y-8">
          {/* Airport Pick-up Service */}
          <Facility
            title={t('treeHouse')}
            description={t('treeHouseDescription')}
            icon={(
              <TreeHouse />
            )}
          />

          {/* Wifi & Internet */}
          <Facility
            title={t('wifi')}
            description={t('wifiDescription')}
            icon={(
             <Wifi />
            )}
          />

          {/* Restuarant */}
          <Facility
            title={t('restuarant')}
            description={t('restuarantDescription')}
            icon={(
              <Restuarant />
            )}
          />
        </div>

        {/* Column 2: Next 3 facilities */}
        <div className="space-y-8">
          {/* Housekeeper Services */}
          <Facility
            title={t('lawnGarden')}
            description={t('lawnGardenDescription')}
            icon={(
              <Housekeeper />
            )}
          />

          {/* Laundry Services */}
          <Facility
            title={t('partyHall')}
            description={t('partyHallDescription')}
            icon={(
              <LaundryServices />
            )}
          />

          {/* Swimming Pool */}
          <Facility
            title={t('swimmingPool')}
            description={t('swimmingPoolDescription')}
            icon={(
              <SwimmingPool />
            )}
          />
        </div>

        {/* Column 3: Image 1 */}
        <div className="flex items-center justify-center">
          <Image src="/images/tree-house.png" alt="Resort Facility 1" width={300} height={300} className="rounded-xl shadow-lg object-cover" />
        </div>

        {/* Column 4: Image 2 */}
        <div className="flex items-center justify-center">
          <Image src="/images/duck-boat.png" alt="Resort Facility 1" width={300} height={300} className="rounded-xl shadow-lg object-cover h-[430px] w-[450px]" />
        </div>
      </div>
    </div>
  );
}

function Facility({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-serif text-[#333] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
