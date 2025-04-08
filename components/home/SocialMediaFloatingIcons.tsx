import { Phone } from "lucide-react";
import Link from "next/link";

export default function SocialMediaFloatingIcons() {
    return (
        <>
        {/* Social Media Floating Buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-20 flex flex-col">
      <Link href="#" className="bg-green-500 p-2 sm:p-3 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </Link>
      <Link href="#" className="bg-blue-600 p-2 sm:p-3 text-white">
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
    </div>
        </>
        
    );
}