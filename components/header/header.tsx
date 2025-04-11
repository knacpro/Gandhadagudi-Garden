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
                        alt="GandhadaGudi Garden Logo"
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
                   <div className="relative group">
    <Link
        href="/activities"
        className="text-white flex items-center gap-1 hover:underline hover:text-yellow-300 transition duration-200"
        onClick={() => setMobileMenuOpen(false)}
    >
        ACTIVITIES ▼
    </Link>
    <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-xl shadow-2xl z-10 w-64 border border-gray-200">
        <div className="px-4 py-2 font-bold text-indigo-700 bg-gray-100 border-b">Indoor Activities</div>
        <Link href="/activities/gym" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700 transition">Gym</Link>
        <Link href="/activities/garadi-mane" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700 transition">Garadi Mane</Link>

        <div className="px-4 py-2 font-bold text-green-700 bg-gray-100 border-b mt-2">Outdoor Activities</div>
        <Link href="/activities/boat-riding" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Boat Riding</Link>
        <Link href="/activities/adventure-kayaking" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Adventure Kayaking</Link>
        <Link href="/activities/bird-watching" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Bird Watching</Link>
        <Link href="/activities/horse-riding" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Horse Riding</Link>
        <Link href="/activities/cow-farming" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Cow Farming</Link>
    </div>
</div>
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
                    
<div className="relative group">
    <Link
        href="/activities"
        className="text-white flex items-center gap-1 hover:underline hover:text-yellow-300 transition duration-200"
        onClick={() => setMobileMenuOpen(false)}
    >
        ACTIVITIES ▼
    </Link>
    <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-xl shadow-2xl z-10 w-64 border border-gray-200">
        <div className="px-4 py-2 font-bold text-indigo-700 bg-gray-100 border-b">Indoor Activities</div>
        <Link href="/activities/gym" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700 transition">Gym</Link>
        <Link href="/activities/garadi-mane" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700 transition">Garadi Mane</Link>

        <div className="px-4 py-2 font-bold text-green-700 bg-gray-100 border-b mt-2">Outdoor Activities</div>
        <Link href="/activities/boat-riding" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Boat Riding</Link>
        <Link href="/activities/adventure-kayaking" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Adventure Kayaking</Link>
        <Link href="/activities/bird-watching" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Bird Watching</Link>
        <Link href="/activities/horse-riding" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Horse Riding</Link>
        <Link href="/activities/cow-farming" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition">Cow Farming</Link>
    </div>
</div>


   

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





