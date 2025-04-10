import Image from "next/image";
import TreeHouse from "../icons/TreeHouse";
import Wifi from "../icons/Wifi";
import Restuarant from "../icons/Restuarant";
import Housekeeper from "../icons/HouseKeeper";
import LaundryServices from "../icons/LaundryServices";
import SwimmingPool from "../icons/SwimmingPool";

export default function ResortFacilitiesComponent() {
  return (
    <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center md:text-left mb-12">
        <p className="text-[#a4b053] uppercase tracking-wide font-medium mb-4">
          DISCOVER THE SERVICES WE OFFERED
        </p>
        <h2 className="text-[#333] text-4xl font-serif">
          GANDHADAGUDI GARDEN FACILITIES
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: First 3 facilities */}
        <div className="space-y-8">
          {/* Airport Pick-up Service */}
          <Facility
            title="Tree House"
            description="Can enjoy views at Tree houses."
            icon={(
              <TreeHouse />
            )}
          />

          {/* Wifi & Internet */}
          <Facility
            title="Wifi & Internet"
            description="Stay connected with complimentary high-speed internet."
            icon={(
             <Wifi />
            )}
          />

          {/* Restuarant */}
          <Facility
            title="Restuarant"
            description="Enjoy delicious meals at the restuarant."
            icon={(
              <Restuarant />
            )}
          />
        </div>

        {/* Column 2: Next 3 facilities */}
        <div className="space-y-8">
          {/* Housekeeper Services */}
          <Facility
            title="Housekeeper Services"
            description="Daily housekeeping ensures a clean, comfortable stay."
            icon={(
              <Housekeeper />
            )}
          />

          {/* Laundry Services */}
          <Facility
            title="Laundry Services"
            description="On-site laundry services for your convenience."
            icon={(
              <LaundryServices />
            )}
          />

          {/* Swimming Pool */}
          <Facility
            title="Swimming Pool"
            description="Relax and rejuvenate in our serene swimming pool."
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
          <Image src="/images/swimming-pool.png" alt="Resort Facility 2" width={300} height={300} className="rounded-xl shadow-lg object-cover" />
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
