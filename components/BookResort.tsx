import React from "react";
import Image from "next/image";
>>>>>>>>> Temporary merge branch 2
export default function BookResort() {
  return (
    <div>
      <section className="bg-[#1E2E1E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">
                BOOK NOW
              </h5>
              <h2 className="text-3xl font-bold mt-2">BOOK RESORT NOW</h2>
              <p className="mt-4">
                For those looking for value, we offer the cheapest GandhadaGudi
                Garden Packages without compromising on quality. Immerse
                yourself in the natural beauty and comfort that only
                GandhadaGudi Garden can provide.
              </p>
              <div className="mt-6 flex items-center">
                <div className="bg-[#8CBF1E] rounded-full p-2 mr-3">
                  <Image
                    src="/images/phone.png"
                    alt="Phone"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <span className="font-bold text-lg">+91 96204 65007</span>
              </div>
            </div>

            <div className="md:w-[500px] bg-[#2A3A2A] p-6 rounded-lg">
              <div className="ml-7 w-[400px] bg-white p-8 text-[#2A3A2A] h-[400px]">
                <div className="flex flex-col items-center">
                  <h1 className="text-4xl md:text-2xl font-serif italic tracking-wide mb-6">OPEN HOURS</h1>

                  <div className="w-32 h-0.5 bg-white mb-8"></div>

                  <div className="w-full grid grid-cols-2 gap-y-2 text-xl md:text-lg mb-8">
                    <div>Monday</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>Tuesday</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>Wednesday</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>Thursday</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>Friday</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>Saturday</div>
                    <div className="text-right">10.30 AM - 6 PM</div>

                    <div>Sunday</div>
                    <div className="text-right">10.30 AM - 6 PM</div>
                  </div>

                  {/* <div className="w-full h-0.5 bg-white mb-8"></div>

                  <h2 className="text-2xl md:text-lg font-serif italic tracking-wide mb-6">Reservations by phone</h2>

                  <div className="text-xl md:text-lg mb-2">+91-8880092222 Museum</div>
                  <div className="text-xl md:text-lg">+91-8527028800 Resort</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
