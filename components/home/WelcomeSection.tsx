import { Phone } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function WelcomeSectionComponent() {
  const t = useTranslations('HomePage');
    return (
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
            {/* Left Content Section */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-green-600 text-sm font-bold tracking-wide mb-2">{t('welcome')}</p>
              <h1 className="text-4xl md:text-5xl font-serif text-[#333333] mb-6">{t('title')}</h1>

              <p className="text-[#333333] mb-12 leading-relaxed">
                {t('description')}
              </p>

              <div className="flex items-center gap-4">
                <Link href={'tel:+919740806599'} className="w-16 h-16 rounded-full border-2 border-green-600 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </Link>
                <div>
                  <p className="text-green-600 text-sm font-medium mb-1">{t('call')}</p>
                  <p className="text-2xl text-[#333333] font-medium">+91 9740806599</p>
                </div>
              </div>
            </div>

            {/* Right Images Section */}
            <div className="flex-1 flex gap-4">
              <div className="flex-1">
                <Image
                  src="/images/zip-line.png"
                  alt="White water rafting in Dandeli"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <Image
                  src="/images/kayaking.png"
                  alt="Canyoning adventure in Dandeli"
                  width={700}
                  height={600}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
    );
}