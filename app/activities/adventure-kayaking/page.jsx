"use client"

import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";
import ResortActivitiesComponent from '../../../components/home/ResortActivities';

export default function page() {
  return (
    <div>
      <HeaderComponent />
      <div className="font-sans">
       
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/kayaing2.png)" }}
        >
          <h1 className="text-5xl font-bold">Adventure Kayaking</h1>
        </section>

      
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
                  height={300}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/kayaing5.png"
                  alt="Kayaking View 2"
                  width={300}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-lg"
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
              height={300}
              className="rounded-lg w-full h-[300px] object-cover"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Guided Kayak Tours</h3>
              <p className="text-gray-700">
                Explore calm waters and scenic routes with expert guides who ensure your safety and enjoyment. Ideal for beginners and families.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
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
              </a>
            </div>
            <Image
              src="/images/kaya1.png"
              alt="Kayak Racing"
              width={600}
              height={300}
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </div>

          {/* 3. Sunset Kayaking */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/kayaking1.png"
              alt="Sunset Kayaking"
              width={600}
              height={300}
              className="rounded-lg w-full h-[300px] object-cover"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Sunset Kayaking</h3>
              <p className="text-gray-700">
                End your day with a peaceful paddle under the golden hues of sunset. Perfect for photography lovers and nature enthusiasts.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              </a>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Watch Our Traditional Training in Action
          </h2>
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-md w-full max-w-2xl relative aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/qHLD7Yj2x94?si=_wj0fEN66Jcd8zMY"
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
        <ResortActivitiesComponent />
        <BookResort />
      </div>
    </div>
  );
}
