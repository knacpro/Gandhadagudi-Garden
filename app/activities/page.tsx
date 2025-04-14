
"use client"


import Link from 'next/link';
import BookResort from "@/components/BookResort"
import HeaderComponent from "@/components/header/header"
import Image from "next/image"

export default function Page() {

  return (
<div>
  <HeaderComponent />

    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="text-center bg-cover bg-center text-white py-24 px-5"
        style={{ backgroundImage: "url(/images/nature1.png)" }}
      >
        <h1 className="text-5xl font-bold">Activities</h1>
      </section>

      {/* Introduction Section */}
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
              GandhadaGudi Garden,Byahatti offers an exciting range of outdoor activities perfect for nature lovers and adventure
              seekers. Guests can enjoy thrilling jungle safaris, river rafting, adventure trekking, and bird watching.
              Experience a natural paradise in the heart of nature. For adventure enthusiasts, there's nothing,
              absolutely a thrilled experience in the heart of nature.
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
                src="/images/deer1.png"
                alt="Tiger"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/birds.png"
                alt="Birds"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jungle Safari */}
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/Gym1.png"
              alt="Jungle Safari"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Gym</h3>
            <p className="mt-4 text-gray-700">
              GandhadaGudi Garden GandhadaGudi Garden offers thrilling  A gym is a facility, often indoor, where people can engage in physical exercise and sports using various equipment like weights, machines, and cardio machines
            </p>
            <Link href="/activities/gym">
  <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
    View Details
  </button>
</Link>
          </div>
        </div>
      </section>

      {/* River Rafting */}
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/duckboat.jpg"
              alt="River Rafting"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Boat Riding</h3>
            <p className="mt-4 text-gray-700">
              GandhadaGudi Garden GandhadaGudi Garden provides an exhilarating river rafting experience, letting you conquer the rapids
              while surrounded by stunning natural landscapes - offering the perfect blend of thrill and adventure.
            </p>
            <Link href="/activities/boat-riding">
  <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
    View Details
  </button>
</Link>
          </div>
        </div>
      </section>

      {/* Adventure Trekking */}
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/kayaking1.png"
              alt="Adventure Trekking"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Adventure Kayaking</h3>
            <p className="mt-4 text-gray-700">
              GandhadaGudi Garden GandhadaGudi Garden offers adventure Kayaking involves using a kayak, a narrow boat propelled by a double-bladed paddle, to travel on water. It's a popular water sport enjoyed in various environments like rivers, lakes, and oceans
            </p>
            <Link href="/activities/adventure-kayaking">
  <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
    View Details
  </button>
</Link>

          </div>
        </div>
      </section>

      {/* Bird Watching */}
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/birds2.png"
              alt="Bird Watching"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Bird Watching</h3>
            <p className="mt-4 text-gray-700">
              GandhadaGudi Garden ,Byahatti offers a serene bird watching experience, where nature enthusiasts can spot a variety
              of exotic birds in their natural habitat, surrounded by tranquil forest beauty.
            </p>
            <Link href="/activities/bird-watching">
  <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
    View Details
  </button>
</Link>
          </div>
        </div>
      </section>
    {/* Adventure Trekking */}
    <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/swing.png"
              alt="Adventure Trekking"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Swimming </h3>
            <p className="mt-4 text-gray-700">
              GandhadaGudi Garden GandhadaGudi Garden offers adventure trekking through lush forests and scenic trails. Embark on memorable
              hikes through pristine nature, discover hidden trails, and embrace the GandhadaGudi Garden s.
            </p>
            <Link href="">
  <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
    View Details
  </button>
</Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/horse.png"
              alt="Bird Watching"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Horse Riding</h3>
            <p className="mt-4 text-gray-700">
              GandhadaGudi Garden ,Byahatti offers a serene bird watching experience, where nature enthusiasts can spot a variety
              of exotic birds in their natural habitat, surrounded by tranquil forest beauty.
            </p>
            <Link href="/activities/horse-riding">
  <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
    View Details
  </button>
</Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/raindance.png"
              alt="Adventure Trekking"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Rain Dance</h3>
            <p className="mt-4 text-gray-700">
              GandhadaGudi Garden GandhadaGudi Garden offers adventure trekking through lush forests and scenic trails. Embark on memorable
              hikes through pristine nature, discover hidden trails, and embrace the GandhadaGudi Garden s.
            </p>
            <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
              View Details
            </button>
          </div>
        </div>
      </section>



      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/mane.jpg"
              alt="Bird Watching"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Garadi Mane</h3>
            <p className="mt-4 text-gray-700">
              GandhadaGudi Garden ,Byahatti offers a serene bird watching experience, where nature enthusiasts can spot a variety
              of exotic birds in their natural habitat, surrounded by tranquil forest beauty.
            </p>
            <Link href="/activities/garadi-mane">
  <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
    View Details
  </button>
</Link>


            
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/zipline.png"
              alt="Adventure Trekking"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Zip Line</h3>
            <p className="mt-4 text-gray-700">
              GandhadaGudi Garden GandhadaGudi Garden offers adventure trekking through lush forests and scenic trails. Embark on memorable
              hikes through pristine nature, discover hidden trails, and embrace the GandhadaGudi Garden s.
            </p>
            <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors">
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Activities in GandhadaGudi Garden */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h5 className="text-[#8CBF1E] uppercase text-sm font-medium">ENJOY ULTIMATE ALPINE EXPERIENCES</h5>
          <h2 className="text-3xl font-bold mt-2">ACTIVITIES IN Byahatti</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Activity Card 1 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
            <div className="relative h-48 mb-4">
              <Image
                src="/images/tree.png"
                alt="Adventure Trekking"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold">Tree House</h3>
            <p className="text-sm mt-2 flex-grow">
              Embark on a thrilling adventure through the GandhadaGudi Garden s of Byahatti. Our expert guides will take you through
              the most scenic routes.
            </p>
            <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors self-center">
              View Details
            </button>
          </div>

          {/* Activity Card 2 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
            <div className="relative h-48 mb-4">
              <Image src="/images/cowframing.png" alt="Holi Rain Dance" fill className="object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold">Cow Framing</h3>
            <p className="text-sm mt-2 flex-grow">
              At the GandhadaGudi Garden Jungle Camp, we offer a unique Holi rain dance experience where visitors can enjoy a
              colorful celebration.
            </p>
            <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors self-center">
              View Details
            </button>
          </div>

          {/* Activity Card 3 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
            <div className="relative h-48 mb-4">
              <Image src="/images/firecamp.jpg" alt="Adventure Canyoning" fill className="object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold">Fire Camp</h3>
            <p className="text-sm mt-2 flex-grow">
              The GandhadaGudi Garden Jungle Camp offers canyoning, where you can rappel down waterfalls, jump into pools, and swim
              through gorges.
            </p>
            <button className="mt-4 bg-[#8CBF1E] text-white py-2 px-6 rounded-md hover:bg-[#7aa919] transition-colors self-center">
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Book Resort Now */}
      
<BookResort/>
      
    </div>
    </div>
  )
}
