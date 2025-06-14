"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";
import FooterComponent from '@/components/footer/footer';
import ResortActivitiesComponent from '@/components/Resort';

export default function RainDancePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
  <div className="bg-green-100">
    <div>
      <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="font-sans">
        
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/raindance1.png)" }}
        >
          <h1 className="text-5xl font-bold">Rain Dance</h1>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#1EBFB1] uppercase text-sm font-medium">Fun & Splash</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                Beat the Heat with<br /> Our Rain Dance Parties
              </h2>
              <p className="mt-4 text-gray-700">
                Dive into excitement with music, water sprays, and a festive atmosphere. Perfect for families, groups, or weekend fun!
              </p>
              <div className="mt-6 flex items-center">
                <div className="bg-[#1EBFB1] rounded-full p-2 mr-3">
                  <Image src="/images/phone.png" alt="Phone" width={24} height={24} />
                </div>
                <span className="font-bold text-lg">+91 96204 65007</span>
              </div>
            </div>
            <div className="md:w-1/2 flex gap-4">
              <div className="w-1/2">
                <Image
                  src="/images/raindance.png"
                  alt="Rain Dance 1"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/rain9.png"
                  alt="Rain Dance 2"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/raindance6.png"
              alt="Music & Lights"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#1EBFB1] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Music & Lights</h3>
              <p className="text-gray-700">
                Enjoy DJ beats and dazzling lights while dancing in the rain.
              </p>
              <a href="#" className="text-[#1EBFB1] mt-3 inline-block underline">
               
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#1EBFB1] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Family-Friendly Zones</h3>
              <p className="text-gray-700">
                We have safe areas for kids and relaxing spaces for adults to chill between the splashes.
              </p>
              <a href="#" className="text-[#1EBFB1] mt-3 inline-block underline">
               
              </a>
            </div>
            <Image
              src="/images/rain9.png"
              alt="Family Zone"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>
         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold text-center mb-8">
    Watch Our Traditional Training in Action
  </h2>
  <div className="flex justify-center">
    <div className="rounded-lg overflow-hidden shadow-md w-full max-w-2xl relative aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/rrwVB_MkxuI?si=m-d8u5tgKmjtqDx1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

 <ResortActivitiesComponent />
        {/* Booking Section */}
        <BookResort />
        <FooterComponent/>
      </div>
    </div>
    </div>
  );
}
