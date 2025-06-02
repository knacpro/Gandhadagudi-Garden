import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";
import ResortActivitiesComponent from '@/components/Resort';

import FooterComponent from '../../../components/footer/footer';

export default function RabbitFarmPage() {
  return (
    <div className="bg-green-100">
    <div>
      <HeaderComponent />
      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/rabbit7.png)" }}
        >
          <h1 className="text-5xl font-bold">Rabbit Farm</h1>
        </section>

       
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Nature & Care</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                Discover the Joy <br /> of Rabbit Farming
              </h2>
              <p className="mt-4 text-gray-700">
                Our rabbit farm is a peaceful escape into nature. Learn about sustainable animal care, interact with adorable rabbits, and explore eco-friendly farming practices in a tranquil environment.
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
                  src="/images/rabbit7.png"
                  alt="Rabbit Farm"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/rabbit9.png"
                  alt="Rabbits"
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
              src="/images/rabbit7.png"
              alt="Rabbit Feeding"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Interactive Feeding Experience</h3>
              <p className="text-gray-700">
                Get hands-on with our gentle rabbits! Learn how to feed and handle them with care under expert guidance. A delightful activity for all ages.
              </p>
            </div>
          </div>

          {/* 2. Farm Tour */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Educational Farm Tour</h3>
              <p className="text-gray-700">
                Explore the different sections of our rabbit farm — from breeding to nurturing — and gain insights into sustainable farming and eco-living.
              </p>
            </div>
            <Image
              src="/images/rabbit8.png"
              alt="Farm Tour"
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
        src="https://www.youtube.com/embed/qnqnEIHg4j4?si=8B9k5K5JLXhrFj2v"
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
