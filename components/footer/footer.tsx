import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

export default function FooterComponent() {
  const pathname = usePathname()
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/kn'
  const t = useTranslations('HomePage')

  const getText = (key: string) => {
    if (isHomePage) {
      return t(key)
    }
    // English text for non-home pages
    const englishTexts: { [key: string]: string } = {
      gandhadagudiGardenByahattiDescription: "Experience the beauty of nature at Gandhadagudi Garden, Byahatti. A perfect destination for adventure, relaxation, and creating unforgettable memories.",
      aboutUs: "About Us",
      activities: "Activities",
      attractions: "Attractions",
      packages: "Packages",
      gallery: "Gallery",
      contact: "Contact",
      garadiMane: "Garadi Mane",
      boatRiding: "Boat Riding",
      kayaking: "Adventure Kayaking",
      zipLine: "Zip Line",
      swimming: "Swimming",
      rainDance: "Rain Dance",
      studentsPackages: "Students Packages",
      corporatePackages: "Corporate Packages",
      familyPackages: "Family Packages",
      weekendPackages: "Weekend Packages",
      reachOut: "Reach Out",
      address: "Gandhadagudi Garden, Byahatti, Karnataka",
      getDirections: "Get Directions",
      allRightsReserved: "All rights reserved.",
      designedAndDevelopedBy: "Designed and Developed by"
    }
    return englishTexts[key] || key
  }

  return (
    <footer className="bg-green-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/images/logo.png?height=80&width=120"
                alt="WilderNest Logo"
                width={120}
                height={80}
                className="mr-2"
              />
            </div>

            <p className="text-white text-sm">
              {getText('gandhadagudiGardenByahattiDescription')}
            </p>

            <div className="flex space-x-6">
              <Link href="https://www.instagram.com/gandhadagudi_garden_byahatti?igsh=dGx1aXcyZHZpZTFl" target="_blank" aria-label="Instagram">
                <Image
                  src="/images/instagram.png"
                  alt="Instagram logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </Link>
              <Link href="https://www.instagram.com/gandhadagudi_garden_byahatti?igsh=dGx1aXcyZHZpZTFl" target="_blank" aria-label="Instagram">
                <Image
                  src="/images/facebook.png"
                  alt="Facebook logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </Link>
              <Link href="https://www.youtube.com/@gandhadagudi_garden_byahatti" target="_blank" aria-label="Whatsapp">
                <Image
                  src="/images/youtube.png"
                  alt="Youtube logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </Link>
              <Link href="https://wa.me/919740806599?text=Hi%2C%20I%20am%20interested%20in%20your%20services." target="_blank" aria-label="Whatsapp">
                <Image
                  src="/images/whatsapp.png"
                  alt="Whatsapp logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">{getText('aboutUs')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white hover:text-green-400 transition-colors">
                  {getText('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-white hover:text-green-400 transition-colors">
                  {getText('activities')}
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="text-white hover:text-green-400 transition-colors">
                  {getText('attractions')}
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white hover:text-green-400 transition-colors">
                  {getText('packages')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white hover:text-green-400 transition-colors">
                  {getText('gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-green-400 transition-colors">
                  {getText('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">{getText('activities')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/garadi-mane" className="text-white hover:text-green-400 transition-colors">
                  {getText('garadiMane')}
                </Link>
              </li>
              <li>
                <Link href="/boat-riding" className="text-white hover:text-green-400 transition-colors">
                  {getText('boatRiding')}
                </Link>
              </li>
              <li>
                <Link href="/adventure-kayaking" className="text-white hover:text-green-400 transition-colors">
                  {getText('kayaking')}
                </Link>
              </li>
              <li>
                <Link href="/zip-line" className="text-white hover:text-green-400 transition-colors">
                  {getText('zipLine')}
                </Link>
              </li>
              <li>
                <Link href="/swimming" className="text-white hover:text-green-400 transition-colors">
                  {getText('swimming')}
                </Link>
              </li>
              <li>
                <Link href="/rain-dance" className="text-white hover:text-green-400 transition-colors">
                  {getText('rainDance')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Packages Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">{getText('packages')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/packages" className="text-white hover:text-green-400 transition-colors">
                  {getText('studentsPackages')}
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white hover:text-green-400 transition-colors">
                  {getText('corporatePackages')}
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white hover:text-green-400 transition-colors">
                  {getText('familyPackages')}
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white hover:text-green-400 transition-colors">
                  {getText('weekendPackages')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach Out Section */}
          <div className="space-y-4 md:col-span-4 lg:col-span-1">
            <h3 className="text-xl font-medium mb-6">{getText('reachOut')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start hover:text-green-400">
                <span className="text-green-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <Link href={'tel:+919740806599'} className="text-white hover:text-green-400">+91 9740806599</Link>
              </li>
              <li className="flex items-start hover:text-green-400">
                <span className="text-green-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <Link
                  href="mailto:gandhadagudigardenbyahatti@gmail.com?subject=Subject"
                  target="_blank"
                  rel="noopener noreferrer" className="text-white hover:text-green-400">gandhadagudigardenbyahatti@gmail.com</Link>
              </li>
              <Link href={'https://maps.app.goo.gl/XAhF46L7Wy24JKfP8?g_st=aw'} target="_blank" className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span className="text-white">{getText('address')}</span>
              </Link>
            </ul>
            <Link
              href="https://maps.app.goo.gl/XAhF46L7Wy24JKfP8?g_st=aw"
              target="_blank"
              className="inline-block mt-4 text-green-500 hover:border-b-2 hover:border-green-500 hover:text-green-400 transition-colors"
            >
              {getText('getDirections')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">© 2025 Gandhadagudi Garden, Byahatti. {getText('allRightsReserved')}</p>
          <div className="flex space-x-1 mt-4 md:mt-0">
            <Image
              src="/images/knacpro-logo.png"
              alt="Instagram logo"
              width={28}
              height={28}
              className="object-contain"
            />
            <p className="text-sm text-white">{getText('designedAndDevelopedBy')} <Link href={'https://www.knacprosolutions.in/'} target="_blank" className="hover:border-b-2 hover:border-yellow-400"> Knacpro Solutions</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
