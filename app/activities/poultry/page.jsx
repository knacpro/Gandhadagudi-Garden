import React from 'react';
import Image from 'next/image';
import HeaderComponent from '@/components/header/header';
import ResortActivitiesComponent from '@/components/home/ResortActivities';
import BookResort from '@/components/BookResort';

export default function PoultryPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/poultry1.png)" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Poultry Experience</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Discover our organic poultry farm where education meets nature!
          </p>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Farm Visit</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                Learn. Explore. Interact.
              </h2>
              <p className="mt-4 text-gray-700">
                Step into a world of sustainable farming. Our poultry setup offers an engaging way to understand animal care and organic practices.
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
                  src="/images/poultry1.png"
                  alt="Poultry Image 1"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/hens2.png"
                  alt="Poultry Image 2"
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
              src="/images/hens2.png"
              alt="Kids at Poultry"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Family Friendly</h5>
              <h3 className="text-2xl font-semibold mb-4">Interactive Farm Walks</h3>
              <p className="text-gray-700">
                Ideal for children and adults, our guided tours introduce visitors to hens, chicks, and the world of organic farming.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
                Learn More
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Farm Fresh</h5>
              <h3 className="text-2xl font-semibold mb-4">Organic Egg Collection</h3>
              <p className="text-gray-700">
                Experience collecting fresh eggs, understand the lifecycle of poultry, and enjoy organic produce straight from the farm.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
                Learn More
              </a>
            </div>
            <Image
              src="/images/hens4.png"
              alt="Egg Collection"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

     
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Farm in Action</h2>
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-md w-full max-w-2xl">
              <video
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-auto rounded-lg"
                src="/videos/poultry.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Activities and Booking */}
        <ResortActivitiesComponent />
        <BookResort />
      </div>
    </div>
  );
}
