import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";
import ResortActivitiesComponent from '@/components/home/ResortActivities';
import FooterComponent from '../../../components/footer/footer';

export default function LawnGardenPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="font-sans">

        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/lawn1.png)" }}
        >
          <h1 className="text-5xl font-bold">Lawn Garden</h1>
        </section>

        {/* Intro Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Celebration & Nature</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                Host Your Special Moments <br /> in Nature's Embrace
              </h2>
              <p className="mt-4 text-gray-700">
                Our lawn garden is the perfect setting for small birthday parties and wedding anniversaries. Celebrate surrounded by greenery and fresh air in a beautifully maintained space.
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
                  src="/images/lawn3.png"
                  alt="Lawn Garden"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/wedding.png"
                  alt="Party Setup"
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/wedding.png"
              alt="Birthday Party"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Birthday Celebrations</h3>
              <p className="text-gray-700">
                Celebrate your child's birthday with an open-air party, fun decorations, and a joyful vibe among nature.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Wedding Anniversaries</h3>
              <p className="text-gray-700">
                Host your memorable moments with elegance — perfect for intimate anniversary gatherings with a romantic garden backdrop.
              </p>
            </div>
            <Image
              src="/images/lawn-wedding.png"
              alt="Anniversary Celebration"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        {/* Optional Video Section */}
        {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Garden in Action</h2>
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-md w-full max-w-2xl">
              <video
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-auto rounded-lg"
                src="/videos/lawn-garden.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section> */}

        <ResortActivitiesComponent />

        {/* Booking Section */}
        <BookResort />
        <FooterComponent/>
      </div>
    </div>
  );
}
