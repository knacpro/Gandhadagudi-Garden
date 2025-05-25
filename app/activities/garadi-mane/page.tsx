import React from 'react';
import Image from 'next/image';
import BookResort from '@/components/BookResort';
import HeaderComponent from "@/components/header/header";
import ResortActivitiesComponent from '@/components/home/ResortActivities';
import FooterComponent from '@/components/footer/footer';

export default function GaradiManePage() {
  return (
    <div>
      <HeaderComponent />
      <div className="font-sans">
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/garadi.png)" }}
        >
          <h1 className="text-5xl font-bold">Garadi Mane</h1>
        </section>

        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Traditional Fitness</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                EMBRACE THE WARRIOR SPIRIT<br />
                AT GARADI MANE
              </h2>
              <p className="mt-4 text-gray-700">
                Garadi Mane is a sanctuary of strength, discipline, and heritage. Rooted in the rich traditions of Indian wrestling and martial arts, our space helps you connect with ancient fitness techniques passed down through generations.
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
                  src="/images/kusti2.png"
                  alt="Garadi Training"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/kusti1.png"
                  alt="Traditional Wrestling"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Traditional Wrestling */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/garadimane1.png"
              alt="Traditional Wrestling"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Traditional Wrestling (Kusti)</h3>
              <p className="text-gray-700">
                Learn the ancient art of Kusti – Indian wrestling – from seasoned Gurus in a traditional mud akhada. Strength, agility, and discipline are the pillars of this practice.
              </p>
            </div>
          </div>

          {/* 2. Malkhamb Practice */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Malkhamb Training</h3>
              <p className="text-gray-700">
                Aerial strength and balance come together in the traditional sport of Malkhamb. Train your body using ropes and poles to master control and flexibility.
              </p>
            </div>
            <Image
              src="/images/kusti3.png"
              alt="Malkhamb Practice"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* 3. Warrior Conditioning */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/garadimane-2.png"
              alt="Warrior Training"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h3 className="text-2xl font-semibold mb-4">Warrior Conditioning</h3>
              <p className="text-gray-700">
                Push your limits with traditional conditioning using gada (mace), danda (clubs), and other ancient equipment designed for full-body strength and endurance.
              </p>
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
        src="https://www.youtube.com/embed/SuvAYVuNQ5E?si=5KgwDgIRjsCWODnG"
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
        {/* Booking Section */}
        <BookResort />
        <FooterComponent/>
      </div>
    </div>
    
  );
}
