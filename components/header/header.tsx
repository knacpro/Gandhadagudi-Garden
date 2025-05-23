'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import TopBarComponent from './TopBar';

export default function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  const [desktopActivitiesOpen, setDesktopActivitiesOpen] = useState(false);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/introduction', label: 'INTRODUCTION' },
    { href: '/about', label: 'ABOUT' },
    { href: '/attractions', label: 'ATTRACTIONS' },
    { href: '/packages', label: 'PACKAGES' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/blog', label: 'BLOG' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const activities = {
    indoor: [
      { href: '/activities/gym', label: 'Gym' },
      { href: '/activities/garadi-mane', label: 'Garadi Mane' },
      { href: '/activities/carrom', label: 'Carrom, Chess, and Archery' },
    ],
    outdoor: [
      { href: '/activities/boat-riding', label: 'Boat Riding' },
      { href: '/activities/adventure-kayaking', label: 'Adventure Kayaking' },
      { href: '/activities/bird-watching', label: 'Bird Watching' },
      { href: '/activities/horse-riding', label: 'Horse Riding' },
      { href: '/activities/cow-farming', label: 'Cow Farming' },
      { href: '/activities/swimming', label: 'Swimming' },
      { href: '/activities/rain-dance', label: 'Rain Dance' },
      { href: '/activities/zip-line', label: 'Zip Line' },
      { href: '/activities/goat-farm', label: 'Goat Farm' },
      { href: '/activities/poultry', label: 'Poultry' },
      { href: '/activities/rabbit', label: 'Rabbit' },
      { href: '/activities/lawn-garden', label: 'Lawn Garden' },
      { href: '/activities/small-tractor-riding', label: 'Small Tractor Riding' },
      { href: '/activities/kids-zone', label: 'Kids Play Zone' },
      { href: '/activities/deer-park', label: 'Deer Park' },
    ],
  };

  const linkClass = (href: string) =>
    pathname === href
      ? 'text-black font-bold border-b-2 border-yellow-400'
      : 'text-black font-bold hover:text-gray-900 hover:border-b-2 hover:border-yellow-400';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activitiesRef.current &&
        !activitiesRef.current.contains(event.target as Node)
      ) {
        setDesktopActivitiesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
