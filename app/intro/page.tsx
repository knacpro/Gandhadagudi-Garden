import React from "react";
import Image from "next/image";

const GandhadaGudiPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6 text-gray-800">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🌿 Gandhada Gudi Garden & Farmhouse</h1>
        <p className="text-lg">
          <strong>Founder & Owner:</strong> Shivanand Karigar <br />
          <strong>Titles:</strong> Kannada Kesari, President – Zilla Panchayat
        </p>
      </section>

      <section className="mb-8">
        <Image
          src="/your-image-path.jpg"
          alt="Gandhada Gudi Garden"
          width={1000}
          height={500}
          className="rounded-2xl shadow-lg mx-auto"
        />
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">🌟 About the Project</h2>
          <p>
            Gandhada Gudi Garden & Farmhouse is a visionary eco-tourism and rural development
            initiative founded by Shivanand Karigar, affectionately known as Kannada Kesari...
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
            <strong>Phone:</strong> [Add contact number] <br />
            <strong>Email:</strong> [Add official email] <br />
            <strong>Website:</strong> [To be updated]
          </p>
        </div>
      </section>
    </main>
  );
};

export default GandhadaGudiPage;
