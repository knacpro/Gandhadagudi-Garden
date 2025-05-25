import React from 'react';
import Image from 'next/image';
import HeaderComponent from "@/components/header/header";
import BookResort from '@/components/BookResort';
import FooterComponent from '../../../components/footer/footer';

export default function SmallTractorRidingPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/trackor.png)" }} // Replace with your actual image
        >
          <h1 className="text-5xl font-bold">Small Tractor Riding</h1>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Fun & Learning</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                Experience the Joy <br /> of Tractor Riding
              </h2>
              <p className="mt-4 text-gray-700">
                Perfect for children and families, our small tractor riding activity combines fun with a unique countryside experience. Learn about farming while enjoying a safe and enjoyable ride.
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
                src="/images/trackor.png" // Replace with actual image path
                alt="Tractor Ride"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Additional Activity Highlights */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/tractor4.png" // Replace with actual image
              alt="Kids enjoying tractor ride"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Safe & Fun for All Ages</h3>
              <p className="text-gray-700">
                Whether you're a toddler curious about machines or a parent seeking a wholesome outdoor activity, our mini tractor rides are both safe and engaging.
              </p>
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
