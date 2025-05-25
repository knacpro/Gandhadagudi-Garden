import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header"
import FooterComponent from '../../../components/footer/footer';

export default function page() {
  return (
    <div>
         <HeaderComponent/>
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="text-center bg-cover bg-center text-white py-40 px-5"
        style={{ backgroundImage: "url(/images/cow1.png)" }}
      >
        <h1 className="text-5xl font-bold">Cow Farming</h1>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Agro Experience</h5>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
              Learn & Explore<br /> the Joy of Cow Farming
            </h2>
            <p className="mt-4 text-gray-700">
              Experience the peaceful and rewarding world of cow farming. Get hands-on with daily routines, understand sustainable practices, and learn how dairy farming supports our communities.
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
                src="/images/cow2.png"
                alt="Cow Farming 1"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/cow3.png"
                alt="Cow Farming 2"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cow Farming Activities Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Milking Demonstration */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/cow9.png"
            alt="Milking Demo"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Farm Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Milking Demonstration</h3>
            <p className="text-gray-700">
              Learn the traditional and modern ways of cow milking. This session offers a unique chance to understand dairy processes from farm to table.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
             
            </a>
          </div>
        </div>

        {/* 2. Cow Feeding */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Farm Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Cow Feeding</h3>
            <p className="text-gray-700">
              Engage in feeding the cows and learn about their daily nutrition. This is a great opportunity for kids and families to interact with the animals.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
             
            </a>
          </div>
          <Image
            src="/images/cow6.png"
            alt="Cow Feeding"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* 3. Organic Manure Making */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/cow1-.png"
            alt="Organic Manure"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Farm Education</h5>
            <h3 className="text-2xl font-semibold mb-4">Organic Manure Preparation</h3>
            <p className="text-gray-700">
              Discover how cow waste is converted into valuable organic manure and used in farming. Learn sustainable farming techniques and eco-friendly practices.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
             
            </a>
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
        src="https://www.youtube.com/embed/9i-wNKvecus?si=n2mz8VyTj2eRnpAK"
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
      <BookResort />
      <FooterComponent/>
    </div>
    </div>
  );
}
