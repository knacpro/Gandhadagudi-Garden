import Link from "next/link";
import Image from "next/image";

export default function SocialMediaFloatingIcons() {
    return (
        <>
        {/* Social Media Floating Buttons */}
      <div className="hidden fixed right-0 top-1/2 transform -translate-y-1/2 z-20 sm:flex flex-col">
        <Link href="https://wa.me/919740806599?text=Hi%2C%20I%20am%20interested%20in%20your%20services." target="_blank" aria-label="Whatsapp">
          <Image
            src="/images/whatsapp.png"
            alt="Whatsapp logo"
            width={28}
            height={28}
            className="object-contain w-12 h-24"
          />
        </Link>
        <Link href="tel:+919740806599" aria-label="Phone" className="-mt-10">
          <Image
            src="/images/call.png"
            alt="Whatsapp logo"
            width={28}
            height={28}
            className="object-contain w-12 h-24"
          />
        </Link>
    </div>
        </>
        
    );
}