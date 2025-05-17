import React from 'react';
import Image from 'next/image';
import HeaderComponent from "@/components/header/header";
import BookResort from '@/components/BookResort';
import ResortActivitiesComponent from '@/components/home/ResortActivities';

export default function GoatFarmPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/goat8.png)" }}
        >
          <h1 className="text-5xl font-bold">Goat Farm</h1>
        </section>

        {/* Intro Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Organic Farming</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                EXPERIENCE RURAL LIFE AT OUR GOAT FARM
              </h2>
              <p className="mt-4 text-gray-700">
                Discover the charm of rural India and sustainable farming. Our Goat Farm offers an authentic experience of animal care, organic farming, and fresh produce straight from nature.
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
                  src="/images/goat8.png"
                  alt="Goats"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/goat1.png"
                  alt="Goat Farming"
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
              src="/images/goat1.png"
              alt="Feeding Goats"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Feeding and Milking</h3>
              <p className="text-gray-700">
                Participate in daily farm activities like feeding the goats, milking, and understanding their care routine.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Farm Tour</h3>
              <p className="text-gray-700">
                Take a guided tour around the farm to see sustainable practices in action and interact with friendly animals.
              </p>
            </div>
            <Image
              src="/images/pic4.png"
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
        src="https://www.youtube.com/embed/qV96I1wbvO0?si=WDZtM0dZpObbFgV-"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

        {/* Additional Components */}
        <ResortActivitiesComponent />
        <BookResort />
      </div>
    </div>
  );
}
