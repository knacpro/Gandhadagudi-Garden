"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";
import ResortActivitiesComponent from '@/components/Resort';

import FooterComponent from '@/components/footer/footer';

export default function DeerFarmPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
       <div className="bg-green-100">
      <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/deer10.png" }}
        >
          <h1 className="text-5xl font-bold">Deer Farm</h1>
        </section>

        {/* Intro Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Wildlife & Nature</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                Explore the Calm <br /> of Our Deer Farm
              </h2>
              <p className="mt-4 text-gray-700">
                Experience nature up close at our deer farm. Observe these majestic creatures in a safe, natural setting, learn about their habits, and enjoy a peaceful connection with wildlife.
              </p>
              <div className="mt-6 flex items-center">
                <div className="bg-[#8CBF1E] rounded-full p-2 mr-3">
                  <Image src="/images/phone.png" alt="Phone" width={24} height={24} />
                </div>
                <span className="font-bold text-lg">+91 96204 65007</span>
              </div>
            </div>
            <div className="md:w-1/2 flex gap-4">
              <div className="w-1/2">
                <Image
                  src="/images/deer10.png"
                  alt="Deer Farm"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/deer9.png"
                  alt="Deer in Farm"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Feeding Experience */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/deer11.png"
              alt="Deer Feeding"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Feed the Gentle Giants</h3>
              <p className="text-gray-700">
                Get a chance to feed the friendly deer in their habitat. A heartwarming and educational experience for families and children.
              </p>
            </div>
          </div>

          {/* 2. Guided Nature Walk */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Guided Nature Walk</h3>
              <p className="text-gray-700">
                Stroll through scenic trails with our expert guides and observe deer in their natural surroundings while learning about local flora and fauna.
              </p>
            </div>
            <Image
              src="/images/deer12.png"
              alt="Nature Walk"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* 3. Observation Deck */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/deer10.png"
              alt="Deer Observation"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Observation Deck</h3>
              <p className="text-gray-700">
                Relax at our observation deck and watch the deer roam freely in a secure and open space — a great spot for photography and nature appreciation.
              </p>
            </div>
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
        src="https://www.youtube.com/embed/e0_6qb4gmHg?si=nJWvL3LDNtMm8max"
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
