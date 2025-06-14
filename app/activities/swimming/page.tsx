"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";
import ResortActivitiesComponent from '@/components/Resort';
import FooterComponent from '@/components/footer/footer';

export default function SwimmingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
     <div className="bg-green-100">
    <div>
      <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/swing2.png)" }}
        >
          <h1 className="text-5xl font-bold">Swimming</h1>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Water Activity</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                Dive Into<br />
                Refreshing Fun
              </h2>
              <p className="mt-4 text-gray-700">
                Our swimming facility offers a clean and safe environment for all ages to enjoy. Whether you are a beginner or a seasoned swimmer, our pool is the perfect place to unwind, exercise, and have fun.
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
                  src="/images/swing1.png"
                  alt="Swimming Pool 1"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/swing2.png"
                  alt="Swimming Pool 2"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Swimming Activities Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Recreational Swimming */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/swing6.png"
              alt="Recreational Swimming"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Recreational Swimming</h3>
              <p className="text-gray-700">
                Enjoy a stress-free swimming session in our spacious pool. Ideal for leisure and fun, it is the perfect spot to cool off during a hot day.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
           
              </a>
            </div>
          </div>

          {/* 2. Swimming Lessons */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Swimming Lessons</h3>
              <p className="text-gray-700">
                Our trained instructors provide professional swimming lessons for kids and adults. Learn techniques, improve stamina, and gain water confidence.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
                
              </a>
            </div>
            <Image
              src="/images/swing5.JPG"
              alt="Swimming Lessons"
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
        src="https://www.youtube.com/embed/unAmLA7GliQ?si=vIUa_pb6aCK7JHx0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

        {/* Booking Section */}
        <ResortActivitiesComponent/>
        <BookResort />
        <FooterComponent/>
      </div>
    </div>
    </div>
  );
}
