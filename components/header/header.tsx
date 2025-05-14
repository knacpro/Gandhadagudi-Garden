'use client';

import { Menu, X } from "lucide-react";
import Image from "next/image";
import TopBarComponent from "./TopBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderComponent({ mobileMenuOpen, setMobileMenuOpen }: any) {
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
            {/* Fixed TopBar */}
            <div className="hidden md:block fixed top-0 left-0 right-0 z-30 bg-black/90">
                <TopBarComponent />
            </div>

            {/* Fixed NavBar - placed below TopBar */}
            <header className="fixed top-[40px] md:top-[48px] z-20 w-full px-4 py-1 md:bg-black/50 flex justify-between items-center">
                <div className="flex items-center">
                    <button
                        className="md:hidden text-white z-20 mr-10"
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
                        className="h-20 sm:h-24 sm:w-auto rounded-xl"
                    />
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="fixed inset-x-0 top-0 bottom-0 bg-black/90 z-10 flex flex-col items-start justify-start pt-24 pl-6 md:hidden space-y-6">
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
                        <Link
                            href="/reserve-now"
                            className={`border px-6 py-2 ${pathname === "/reserve-now" ? "text-yellow-400 border-yellow-400" : "text-white border-white hover:bg-white/10"}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Reserve Now
                        </Link>
                    </div>
                )}

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={linkClass(href)}>
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="/reserve-now"
                        className={`border px-6 py-2 ${pathname === "/reserve-now" ? "text-yellow-400 border-yellow-400" : "text-white border-white hover:bg-white/10"}`}
                    >
                        Reserve Now
                    </Link>
                </nav>
            </header>

            {/* Add spacer to push down the rest of the page content */}
            <div className="h-[160px] md:h-[170px]" />
        </>
    );
}











