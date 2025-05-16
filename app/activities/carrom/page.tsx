import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";
import ResortActivitiesComponent from '@/components/home/ResortActivities';

export default function IndoorOutdoorGamesPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/flower.png)" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Indoor & Outdoor Games</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Dive into exciting activities that challenge the mind and energize the body!
          </p>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Indoor & Outdoor Fun</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                Strategy. Precision.<br />
                Pure Enjoyment.
              </h2>
              <p className="mt-4 text-gray-700">
                Engage your mind with indoor classics like Carrom and Chess, or test your aim and focus with Archery.
                Whether you're a seasoned player or a curious beginner, these games bring people together in fun and challenge.
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
                  src="/images/carrom1.png"
                  alt="Carrom"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/chess.png"
                  alt="Chess"
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
          {/* Carrom */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/carrom1.png"
              alt="Carrom Game"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Indoor Game</h5>
              <h3 className="text-2xl font-semibold mb-4">Carrom</h3>
              <p className="text-gray-700">
                A classic game of precision and planning, Carrom is loved by all ages. Join friends or challenge others in this engaging tabletop game.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
                Learn More
              </a>
            </div>
          </div>

          {/* Chess */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Indoor Game</h5>
              <h3 className="text-2xl font-semibold mb-4">Chess</h3>
              <p className="text-gray-700">
                Sharpen your strategy and decision-making skills. Whether you're learning or mastering the game, chess offers timeless intellectual excitement.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
                Learn More
              </a>
            </div>
            <Image
              src="/images/chess1.png"
              alt="Chess Game"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Archery */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/arachery1.png"
              alt="Archery"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Outdoor Game</h5>
              <h3 className="text-2xl font-semibold mb-4">Archery</h3>
              <p className="text-gray-700">
                Feel the thrill of hitting the target! Our archery setup is great for beginners and enthusiasts to explore focus and coordination outdoors.
              </p>
              <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
                Learn More
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
        src="https://www.youtube.com/embed/eARUqzwQIqk?si=IPHRbTrpnwLijIqH"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

        {/* Resort Activities and Booking */}
        <ResortActivitiesComponent />
        <BookResort />
      </div>
    </div>
  );
}
