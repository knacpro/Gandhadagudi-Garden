import { Phone } from "lucide-react";
import Link from "next/link";
import Message from "../icons/Message";

export default function SocialMediaFloatingIcons() {
    return (
        <>
        {/* Social Media Floating Buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-20 flex flex-col">
      <Link href="#" className="bg-green-500 p-2 sm:p-3 text-white">
        <Message />
      </Link>
      <Link href="#" className="bg-blue-600 p-2 sm:p-3 text-white">
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
    </div>
        </>
        
    );
}