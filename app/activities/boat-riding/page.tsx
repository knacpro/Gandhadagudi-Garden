import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort'; // Reuse the booking section if needed

export default function BoatRidingPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="text-center bg-cover bg-center text-white py-24 px-5"
        style={{ backgroundImage: "url(/images/boat.png)" }}
      >
        <h1 className="text-5xl font-bold">Boat Riding</h1>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Outdoor Activity</h5>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
              Experience Tranquility<br />
              on Water
            </h2>
            <p className="mt-4 text-gray-700">
              Our Boat Riding activity offers a peaceful escape into nature. Whether you seek relaxation or an adventure with family, our safe and scenic rides provide a refreshing experience on the water.
            </p>
            <div className="mt-6 flex items-center">
              <div className="bg-[#8CBF1E] rounded-full p-2 mr-3">
                <Image src="/images/phone.png" alt="Phone" width={24} height={24} />
              </div>
              <span className="font-bold text-lg">+91 96204 65007</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/boat.png"
              alt="Boat Riding"
              width={500}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/boating2.jpg"
            alt="Boating View"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Scenic Boat Rides</h3>
            <p className="text-gray-700">
              Float across calm waters surrounded by lush greenery. Ideal for all age groups, our boat rides are perfect for sightseeing, photography, or simply enjoying the moment.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              Request Information
            </a>
          </div>
        </div>
      </section>

      {/* Optional: Booking Section */}
      <BookResort />
    </div>
  );
}
