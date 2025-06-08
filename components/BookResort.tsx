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
              <div className="flex items-center gap-1 sm:ml-[190px] ml-32 mt-2">
              <Image
                src="/images/google-map.png"
                alt="Location Scanner"
                width={24}
                height={24}
                className="object-cover w-5 h-5"
              />
              <span className="font-semibold text-sm">Scan me</span>
              </div>
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
                  <Link href={`https://wa.me/919740806599?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" aria-label="Whatsapp" className="bg-[#8BAD2B] text-white py-2 px-8 hover:bg-[#7a9a25] transition-colors -mt-2">
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
