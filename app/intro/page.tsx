import BookResort from '@/components/BookResort';
import FooterComponent from '@/components/footer/footer';
import HeaderComponent from '@/components/header/header';
import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <div className="bg-green-100">
      <HeaderComponent />

      {/* Banner Section */}
      <section
        className="text-center bg-cover bg-center text-white py-40 px-5"
        style={{ backgroundImage: "url(/images/resort.png)" }}
      >
        <h1 className="text-5xl font-bold">Introduction</h1>
      </section>

      {/* Profile Section */}
      <div
        className=" text-white px-8 py-10 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/bg-pattern.png)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between gap-10 items-start">
          {/* Left: Main Content */}
          <main className="flex-1 text-gray-800    shadow-md">
            <section className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-2">🌿 Gandhada Gudi Garden & Farmhouse</h1>
              <p className="text-lg">
                <strong>Founder & Owner:</strong> Shivanand Karigar <br />
                <strong>Titles:</strong> Kannada Kesari, President – Zilla Panchayat
              </p>
            </section>

            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">🌟 About the Project</h2>
                <p>
                  Gandhada Gudi Garden & Farmhouse is a visionary eco-tourism and rural development initiative founded by Shivanand Karigar, affectionately known as Kannada Kesari...
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">🏡 Vision & Purpose</h2>
                <p>
                  The core idea behind Gandhada Gudi is to establish a tourist destination close to home...
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">🌳 Eco-Tourism & Green Development</h2>
                <p>
                  The farmhouse is named Gandhada Gudi, inspired by Karnataka’s cultural identity...
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">🐄 Livelihood & Rural Training Hub</h2>
                <ul className="list-disc ml-5">
                  <li>Dairy farming (cow and goat care, milking, feeding)</li>
                  <li>Sheep and poultry farming</li>
                  <li>Organic agriculture using natural fertilizers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">🧘 Wellness Through Tradition</h2>
                <p>
                  A unique highlight is the Garadi Mane, a traditional gym where physical training meets holistic health...
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">🏊 Safe & Clean Water Activities</h2>
                <p>
                  To address the risks of drowning in village ponds, a secure swimming pool has been constructed...
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">🎓 Hands-On Education</h2>
                <ul className="list-disc ml-5">
                  <li>Dairy and livestock management</li>
                  <li>Poultry and sheep farming</li>
                  <li>Organic farming techniques</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">📈 Community Impact</h2>
                <ul className="list-disc ml-5">
                  <li>Reducing travel distances for tourism</li>
                  <li>Creating jobs and skill-building opportunities</li>
                  <li>Supporting sustainable agriculture and eco-awareness</li>
                  <li>Enhancing rural lifestyle and wellness</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">📞 Contact Information</h2>
                <p>
                  <strong>Owner:</strong> Shivanand Karigar <br />
                  <strong>Title:</strong> Kannada Kesari, President – Zilla Panchayat <br />
                  <strong>Location:</strong> Near Hubli – Dharwad – Gadag – Navalgund – Bijapur <br />
                  <strong>Project Name:</strong> Gandhada Gudi Garden & Farmhouse <br />
                </p>
              </div>
            </section>
          </main>

          {/* Right: Small Owner Photo */}
          <div className="w-full md:w-72 flex justify-center-safe md:justify-end">
            <Image
              src="/images/shivanad.png"
              alt="Owner Shivanand Karigar"
              width={250}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
<BookResort/>
        <FooterComponent />
      </div>
    </div>
  );
}
