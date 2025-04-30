import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";

export default function SwimmingPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-24 px-5"
          style={{ backgroundImage: "url(/images/swimming-hero.jpg)" }}
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
                Our swimming facility offers a clean and safe environment for all ages to enjoy. Whether you're a beginner or a seasoned swimmer, our pool is the perfect place to unwind, exercise, and have fun.
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
                  src="/images/swimming2.jpg"
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
              src="/images/swimming3.jpg"
              alt="Recreational Swimming"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Recreational Swimming</h3>
              <p className="text-gray-700">
                Enjoy a stress-free swimming session in our spacious pool. Ideal for leisure and fun, it's the perfect spot to cool off during a hot day.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
                Request Information
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
                Request Information
              </a>
            </div>
            <Image
              src="/images/swimming4.jpg"
              alt="Swimming Lessons"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* 3. Pool Games */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/swimming5.jpg"
              alt="Pool Games"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Pool Games</h3>
              <p className="text-gray-700">
                Dive into excitement with our engaging pool games. Whether it’s water polo, racing, or fun relays, we’ve got entertainment for everyone.
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
