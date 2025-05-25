"use client"

import HeaderComponent from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import ResortActivitiesComponent from '@/components/home/ResortActivities'
import BookResort from '@/components/BookResort'
import FooterComponent from '@/components/footer/footer'

export default function page() {
  return (
    <div>
      <HeaderComponent />

      <div className="font-sans">
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{
            backgroundImage: "url(/images/rest.png)",
            backgroundPosition: "center -9%",
          }}
        ></section>
      </div>

      <div className="text-center py-10 bg-white">
        <h1 className="text-4xl font-extrabold text-black">DAY OUT PACKAGE</h1>
        <p className="text-xl text-black mt-2">9.30 AM – 6.00 PM</p>
      </div>

      <div className="font-sans">
        {/* BREAKFAST SECTION */}
        <section className="relative bg-green-100 py-20 px-10 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
               src="/images/breakfast.png"
  alt="Breakfast"
  width={500}
  height={500}
  className="animate-spin"
              />
            </div>

            <div className="w-full md:w-1/2 text-black">
              <h2 className="text-3xl font-extrabold mb-4">BREAKFAST</h2>
              <p className="text-lg leading-relaxed">
                Kick off your morning with a delightful South Indian breakfast at GANDHADAGUDI GARDEN IN BYAHATTI.
                Relish the soft and warm Idlis, crispy Dosa, and mouthwatering sweet,
                all served with tangy Chutney and flavorful Sambar, complemented by a hot cup of Tea.
              </p>
            </div>
          </div>
        </section>

        {/* LUNCH SECTION */}
        <section className="relative bg-green-400 py-20 px-10 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
            <div className="w-full md:w-1/2 text-black">
              <h2 className="text-3xl font-extrabold mb-4">Lunch</h2>
              <p className="text-lg leading-relaxed">
                Experience the flavors of North Karnataka with our special Joldha Roti Uta for lunch at Utsav Rock Garden.
                This traditional feast brings together over 15 delicious items, including Roti and Chapati, two rich Curries, and a refreshing Salad.
                Enjoy the tangy goodness of Pickle and Chutneys, paired with cooling Buttermilk. Relish Jhunka, Vegetables, crispy Bhajjis,
                and comforting Rice with Sambar. For the perfect finish, choose between Curd Rice or Pulav.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                        
  src="/images/image.png"
  alt="Breakfast"
  width={500}
  height={500}
  className="animate-spin"

              />
            </div>
  
  </div>
        </section>
<section className="relative bg-green-300 py-20 px-10 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
               src="/images/snacks.png"
  alt="Breakfast"
  width={500}
  height={500}
  className="animate-out"
              />
            </div>

            <div className="w-full md:w-1/2 text-black">
              <h2 className="text-3xl font-extrabold mb-4">Snacks</h2>
              <p className="text-lg leading-relaxed">
As the evening sets in, we provide a flavorful snack to complete your day at Utsav Rock Garden. Enjoy the bold spice of Hot Mirchi and the crispy, tangy taste of Masala Churmuri, all paired with a refreshing cup of Tea.
              </p>
            </div>
          </div>
        </section>
 <section className="relative bg-green-400 py-20 px-10 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
            <div className="w-full md:w-1/2 text-black">
              <h2 className="text-3xl font-extrabold mb-4">
Juice</h2>
              <p className="text-lg leading-relaxed">
                Quench your thirst with refreshing Kokum Juice, savor the sweetness of ripe Watermelon, and indulge in a flavorful Pan, offering a perfect burst of freshness!
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                        
  src="/images/jucie.png"
  alt="Breakfast"
  width={500}
  height={500}
  className="animate-ping"

              />
            </div>
  
  </div>
        </section>

        <ResortActivitiesComponent/>
        <BookResort/>
        <FooterComponent/>
      </div>
    </div>
  )
}
