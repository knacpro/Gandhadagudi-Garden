import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header"


export default function Page() {
  return (

    <div>
 
             <HeaderComponent/>
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="text-center bg-cover bg-center text-white py-24 px-5"
        style={{ backgroundImage: "url(/images/gym4.png)" }}
      >
        <h1 className="text-5xl font-bold">Gym</h1>
      </section>

      {/* Gym Activities Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Gym</h5>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
              UNLEASH YOUR POWER<br />
              AT GANDHADAGUDI GYM
            </h2>
            <p className="mt-4 text-gray-700">
              Step into a world of fitness and wellness at GandhadaGudi Garden’s modern gym facility. Whether you’re a fitness
              enthusiast or just starting your journey, our gym offers everything you need to stay in shape while surrounded by
              nature. Enjoy strength training, cardio workouts, and wellness activities in a peaceful, eco-friendly setting.
            </p>
            <div className="mt-6 flex items-center">
              <div className="bg-[#8CBF1E] rounded-full p-2 mr-3">
                <Image src="/images/phone.png" alt="Phone" width={24} height={24} className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">+91 96204 65007</span>
            </div>
          </div>
          <div className="md:w-1/2 flex gap-4">
            <div className="w-1/2">
              <Image
                src="/images/gym1.png"
                alt="Gym Equipment"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/gym5.png"
                alt="Fitness Training"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extra Gym Feature Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Cardio Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/cardo.png"
            alt="Cardio Training"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Cardio Training</h3>
            <p className="text-gray-700">
              Boost your heart health and stamina with our top-tier cardio zone, equipped with treadmills, bikes, and cross trainers.
              Designed for high energy and motivation, this section helps you burn calories and improve endurance.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              Request Information
            </a>
          </div>
        </div>

        {/* 2. Strength Zone */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Strength Zone</h3>
            <p className="text-gray-700">
              Build muscle and strength in our fully-equipped weight training section. With free weights, resistance machines,
              and expert trainers, GandhadaGudi offers everything to sculpt your physique.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              Request Information
            </a>
          </div>
          <Image
            src="/images/gym3.png"
            alt="Strength Training"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* 3. Yoga & Wellness */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/yoga.png"
            alt="Yoga & Wellness"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          <div>
            <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
            <h3 className="text-2xl font-semibold mb-4">Yoga & Wellness</h3>
            <p className="text-gray-700">
              Recharge your body and mind in our dedicated yoga and meditation space. Perfect for stretching, breathing exercises,
              and finding your inner peace amidst lush surroundings.
            </p>
            <a href="#" className="text-[#8CBF1E] mt-3 inline-block underline">
              Request Information
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookResort />
    </div>
    </div>
  );
}
