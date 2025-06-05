"use client"
import BookResort from "@/components/BookResort";
import FooterComponent from "@/components/footer/footer";
import HeaderComponent from "@/components/header/header";
import SocialMediaFloatingIcons from "@/components/home/SocialMediaFloatingIcons";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="w-full bg-green-100">
        <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <div className="max-w-6xl space-y-12 py-10 mx-auto px-4">

        <h1 className="text-5xl font-bold text-center mt-32 text-[#2a2626]">
          🌿 Explore Our Latest Blog Posts 🌿
        </h1>

        <div className="space-y-16">
          <BlogCard
            title="Discover the Beauty of Gandhagudi Garden"
            description="Step into Gandhagudi Garden—a serene paradise where the rustle of leaves, chirping birds, and the fragrance of blooming flora welcome you. Tucked away from the noise of urban life, this lush haven is a perfect blend of nature's elegance and peaceful retreat.

Wander through vibrant flower trails, relax under ancient banyan trees, or simply breathe in the fresh, unpolluted air. Whether you're looking for quiet introspection or soulful connection with nature, Gandhagudi offers an immersive experience.

But it's not just about the greenery—our garden is a celebration of life. From morning yoga sessions and birdwatching zones to cozy cottages nestled in nature's lap, every element is crafted to help you slow down, reconnect, and recharge.

🌿 Come, experience Gandhagudi—where every path leads to peace."
            image="/images/bullock-kart.png"
            alt="Gandhagudi Garden"
          />

          <BlogCard
            title="Top 5 Outdoor Activities to Try at Gandhagudi"
            description="At Gandhagudi Garden, adventure blends seamlessly with nature. Whether you're a thrill-seeker or a calm explorer, we've got something for everyone. Here are the top 5 outdoor experiences you shouldn't miss:

1 - Horse Riding – Saddle up for a scenic ride through the garden. Perfect for both beginners and seasoned riders, it's a journey that feels straight out of a storybook. 

2-Archery & Outdoor Games – Sharpen your aim and have some competitive fun with our outdoor activity zone designed for all ages.

3-Riverside Picnic & Kayaking – Take a slow float along our calm river bend or enjoy a peaceful riverside picnic with birdsong as your soundtrack.

4-Ready for adventure? Gandhagudi isn't just a place—it's an experience."
            image="/images/kayaking.png"
            alt="Outdoor Activities"
          />

          <BlogCard
            title="Sustainable Living at Gandhagudi Garden"
            description="At Gandhagudi Garden, nature is not just admired — it's respected and protected. Sustainability is the heart of everything we do. From eco-friendly architecture to mindful daily practices, we believe in giving back to the land that gives us so much.

Here's how we're making a difference:

1- Eco-Conscious Stays – Our cottages and guest spaces are designed with locally sourced materials, natural ventilation, and minimal environmental impact.

2- Waste Not, Want Not – We practice zero-waste principles by composting kitchen scraps, recycling materials, and reducing single-use plastics.

3- Water Wisdom – Rainwater harvesting and low-flow fixtures help us preserve every drop of water.

4- Farm-to-Table Freshness – Our organic garden provides fresh, seasonal produce for guests — a true taste of sustainability.

5- Wildlife-Friendly Zones – Our garden is a safe haven for birds, butterflies, and small wildlife, helping biodiversity thrive naturally.

6- At Gandhagudi, sustainability isn't a trend — it's a way of life. Come live it with us."
            image="/images/lawn-garden.png"
            alt="Sustainable Practices"
          />
        </div>
      </div>

      {/* Full-width footer */}
      <div className="w-full mt-20">
        <BookResort />
        <FooterComponent />
      </div>
      <SocialMediaFloatingIcons />
    </div>
  );
}

function BlogCard({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={alt}
          width={600}
          height={350}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-6 md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#3a3a3a]">{title}</h2>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
