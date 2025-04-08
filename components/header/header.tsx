import { Menu, X } from "lucide-react";
import Image from "next/image"
import { useState } from "react";
import TopBarComponent from "./TopBar";
import Link from "next/link";

export default function HeaderComponent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            {/* Top Bar */}
            <TopBarComponent />
            {/* Header with Logo and Navigation */}
            <header className="relative z-10 px-4 py-6 flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Wildernest Logo"
                        width={240}
                        height={80}
                        className="h-12 sm:h-16 w-auto rounded-xl"
                    />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-20"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/90 z-10 flex flex-col items-center justify-center space-y-6 md:hidden">
                        <Link href="#" className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
                            HOME
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
                            ABOUT
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
                            ACTIVITIES
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
                            ATTRACTIONS
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
                            PACKAGES
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
                            GALLERY
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
                            BLOG
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
                            CONTACT
                        </Link>
                        <Link
                            href="#"
                            className="text-white border border-white px-6 py-2 hover:bg-white/10"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Reserve Now
                        </Link>
                    </div>
                )}

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="#" className="text-white hover:text-gray-200">
                        HOME
                    </Link>
                    <Link href="#" className="text-white hover:text-gray-200">
                        ABOUT
                    </Link>
                    <Link href="#" className="text-white hover:text-gray-200">
                        ACTIVITIES
                    </Link>
                    <Link href="#" className="text-white hover:text-gray-200">
                        ATTRACTIONS
                    </Link>
                    <Link href="#" className="text-white hover:text-gray-200">
                        PACKAGES
                    </Link>
                    <Link href="#" className="text-white hover:text-gray-200">
                        GALLERY
                    </Link>
                    <Link href="#" className="text-white hover:text-gray-200">
                        BLOG
                    </Link>
                    <Link href="#" className="text-white hover:text-gray-200">
                        CONTACT
                    </Link>
                    <Link href="#" className="text-white border border-white px-6 py-2 hover:bg-white/10">
                        Reserve Now
                    </Link>
                </nav>
            </header>
        </>

    );
}