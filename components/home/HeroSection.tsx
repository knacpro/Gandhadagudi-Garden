import { useTranslations } from "next-intl";

export default function HeroSectionComponent() {
    const t = useTranslations('HomePage');
    return (
        <main className="-mt-[198px] sm:-mt-56 relative z-10 flex flex-col items-center justify-center text-center px-4 bg-green-400">
            <h1 className="whitespace-nowrap animate-marquee text-3xl sm:text-5xl md:text-5xl font-extrabold leading-tight max-w-6xl font-serif">
              {t('title')}
              <br />
            </h1>
          </main>
    );
}
