"use client"

import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header"



export default function page() {
  return (
    <div>
        <HeaderComponent/>
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="text-center bg-cover bg-center text-white py-24 px-5"
        style={{ backgroundImage: "url(/images/kayaing2.png)" }}
      >
        <h1 className="text-5xl font-bold">Adventure Kayaking</h1>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Outdoor Adventure</h5>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
              Paddle Your Way to<br /> Excitement
            </h2>
            <p className="mt-4 text-gray-700">
              Get ready for a thrilling kayaking experience that blends fun, fitness, and the beauty of nature. Whether you're a beginner or an enthusiast, our guided kayaking adventures offer something for everyone.
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
                src="/images/kayaing4.png"
                alt="Kayaking View 1"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/kayaing5.png"
                alt="Kayaking View 2"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kayaking Activities Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Guided Kayak Tours */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/kayaing6.png"
            alt="Guided Kayak Tour"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Guided Kayak Tours</h3>
            <p className="text-gray-700">
              Explore calm waters and scenic routes with expert guides who ensure your safety and enjoyment. Ideal for beginners and families.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              Request Information
            </a>
          </div>
        </div>

        {/* 2. Adventure Racing */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Adventure Racing</h3>
            <p className="text-gray-700">
              Compete with friends or join a fun challenge in our exciting kayaking races. Feel the adrenaline rush while paddling to victory.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              Request Information
            </a>
          </div>
          <Image
            src="/images/kayaing7.png"
            alt="Kayak Racing"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* 3. Sunset Kayaking */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/kayaking1.png"
            alt="Sunset Kayaking"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Sunset Kayaking</h3>
            <p className="text-gray-700">
              End your day with a peaceful paddle under the golden hues of sunset. Perfect for photography lovers and nature enthusiasts.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              Request Information
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookResort />
    </div>
    </div>
  );
}
