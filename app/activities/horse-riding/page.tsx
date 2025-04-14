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
        style={{ backgroundImage: "url(/images/hourse3.png)" }}
      >
        <h1 className="text-5xl font-bold">Horse Riding</h1>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Outdoor Adventure</h5>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
              Saddle Up for<br /> a Memorable Ride
            </h2>
            <p className="mt-4 text-gray-700">
              Discover the joy of horse riding amidst nature. Whether you're a beginner or a pro, our horseback adventures promise an unforgettable outdoor experience filled with fun and bonding.
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
                src="/images/hourse4.png"
                alt="Horse Riding 1"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/hourse5.png"
                alt="Horse Riding 2"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Horse Riding Activities Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Trail Riding */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/hourse7.png"
            alt="Trail Riding"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Trail Riding</h3>
            <p className="text-gray-700">
              Ride through scenic paths surrounded by lush greenery. Great for individuals, families, or small groups who love connecting with nature.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              Request Information
            </a>
          </div>
        </div>

        {/* 2. Pony Rides for Kids */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Pony Rides for Kids</h3>
            <p className="text-gray-700">
              Our safe and supervised pony rides are perfect for children. Give your little ones a joyful and memorable first riding experience.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              Request Information
            </a>
          </div>
          <Image
            src="/images/horse.png"
            alt="Pony Ride"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* 3. Riding Lessons */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/hourse9.png"
            alt="Horse Riding Lessons"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Riding Lessons</h3>
            <p className="text-gray-700">
              Learn the basics or improve your riding techniques with our professional instructors. Individual and group sessions available.
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
