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

            <div className="md:w-1/2 bg-[#2A3A2A] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Send A Message</h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 bg-transparent border border-gray-600 rounded text-white"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full p-2 bg-transparent border border-gray-600 rounded text-white"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full p-2 bg-transparent border border-gray-600 rounded text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
