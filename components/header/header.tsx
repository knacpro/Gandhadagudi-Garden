'use client';

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopBarComponent from "./TopBar";

export default function HeaderComponent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT" },
        { href: "/activities", label: "ACTIVITIES" },
        { href: "/attractions", label: "ATTRACTIONS" },
        { href: "/packages", label: "PACKAGES" },
        { href: "/gallery", label: "GALLERY" },
        { href: "/blog", label: "BLOG" },
        { href: "/contact", label: "CONTACT" },
    ];

    const linkClass = (href: string) =>
        pathname === href
            ? "text-white border-b-2 border-yellow-400"
            : "text-white hover:text-gray-200 hover:border-b-2 hover:border-yellow-400";

    return (
        <>
            {/* TopBar */}
            <div className="hidden md:block fixed top-0 left-0 right-0 z-30 bg-black/90">
                <TopBarComponent />
            </div>

            {/* Header */}
            <header className="fixed top-[40px] md:top-[48px] z-20 w-full px-4 py-2 bg-black/80 flex justify-between items-center">
                <div className="flex items-center">
                    <button
                        className="md:hidden text-white z-20 mr-4"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    <Image
                        src="/images/logo.png"
                        alt="GandhadaGudi Garden Logo"
                        width={240}
                        height={80}
                        className="h-16 sm:h-20 w-auto rounded-xl"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.slice(0, 2).map(({ href, label }) => (
                        <Link key={href} href={href} className={linkClass(href)}>{label}</Link>
                    ))}

                    {/* Activities Dropdown */}
                    <div className="relative group">
                        <Link
                            href="/activities"
                            className="text-white flex items-center gap-1 hover:text-yellow-300 transition"
                        >
                            ACTIVITIES <ChevronDown size={14} />
                        </Link>
                        <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-xl shadow-2xl z-10 w-64 border border-gray-200">
                            <div className="px-4 py-2 font-bold text-indigo-700 bg-gray-100 border-b">Indoor Activities</div>
                            <Link href="/activities/gym" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700">Gym</Link>
                            <Link href="/activities/garadi-mane" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700">Garadi Mane</Link>
                            <Link href="/activities/carrom" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700">Carrom, Chess, and Archery</Link>

                            <div className="px-4 py-2 font-bold text-green-700 bg-gray-100 border-b mt-2">Outdoor Activities</div>
                            <Link href="/activities/boat-riding" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">Boat Riding</Link>
                            <Link href="/activities/adventure-kayaking" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">Adventure Kayaking</Link>
                            <Link href="/activities/bird-watching" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">Bird Watching</Link>
                            <Link href="/activities/horse-riding" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">Horse Riding</Link>
                            <Link href="/activities/cow-farming" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">Cow Farming</Link>
                            <Link href="/activities/swimming" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                            Swimming</Link>
                            <Link href="/activities/rain-dance" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                            Rain Dance</Link>
                            <Link href="/activities/zip-line" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                            Zip Line</Link>
                            <Link href="/activities/zip-line" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                            Zip Line</Link>
                        </div>
                    </div>

                    {navLinks.slice(3).map(({ href, label }) => (
                        <Link key={href} href={href} className={linkClass(href)}>{label}</Link>
                    ))}

                    <Link
                        href="/reserve-now"
                        className={`border px-6 py-2 rounded ${pathname === "/reserve-now"
                            ? "text-yellow-400 border-yellow-400"
                            : "text-white border-white hover:bg-white/10"
                            }`}
                    >
                        Reserve Now
                    </Link>
                </nav>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black/90 z-10 flex flex-col items-start justify-start pt-24 pl-6 space-y-4 md:hidden">
                    {navLinks.slice(0, 2).map(({ href, label }) => (
                        <Link key={href} href={href} className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>{label}</Link>
                    ))}

                    {/* Collapsible Activities */}
                    <button
                        onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
                        className="text-white font-semibold flex items-center gap-1"
                    >
                        ACTIVITIES <ChevronDown size={16} className={`${mobileActivitiesOpen ? "rotate-180" : ""} transition-transform`} />
                    </button>

                    {mobileActivitiesOpen && (
                        <div className="ml-4 space-y-2">
                            <p className="text-yellow-300 font-bold">Indoor Activities</p>
                            <Link href="/activities/gym" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Gym</Link>
                            <Link href="/activities/garadi-mane" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Garadi Mane</Link>
                            <Link href="/activities/carrom" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Carrom, Chess, and Archery</Link>
                           
                            <p className="text-yellow-300 font-bold mt-2">Outdoor Activities</p>
                            <Link href="/activities/boat-riding" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Boat Riding</Link>
                            <Link href="/activities/adventure-kayaking" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Adventure Kayaking</Link>
                            <Link href="/activities/bird-watching" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Bird Watching</Link>
                            <Link href="/activities/horse-riding" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Horse Riding</Link>
                            <Link href="/activities/cow-farming" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Cow Farming</Link>
                            <Link href="/activities/swimming" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Swimming</Link>
                            <Link href="/activities/rain-dance" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Rain Dance</Link>
                            <Link href="/activities/zip-line" className="block text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Zip Line</Link>
                                                
                        </div>
                    )}

                    {navLinks.slice(3).map(({ href, label }) => (
                        <Link key={href} href={href} className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>{label}</Link>
                    ))}

                    <Link
                        href="/reserve-now"
                        className={`border px-6 py-2 mt-4 ${pathname === "/reserve-now"
                            ? "text-yellow-400 border-yellow-400"
                            : "text-white border-white hover:bg-white/10"
                            }`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Reserve Now
                    </Link>
                </div>
            )}

            {/* Spacer */}
            <div className="h-[160px] md:h-[170px]" />
        </>
    );
}
