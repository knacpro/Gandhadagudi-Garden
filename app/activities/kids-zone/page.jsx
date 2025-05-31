import React from 'react';
import Image from 'next/image';
import HeaderComponent from "@/components/header/header";
import BookResort from '@/components/BookResort';
import ResortActivitiesComponent from './../../../components/home/ResortActivities';
import FooterComponent from '../../../components/footer/footer';

export default function KidsZonePage() {
  return (
    <div>
      <HeaderComponent />

      {/* Hero Section */}
      <section
        className="text-center bg-cover bg-center text-white py-40 px-5"
        style={{ backgroundImage: "url(/images/kids22.png)" }}
      >
        <h1 className="text-5xl font-bold">Kids Zone</h1>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Fun & Learning</h5>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
              A World of Fun<br /> for Every Child
            </h2>
            <p className="mt-4 text-gray-700">
              Our Kids Zone offers a playful and safe environment where children can explore, learn, and enjoy. With interactive games, colorful rides, and engaging activities, it's the perfect spot for fun-filled family time.
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
                src="/images/kids22.png"
                alt="Kids Play Area 1"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/kids23.png"
                alt="Kids Play Area 2"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Kids Zone Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[ 
            "/images/kids24.png", "/images/kids25.png", "/images/kids26.png", "/images/kids27.png", 
            "/images/kids28.png", "/images/kids29.png", "/images/kids30.png", "/images/kids35.png", 
            "/images/kids32.png", "/images/kids33.png", "/images/kids36.png", "/images/kids37.png", 
            "/images/kids39.png", "/images/kids18.png", "/images/kids22.png", "/images/kids38.png",
          ].map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Kids Activity ${idx + 1}`}
                width={320}
                height={240}
                className="w-full h-auto transition-transform duration-300 hover:scale-105 rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Watch Our Traditional Training in Action
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {/* First Video */}
          <div className="rounded-lg overflow-hidden shadow-md w-full max-w-xl relative aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/p9afwKh1v8o?si=qxRwToOmXSPPqzGQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Second Video */}
          <div className="rounded-lg overflow-hidden shadow-md w-full max-w-xl relative aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/yYUUObZilvA?si=f4YklYD0i7Djzz9m"
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
      <FooterComponent />
    </div>
  );
}
