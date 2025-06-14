"use client"
import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header"
import FooterComponent from '../../../components/footer/footer';
import ResortActivitiesComponent from '@/components/Resort';
import { useState } from 'react';

export default function BirdWatchingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-green-100">
    <div>
        <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="text-center bg-cover bg-center text-white py-40 px-5"
        style={{ backgroundImage: "url(/images/birds1.png)" }} 
      >
        <h1 className="text-5xl font-bold">Bird Watching</h1>
      </section>

     
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Outdoor Adventure</h5>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
              Discover the World<br /> of Birds
            </h2>
            <p className="mt-4 text-gray-700">
              Immerse yourself in the peaceful and fascinating world of bird-watching. Perfect for nature lovers, photographers, and families.
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
                src="/images/brids.png"
                alt="Bird Watching View 1"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/birds4.png"
                alt="Bird Watching View 2"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Guided Bird Tours */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/birds-1.png"
            alt="Guided Bird Tour"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Guided Bird Tours</h3>
            <p className="text-gray-700">
              Join experienced guides to spot local and migratory birds in their natural habitats. Learn interesting facts and enjoy the peaceful trails.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
            
            </a>
          </div>
        </div>

        {/* 2. Bird Photography Workshops */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Photography Workshops</h3>
            <p className="text-gray-700">
              Learn how to capture stunning bird shots with expert tips on angles, lighting, and patience. Suitable for all camera types.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
            
            </a>
          </div>
        

          
<Image
  src="/images/birds-2.png"
  alt="Bird Photography"
  width={600}
  height={400}
  className="rounded-lg w-full h-auto"
/>

        
        </div>

        {/* 3. Bird Watching at Sunrise */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/birds7.png"
            alt="Sunrise Bird Watching"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Sunrise Bird Watching</h3>
            <p className="text-gray-700">
              Start your morning with the sweet melodies of birds and beautiful views of sunrise over lush landscapes.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
             
            </a>
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
        src="https://www.youtube.com/embed/C0d5NLjvfWU?si=qkNDDE14U2SMa4FB"
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
      <BookResort />
      <FooterComponent/>
    </div>
    </div>
    </div>
  );
}
