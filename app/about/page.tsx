// import Image from "next/image";
// import Link from "next/link";
// import { Instagram, Phone, MessageCircle } from "lucide-react";

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       {/* Top Info Bar */}
//       <div className="bg-black/80 text-white py-2 px-4 flex justify-between items-center">
//         <div className="flex items-center space-x-6 text-sm">
//           <div className="flex items-center">
//             <span>TEL: +91 96204 65007</span>
//           </div>
//           <div className="hidden sm:flex items-center">
//             <span>info@wildernessdandeli.com</span>
//           </div>
//         </div>
//         <Link href="#" aria-label="Instagram">
//           <Instagram className="h-5 w-5" />
//         </Link>
//       </div>

//       {/* Main Navigation */}
//       <header className="absolute w-full z-10 h-32">
//         <div className="container mx-auto px-4 py-4 h-full">
//           <div className="flex items-center h-full">
//             <Link
//               href="/"
//               className="relative flex items-center w-full h-full"
//             ></Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative h-screen w-full">
//         {/* Background Image */}
//         <Image
//           src="/images/aboutus-background.jpg" // Use your real image path here
//           alt="Dandeli Forest View"
//           fill
//           priority
//           className="object-cover z-0"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/30 z-10"></div>

//         {/* Hero Content */}
//         <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
//           <h1 className="text-5xl md:text-7xl font-light tracking-wider mt-16">
//             ABOUT US
//           </h1>
//           <p className="text-xl md:text-2xl mt-4 font-bold">
//             Welcome to Gandhadagudi Garden
//           </p>
//         </div>
//       </section>

//       {/* Welcome Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h2 className="text-green-600 font-medium mb-2">WELCOME TO</h2>
//               <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
//                 ಗಂಧದಗುಡಿ ಗಾರ್ಡನ್
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 🌿 Nestled in the serene village of Byahatti, Gandhadagudi
//                 Garden offers a peaceful escape from the hustle of city life.
//                 Surrounded by lush greenery, our garden is a perfect blend of
//                 natural beauty and modern amenities. Whether you're planning a
//                 weekend getaway or a family outing, we’ve got everything to make
//                 your stay memorable. Enjoy comfortable accommodations, a variety
//                 of indoor and outdoor games, and exciting activities like horse
//                 riding, all in the lap of nature.
//               </p>
//               <p className="text-gray-600">
//                 At Gandhadagudi Garden, we aim to provide an authentic
//                 countryside experience with warm hospitality and fun-filled
//                 adventure. Come, relax, and reconnect with nature — the village
//                 way 🌿🏡.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <Image
//                 src="/images/aboutus-welcomebk.jpg"
//                 alt="Resort Activity"
//                 width={300}
//                 height={400}
//                 className="w-full h-auto object-cover rounded-lg"
//               />
//               <Image
//                 src="/images/aboutus-welcomebk1.jpg"
//                 alt="Adventure Activity"
//                 width={300}
//                 height={400}
//                 className="w-full h-auto object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* services offered Section */}

//       <section className="px-4 py-12 md:px-16 bg-white">
//         <h4 className="text-sm font-semibold text-green-700 uppercase mb-2">
//           Discover the Services We Offered
//         </h4>
//         <h2 className="text-3xl font-semibold text-gray-800 mb-8">
//           Resort Facilities
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Images */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="relative h-64 md:h-auto w-full md:w-1/2 rounded-xl overflow-hidden">
//               <Image
//                 src="/images/room.jpg" // replace with your actual path or serve from public
//                 alt="Resort Room"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative h-64 md:h-auto w-full md:w-1/2 rounded-xl overflow-hidden">
//               <Image
//                 src="/images/exterior.jpg" // replace with your actual path or serve from public
//                 alt="Resort Exterior"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating Contact Buttons */}
//       <div className="fixed right-4 bottom-4 flex flex-col gap-2 z-50">
//         <Link
//           href="#"
//           className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
//           aria-label="WhatsApp"
//         >
//           <MessageCircle className="h-6 w-6" />
//         </Link>
//         <Link
//           href="#"
//           className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
//           aria-label="Call"
//         >
//           <Phone className="h-6 w-6" />
//         </Link>
//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Phone,
  MessageCircle,
  Car,
  Wifi,
  Bed,
  Waves,
  ShowerHead,
  ScrollText,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top Info Bar */}
      <div className="bg-black/80 text-white py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center">
            <span>TEL: +91 96204 65007</span>
          </div>
          <div className="hidden sm:flex items-center">
            <span>info@wildernessdandeli.com</span>
          </div>
        </div>
        <Link href="#" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </Link>
      </div>

      {/* Header */}
      <header className="absolute w-full z-10 h-32">
        <div className="container mx-auto px-4 py-4 h-full">
          <div className="flex items-center h-full">
            <Link
              href="/"
              className="relative flex items-center w-full h-full"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/images/aboutus-background.jpg"
          alt="Dandeli Forest View"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mt-16">
            ABOUT US
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-bold">
            Welcome to Gandhadagudi Garden
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-green-600 font-medium mb-2">WELCOME TO</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                ಗಂಧದಗುಡಿ ಗಾರ್ಡನ್
              </h3>
              <p className="text-gray-600 mb-4">
                🌿 Nestled in the serene village of Byahatti, Gandhadagudi
                Garden offers a peaceful escape from the hustle of city life.
                Surrounded by lush greenery, our garden is a perfect blend of
                natural beauty and modern amenities.
              </p>
              <p className="text-gray-600">
                At Gandhadagudi Garden, we aim to provide an authentic
                countryside experience with warm hospitality and fun-filled
                adventure. Come, relax, and reconnect with nature — the village
                way 🌿🏡.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/aboutus-welcomebk.jpg"
                alt="Resort Activity"
                width={300}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                src="/images/aboutus-welcomebk1.jpg"
                alt="Adventure Activity"
                width={300}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resort Facilities Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Images */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src="/images/resort-facility.jpg"
                  alt="Resort room interior"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src="/images/resort-facility2.jpg"
                  alt="Resort exterior with greenery"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-green-600 font-medium uppercase tracking-wider text-sm md:text-base">
                  Discover the Services We Offer
                </h3>
                <h2 className="text-3xl md:text-5xl font-serif mt-2 text-gray-800">
                  Our Garden Facilities
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Car className="w-6 h-6" />,
                    title: "Traditional Countryside Stay",
                    desc: "Comfortable cottages or huts built with rustic aesthetics—mud walls, thatched or tiled roofs.",
                  },
                  {
                    icon: <ShowerHead className="w-6 h-6" />,
                    title: "Indoor & Outdoor Games",
                    desc: "Volleyball, cricket, carrom, badminton, chess, or even traditional Indian games like lagori or gilli-danda.",
                  },
                  {
                    icon: <Wifi className="w-6 h-6" />,
                    title: "Outdoor Adventure Activities",
                    desc: "Horse riding, bullock cart rides, zip-lining, archery, or nature trails through nearby farms or forest paths.",
                  },
                  {
                    icon: <ScrollText className="w-6 h-6" />,
                    title: "Bonfire & Cultural Nights",
                    desc: "Evening bonfires with light music, local folk dance and Optional camping under the stars.",
                  },
                  {
                    icon: <Bed className="w-6 h-6" />,
                    title: "Home-style Organic Dining",
                    desc: "Fresh, locally-sourced meals cooked in traditional village style—served in banana leaves or terracotta plates.",
                  },
                  {
                    icon: <Waves className="w-6 h-6" />,
                    title: "Natural Swimming Pond or Eco Pool",
                    desc: "A nature-themed pool with safety arrangements, surrounded by greenery. Relaxing, eco-friendly, and refreshing.",
                  },
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-green-600 bg-green-100 p-2 rounded-full">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-2 z-50">
        <Link
          href="#"
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
          aria-label="Call"
        >
          <Phone className="h-6 w-6" />
        </Link>
      </div>
    </main>
  );
}
