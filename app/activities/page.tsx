"use client";

import Link from 'next/link';
import BookResort from "@/components/BookResort";
import HeaderComponent from "@/components/header/header";
import Image from "next/image";
import FooterComponent from '@/components/footer/footer';
import ResortActivitiesComponent from '@/components/Resort';
import SocialMediaFloatingIcons from '@/components/home/SocialMediaFloatingIcons';

export default function Page() {
  const activities = [
    {
      title: "Gym",
      description: "Our fully-equipped gym provides guests with the opportunity to stay active even during their retreat. Enjoy cardio, strength training, and relaxation in a serene setting.",
      image: "/images/gym2.png",
      link: "/activities/gym",
    },
    {
      title: "Garadi Mane",
      description: "Garadi Mane is a sanctuary of strength, discipline, and heritage. Rooted in the rich traditions of Indian wrestling and martial arts, our space helps you connect with ancient fitness techniques passed down through generations.",
      image: "/images/gardi10.png",
      link: "/activities/garadi-mane",
    },
    {
      title: "Boat Riding",
      description: "Experience the calmness of water with our boat riding adventure. Whether you're looking for a peaceful ride or a splash of fun, this activity is a must-do!",
      image: "/images/boat10.png",
      link: "/activities/boat-riding",
    },
    {
      title: "Adventure Kayaking",
      description: "Paddle your way through nature's beauty with our kayaking sessions. Perfect for beginners and pros alike, enjoy the thrill and serenity of water adventures.",
      image: "/images/kaya2.png",
      link: "/activities/adventure-kayaking",
    },
    {
      title: "Bird Watching",
      description: "Delight in spotting rare and exotic birds in their natural habitat. Our lush gardens offer the perfect peaceful environment for bird lovers.",
      image: "/images/birds8.png",
      link: "/activities/bird-watching",
    },
    {
      title: "Swimming",
      description: "Take a dip in our clean, spacious swimming area perfect for families, friends, or solo relaxation under the sun.",
      image: "/images/swing9.png",
      link: "/activities/swimming",
    },
    {
      title: "Zipline Adventure",
      description: "Feel the rush of adrenaline as you zip across breathtaking landscapes. Perfect for thrill-seekers of all ages looking for an unforgettable adventure.",
      image: "/images/zipline8.png",
      link: "/activities/zip-line",
    },
    {
      title: "Horse Riding",
      description: "Ride across green fields and scenic trails with our trained horses. A perfect blend of nature and traditional adventure.",
      image: "/images/hourse6.png",
      link: "/activities/horse-riding",
    },
    {
      title: "Rain Dance",
      description: "Feel the beat and dance under artificial rain with music and lighting for a party-like outdoor vibe.",
      image: "/images/rain8.png",
      link: "/activities/rain-dance",
    },
    {
      title: "Goat Farm",
      description: "Visit our friendly goats at the farm – a great experience for kids and families to interact with nature and animals up close.",
      image: "/images/goat1.png",
      link: "/activities/goat-farm",
    },
    {
      title: "Poultry",
      description: "Learn about and explore the poultry section where you can see hens, ducks, and more in a farm-like environment.",
      image: "/images/hen.png",
      link: "/activities/poultry",
    },
    {
      title: "Rabbit",
      description: "Meet our adorable rabbits in the garden! Perfect for children and animal lovers to interact in a gentle and playful way.",
      image: "/images/rabbit10.png",
      link: "/activities/rabbit",
    },
    {
      title: "Lawn Garden",
      description: "Relax and unwind in our beautifully maintained lawn gardens, ideal for picnics, photography, or peaceful walks.",
      image: "/images/lawn5.png",
      link: "/activities/lawn-garden",
    },
    {
      title: "Small Tractor Riding",
      description: "Kids and adults alike enjoy our fun and safe tractor ride experiences across scenic farm trails.",
      image: "/images/tarotor4.png",
      link: "/activities/small-tractor-riding",
    },
    {
      title: "Deer Farm",
      description: "Get close to nature and see our gentle deer in their peaceful environment, perfect for wildlife enthusiasts and photographers.",
      image: "/images/deer13.png",
      link: "/activities/deer-park",
    },
    {
      title: "Kids Zone",
      description: "Get close to nature and see our gentle deer in their peaceful environment, perfect for wildlife enthusiasts and photographers.",
      image: "/images/kids2.png",
      link: "/activities/kids-zone",
    },
  ];

  return (
    <div className="bg-green-100">
      <HeaderComponent />

      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="text-center bg-cover bg-center text-white py-40 px-5"
          style={{ backgroundImage: "url(/images/nature1.png)" }}
        >
          <h1 className="text-5xl font-bold">Activities</h1>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">Activities</h5>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2">
                EXPERIENCE NATURE'S FINEST
                <br />
                WITH GandhadaGudi Garden ACTIVITIES
              </h2>
              <p className="mt-4 text-gray-700">
                GandhadaGudi Garden, Byahatti offers an exciting range of outdoor and indoor activities perfect for nature
                lovers, families, and adventure seekers. Dive into unforgettable experiences surrounded by serene landscapes,
                animals, games, and much more.
              </p>
              <div className="mt-6 flex items-center">
                <div className="bg-[#8CBF1E] rounded-full p-2 mr-3">
                  <Image src="/images/phone.png" alt="Phone" width={24} height={24} />
                </div>
                <span className="font-bold text-lg">+91 96204 65007</span>
              </div>
            </div>
            <div className="md:w-1/2 flex gap-4">
              <div className="w-1/2">
                <Image
                  src="/images/pic2.png"
                  alt="Deer"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/peackcock.png"
                  alt="Birds"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Activity Cards */}
        {activities.map((activity, idx) => (
          <section key={idx} className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-8 items-center`}>
              <div className="md:w-1/2">
                <div className="w-full rounded-lg overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={800}
                    height={500}
                    layout="responsive"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold">{activity.title}</h3>
                <p className="mt-4 text-gray-700">{activity.description}</p>
                <Link href={activity.link}>
                  <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* Resort Carousel */}
        <ResortActivitiesComponent />
      </div>

      <BookResort />
      <FooterComponent />
      <SocialMediaFloatingIcons />
    </div>
  );
}