'use client';

import { Menu, X } from "lucide-react";
import Image from "next/image";
import TopBarComponent from "./TopBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function HeaderComponent({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean, setMobileMenuOpen: (mobileMenuOpen: boolean) => void }) {
    const t = useTranslations('Navigation');
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: pathname === "/" ? t('home') : "Home" },
        { href: "/about", label: pathname === "/" ? t('about') : "About" },
        { href: "/activities", label: pathname === "/" ? t('activities') : "Activities" },
        { href: "/restuarant", label: pathname === "/" ? t('restuarant') : "Restaurant" },
        { href: "/attractions", label: pathname === "/" ? t('attractions') : "Attractions" },
        { href: "/packages", label: pathname === "/" ? t('packages') : "Packages" },
        { href: "/gallery", label: pathname === "/" ? t('gallery') : "Gallery" },
        { href: "/blog", label: pathname === "/" ? t('blog') : "Blog" },
        { href: "/contact", label: pathname === "/" ? t('contact') : "Contact" },
    ];

    const linkClass = (href: string) =>
        pathname === href
            ? "text-black font-bold border-b-2 border-yellow-400"
            : "text-black font-bold hover:text-gray-900 hover:border-b-2 hover:border-yellow-400";

    return (
        <>
            {/* Fixed TopBar */}
            <div className="hidden md:block fixed top-0 left-0 right-0 z-30 bg-green-400">
                <TopBarComponent />
            </div>

            {/* Fixed NavBar - placed below TopBar */}
            <header className="fixed top-0 md:top-[48px] z-20 w-full px-4 py-1 bg-green-200 p-8 shadow-lg flex justify-between items-center h-16">
                <div className="flex items-center">
                    <button
                        className="md:hidden z-20 mr-10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

          
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="GandhadaGudi Garden Logo"
              width={240}
              height={80}
              className="h-16 sm:h-20 w-auto rounded-xl"
            />
          </Link>
        </div>

        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.slice(0, 2).map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}

          
          <div className="relative" ref={activitiesRef}>
            <button
  onClick={() => setDesktopActivitiesOpen(!desktopActivitiesOpen)}
  className="to-black flex items-center gap-1 hover:text-yellow-300 transition"
  aria-label="Toggle activities dropdown"
>
  <Link href="/activities" className="hover:text-yellow-300"  >
    ACTIVITIES
  </Link>
  <ChevronDown size={14} />
</button>

            {desktopActivitiesOpen && (
              <div className="absolute bg-white text-black mt-2 rounded-xl shadow-2xl z-50 w-64 border border-gray-200 max-h-[400px] overflow-y-auto">
                <div className="px-4 py-2 font-bold text-indigo-700 bg-gray-100 border-b">
                  Indoor Activities
                </div>
                {activities.indoor.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {label}
                  </Link>
                ))}
                <div className="px-4 py-2 font-bold text-green-700 bg-gray-100 border-b mt-2">
                  Outdoor Activities
                </div>
                {activities.outdoor.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 hover:bg-green-50 hover:text-green-700"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}

          <Link
            href="/reserve-now"
            className={`border px-6 py-2 rounded ${
              pathname === '/reserve-now'
                ? 'text-yellow-400 border-yellow-400'
                : 'text-white border-white hover:bg-white/10'
            }`}
          >
            Reserve Now
          </Link>
          </nav>
         </header>

      
         {mobileMenuOpen && (
         <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-start justify-start pt-24 pl-6 pr-4 space-y-4 md:hidden overflow-y-auto max-h-screen">
          {navLinks.slice(0, 2).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          
          <button
            onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
            className="text-white font-semibold flex items-center gap-1"
            aria-label="Toggle activities submenu"
          >
            ACTIVITIES{' '}
            <ChevronDown
              size={16}
              className={`${mobileActivitiesOpen ? 'rotate-180' : ''} transition-transform`}
            />
          </button>

          {mobileActivitiesOpen && (
            <div className="ml-4 space-y-2 max-h-[300px] overflow-y-auto pr-2">
              <p className="text-yellow-300 font-bold">Indoor Activities</p>
              {activities.indoor.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-white hover:text-yellow-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <p className="text-yellow-300 font-bold mt-2">Outdoor Activities</p>
              {activities.outdoor.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-white hover:text-yellow-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.slice(2).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

           <Link
            href="/reserve-now"
            className="text-yellow-400 border border-yellow-400 px-6 py-2 rounded"
            onClick={() => setMobileMenuOpen(false)}
           >
            Reserve Now
           </Link>
           </div>
           )}
            </>
  );
}
