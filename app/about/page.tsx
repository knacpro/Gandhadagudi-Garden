import Image from "next/image";
import Link from "next/link";
import { Instagram, Phone, MessageCircle } from "lucide-react";

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

      {/* Main Navigation */}
      <header className="absolute w-full z-10 h-32">
        <div className="container mx-auto px-4 py-4 h-full">
          <div className="flex items-center h-full">
            <Link
              href="/"
              className="relative flex items-center w-full h-full"
            ></Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src="/images/aboutus-background.jpg" // Use your real image path here
          alt="Dandeli Forest View"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Hero Content */}
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
                natural beauty and modern amenities. Whether you're planning a
                weekend getaway or a family outing, we’ve got everything to make
                your stay memorable. Enjoy comfortable accommodations, a variety
                of indoor and outdoor games, and exciting activities like horse
                riding, all in the lap of nature.
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

      {/* services offered Section */}

      <section className="px-4 py-12 md:px-16 bg-white">
        <h4 className="text-sm font-semibold text-green-700 uppercase mb-2">
          Discover the Services We Offered
        </h4>
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Resort Facilities
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Images */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative h-64 md:h-auto w-full md:w-1/2 rounded-xl overflow-hidden">
              <Image
                src="/images/room.jpg" // replace with your actual path or serve from public
                alt="Resort Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-auto w-full md:w-1/2 rounded-xl overflow-hidden">
              <Image
                src="/images/exterior.jpg" // replace with your actual path or serve from public
                alt="Resort Exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Facilities */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <FacilityItem
              icon={<Car className="h-5 w-5 text-green-700" />}
              title="Airport Pick-up Service"
              description="Convenient airport transfers for stress-free arrivals."
            />
            <FacilityItem
              icon={<Sparkles className="h-5 w-5 text-green-700" />}
              title="Housekeeper Services"
              description="Daily housekeeping ensures a clean, comfortable stay."
            />
            <FacilityItem
              icon={<Wifi className="h-5 w-5 text-green-700" />}
              title="Wifi & Internet"
              description="Stay connected with complimentary high-speed internet."
            />
            <FacilityItem
              icon={<WashingMachine className="h-5 w-5 text-green-700" />}
              title="Laundry Services"
              description="On-site laundry services for your convenience."
            />
            <FacilityItem
              icon={<BedDouble className="h-5 w-5 text-green-700" />}
              title="Breakfast in Bed"
              description="Enjoy delicious breakfast served in your room."
            />
            <FacilityItem
              icon={<SwimmingPool className="h-5 w-5 text-green-700" />}
              title="Swimming Pool"
              description="Refresh and unwind in our scenic swimming pool."
            />
          </div> */}
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
