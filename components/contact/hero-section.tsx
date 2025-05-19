import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-background.png"
          alt="Misty mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 pt-24 md:pt-28">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-widest mb-6">
          CONTACT US
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light max-w-2xl">
          For bookings and enquiries, please call us or write to us.
        </p>
      </div>
    </section>
  );
}
