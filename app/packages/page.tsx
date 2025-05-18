import HeaderComponent from "@/components/header/header";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import BookResort from "@/components/BookResort";
import FooterComponent from "@/components/footer/footer";

export default function AdventurePackages() {
  return (
    <main className="w-full">
      <HeaderComponent />
      <section
        className="text-center bg-cover bg-center text-white py-30 px-5"
        style={{ backgroundImage: "url(/images/Packagesbackground.jpg)" }}
      >
        <h1 className="text-5xl font-bold">Packages</h1>
      </section>

      <br />

      <div className="max-w-6xl mx-auto px-4">
        {/* Students Packages */}
        <div className="flex flex-col md:flex-row">
          <div className="relative h-[300px] md:h-auto md:w-1/2 group overflow-hidden">
            <Image
              src="/images/background.png"
              alt="Students enjoying river rafting adventure"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="bg-gray-50 p-8 flex flex-col justify-center md:w-1/2">
            <h2 className="text-3xl font-serif mb-4">Students Packages</h2>
            <p className="text-gray-700 mb-6">
              Gandhagudi Garden's Student Package offers thrilling outdoor
              adventures like trekking, river rafting, and eco-learning
              experiences.
            </p>
            <a
              href="https://wa.me/919740806599?text=Hi%2C%20I'm%20interested%20in%20your%20Student%20Package!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#a4b617] hover:bg-[#8a9a13] text-white py-2 px-4 w-34 text-center transition-colors"
            >
              Enquiry Now
            </a>
          </div>
        </div>

        {/* Corporate Packages */}
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-50 p-8 flex flex-col justify-center md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-serif mb-4">Corporate Packages</h2>
            <p className="text-gray-700 mb-6">
              Gandhagudi Garden's Corporate Packages offer team-building
              activities, outdoor adventures, and peaceful retreats, ideal for
              fostering teamwork, relaxation, and productivity in a refreshing
              natural environment.
            </p>
            <div>
              <a
                href="https://wa.me/919740806599?text=Hi%2C%20I'm%20interested%20in%20your%20Corporate%20Package!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#a4b617] hover:bg-[#8a9a13] text-white py-2 px-6 transition-colors"
              >
                Enquiry Now
              </a>
            </div>
          </div>
          <div className="relative h-[300px] md:h-auto md:w-1/2 order-1 md:order-2 group overflow-hidden">
            <Image
              src="/images/background.png"
              alt="Corporate team on a rafting adventure"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Family Packages */}
        <div className="flex flex-col md:flex-row">
          <div className="relative h-[300px] md:h-auto md:w-1/2 group overflow-hidden">
            <Image
              src="/images/background.png"
              alt="Family enjoying water activities"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="bg-gray-50 p-8 flex flex-col justify-center md:w-1/2">
            <h2 className="text-3xl font-serif mb-4">Family Packages</h2>
            <p className="text-gray-700 mb-6">
              Gandhagudi Garden's Family Packages offer an ideal mix of
              adventure and relaxation, allowing families to enjoy exciting
              outdoor activities while connecting with nature.
            </p>
            <div>
              <a
                href="https://wa.me/919740806599?text=Hi%2C%20I'm%20interested%20in%20your%20Family%20Package!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#a4b617] hover:bg-[#8a9a13] text-white py-2 px-6 transition-colors"
              >
                Enquiry Now
              </a>
            </div>
          </div>
        </div>

        {/* Weekend Packages */}
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-50 p-8 flex flex-col justify-center md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-serif mb-4">Weekend Packages</h2>
            <p className="text-gray-700 mb-6">
              Gandhagudi Garden's Weekend Packages offer a peaceful retreat
              amidst nature, with various outdoor activities, relaxation spots,
              and beautiful surroundings to recharge your mind and body.
            </p>
            <div>
              <a
                href="https://wa.me/919740806599?text=Hi%2C%20I'm%20interested%20in%20your%20Weekend%20Package!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#a4b617] hover:bg-[#8a9a13] text-white py-2 px-6 transition-colors"
              >
                Enquiry Now
              </a>
            </div>
          </div>
          <div className="relative h-[300px] md:h-auto md:w-1/2 order-1 md:order-2 group overflow-hidden">
            <Image
              src="/images/background.png"
              alt="Corporate team on a rafting adventure"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <br />

      <BookResort />
      <FooterComponent />
    </main>
  );
}
