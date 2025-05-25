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
        style={{ backgroundImage: "url(/images/kids3.png)" }}
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
                src="/images/kids3.png"
                alt="Kids Play Area 1"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/kids4.png"
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
            "/images/kids5.png",
            "/images/kids6.png",
            "/images/kids7.png",
            "/images/kids8.png",
            "/images/kids9.png",
            "/images/kids10.png",
            "/images/kids11.png",
            "/images/kids12.png",
            "/images/kids13.png",
            "/images/kids14.png",
            "/images/kids15.png",
             "/images/kids16.png",
              "/images/kids17.png",
               "/images/kids18.png",
                "/images/kids19.png",
                 "/images/kids20.png",
                
                 
          ].map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Kids Activity ${idx + 1}`}
                width={500}
                height={380}
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
  <div className="flex justify-center">
    <div className="rounded-lg overflow-hidden shadow-md w-full max-w-2xl relative aspect-video">
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

      <ResortActivitiesComponent/>
    
      <BookResort />
      <FooterComponent/>
    </div>
  );
}
