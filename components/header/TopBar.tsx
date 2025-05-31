import Link from "next/link";
import Image from "next/image";

export default function TopBarComponent() {
  return (
    <div className="relative z-10 bg-black/50 text-white py-2 px-4 flex justify-between items-center">
      <div className="flex flex-col sm:flex-row sm:space-x-8">
        <Link href={"tel:+919740806599"} className="text-sm">
          TEL: +919740806599
        </Link>
        <Link
          href={"mailto:gandhadagudigardenbyahatti@gmail.com?subject=Subject"}
          target="_blank"
          className="text-sm"
        >
          gandhadagudigardenbyahatti@gmail.com
        </Link>
      </div>
      <div>
        <Link
          href="https://www.instagram.com/gandhadagudi_garden_byahatti?igsh=dGx1aXcyZHZpZTFl"
          target="_blank"
          aria-label="Instagram"
        >
          <Image
            src="/images/instagram.png"
            alt="Instagram logo"
            width={28}
            height={28}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
