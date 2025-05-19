import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export default function FooterComponent() {
  return (
    <footer className="bg-black text-white">
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
              Gandhadagudi Garden Byahatti, your ultimate destination for a perfect getaway amidst nature.
            </p>

            <div className="flex space-x-2">
              <Link href="#" className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5 text-black" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5 text-black" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity">
                <Youtube className="h-5 w-5 text-black" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5 text-black" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-white hover:text-green-400 transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="text-white hover:text-green-400 transition-colors">
                  Attractions
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white hover:text-green-400 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">Activities</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Garadi Mane
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Boat Riding
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Kayaking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Zip line
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Swimming
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Rain Dance
                </Link>
              </li>
            </ul>
          </div>

          {/* Packages Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">Packages</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Student Packages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Corporate Packages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Family Packages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  Weekend Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach Out Section */}
          <div className="space-y-4 md:col-span-4 lg:col-span-1">
            <h3 className="text-xl font-medium mb-6">Reach Out</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
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
                <span className="text-white">+91 9620465007</span>
              </li>
              <li className="flex items-start">
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
                <span className="text-white">info@gandhadagudigarden.com</span>
              </li>
              <li className="flex items-start">
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
                <span className="text-white">Hebsur Road, Byahatti Hubballi, Karnataka</span>
              </li>
            </ul>
            <Link
              href="#"
              className="inline-block mt-4 text-green-500 border-b-2 border-green-500 hover:text-green-400 transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">© 2025 Gandhadagudi Garden, Byahatti. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-white hover:text-green-400 transition-colors">
              BLOG
            </Link>
            <Link href="#" className="text-sm text-white hover:text-green-400 transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="#" className="text-sm text-white hover:text-green-400 transition-colors">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
