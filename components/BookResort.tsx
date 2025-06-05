'use client';


import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function BookResort() {
  const t = useTranslations('HomePage');
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/kn';

  const getText = (key: string) => {
    if (isHomePage) {
      return t(key);
    }
    // English text for non-home pages
    const englishTexts: { [key: string]: string } = {
      bookNow: "Book Now",
      bookResortNow: "Book Your Resort Now",
      bookResortDescription: "Experience the perfect blend of luxury and nature at Gandhadagudi Garden. Book your stay now and create unforgettable memories.",
      getDirections: "Get Directions",
      openHours: "Opening Hours",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      enquireNow: "Enquire Now"
    };
    return englishTexts[key] || key;
  };

  return (
    <div>
      <section className="bg-[#1E2E1E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">
                {getText('bookNow')}
              </h5>
              <h2 className="text-3xl font-bold mt-2">{getText('bookResortNow')}</h2>
              <p className="mt-4">
                {getText('bookResortDescription')}
              </p>
              <div className="mt-6 flex items-center">
                <Link href={'tel:+919740806599'}>
                  <div className="bg-[#8CBF1E] rounded-full p-2 mr-3">
                    <Image
                      src="/images/phone.png"
                      alt="Phone"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                </Link>
                <span className="font-bold text-lg">+91 96204 65007</span>
              </div>
              <Image
                src="/images/location-scanner.png"
                alt="Location Scanner"
                width={24}
                height={24}
                className="object-cover w-40 h-40 mt-8 sm:ml-40 ml-24"
              />
              <span className="font-semibold text-sm sm:ml-48 ml-32">{getText('getDirections')}</span>
            </div>

            <div className="md:w-[500px] bg-[#2A3A2A] sm:p-6 p-4 rounded-lg">
              <div className="sm:ml-7 ml-4 sm:w-[400px] w-80 bg-white p-8 text-[#2A3A2A] sm:h-[440px] h-[400px]">
                <div className="flex flex-col items-center">
                  <h1 className="text-xl md:text-2xl font-serif italic tracking-wide mb-6">{getText('openHours')}</h1>

                  <div className="w-32 h-0.5 bg-white mb-8"></div>

                  <div className="w-full grid grid-cols-2 gap-y-2 text-md md:text-lg mb-10">
                    <div>{getText('monday')}</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>{getText('tuesday')}</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>{getText('wednesday')}</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>{getText('thursday')}</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>{getText('friday')}</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>{getText('saturday')}</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>{getText('sunday')}</div>
                    <div className="text-right">10.30 AM - 6 PM</div>
                  </div>
                  <Link href={'https://wa.me/919740806599?text=Hi%2C%20I%20am%20interested%20in%20your%20services.'} target="_blank" className="bg-[#8BAD2B] text-white py-2 px-8 hover:bg-[#7a9a25] transition-colors -mt-2">
                    {getText('enquireNow')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
