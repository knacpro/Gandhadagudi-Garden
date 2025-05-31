'use client';
'use client';

import { Menu, X } from "lucide-react";
import Image from "next/image";
import TopBarComponent from "./TopBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePathname } from "next/navigation";

export default function HeaderComponent({ mobileMenuOpen, setMobileMenuOpen }: any) {
    const pathname = usePathname();
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT" },
        { href: "/activities", label: "ACTIVITIES" },
        {href: "/restuarant", label: "RESTUARANT"},
        { href: "/attractions", label: "ATTRACTIONS" },
        { href: "/packages", label: "PACKAGES" },
        { href: "/gallery", label: "GALLERY" },
        { href: "/blog", label: "BLOG" },
        { href: "/contact", label: "CONTACT" },
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

                    <Image
                        src="/images/logo.png"
                        alt="GandhadaGudi Garden Logo"
                        alt="GandhadaGudi Garden Logo"
                        width={240}
                        height={80}
                        className="h-14 w-36 ml-8 sm:h-14 sm:w-auto rounded-xl"
                    />
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="fixed inset-x-0 top-0 bottom-0 bg-green-200 p-8 rounded-lg shadow-lg z-10 flex flex-col items-start justify-start pt-24 pl-6 md:hidden space-y-6">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={linkClass(href)}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={linkClass(href)}>
                            {label}
                        </Link>
                    ))}
                    
                </nav>
            </header>

            {/* Add spacer to push down the rest of the page content */}
            {pathname === "/" && (
                <div className="h-[160px] md:h-[170px]" />
            )}

        </>
    );
}
