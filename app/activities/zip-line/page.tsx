"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";
import ResortActivitiesComponent from '@/components/Resort';

import FooterComponent from '@/components/footer/footer';

export default function ZipLinePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
        <div className="bg-green-100">
    <div>
      <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="font-sans">
        
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/zipline2.png)" }}
        >
          <h1 className="text-5xl font-bold">Zipline Adventure</h1>
        </section>

     
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Outdoor Thrill</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                Soar Through the<br /> Trees and Skies
              </h2>
              <p className="mt-4 text-gray-700">
                Feel the rush of adrenaline as you zip across breathtaking landscapes. Perfect for thrill-seekers of all ages looking for an unforgettable adventure.
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
                  src="/images/zipline1.png"
                  alt="Zipline 1"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/zip9.png"
                  alt="Zipline 2"
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
              src="/images/zipline8.png"
              alt="Canopy Tour"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Canopy Tour</h3>
              <p className="text-gray-700">
                Glide from one tree platform to another and experience the forest like never before. A must-try for nature lovers.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
               
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Zipline for Kids</h3>
              <p className="text-gray-700">
                Specially designed ziplines ensure safe and fun experiences for children under professional supervision.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
            
              </a>
            </div>
            <Image
              src="/images/zip9.png"
              alt="Zipline for Kids"
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
        src="https://www.youtube.com/embed/zffHy9lyflY?si=tbx6ZsfT-b5LUGSh"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>
<ResortActivitiesComponent/>
        
        <BookResort />
        <FooterComponent/>
      </div>
    </div>
    </div>
  );
}
