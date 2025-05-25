import { Train, Plane, Triangle } from "lucide-react"

export default function DistancePlacesComponent() {
  return (
    <div className="w-full p-8 bg-green-100">
      {/* Main heading */}
      <div className="mb-8">
        <h1 className="text-green-700 text-4xl font-bold mb-2">Distance From Places</h1>
        <div className="w-24 h-1 bg-green-400"></div>
      </div>

      {/* Railway Station and Airport sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Nearest Railway Station */}
        <div className="bg-green-600 bg-opacity-20 p-6 rounded">
          <div className="flex items-center gap-3 mb-4">
            <Train className="text-white w-8 h-8" />
            <h2 className="text-white text-2xl font-bold">Nearest Railway Station</h2>
          </div>
          <div className="w-full h-px bg-white mb-4"></div>
          <div className="flex justify-between">
            <span className="text-white text-lg">Hubballi - 18 Kms</span>
            <span className="text-white text-lg">Dharwad - 27 Kms</span>
          </div>
        </div>

        {/* Nearest Airport */}
        <div className="bg-green-600 bg-opacity-20 p-6 rounded">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="text-white w-8 h-8" />
            <h2 className="text-white text-2xl font-bold">Nearest Airport</h2>
          </div>
          <div className="w-full h-px bg-white mb-4"></div>
          <div className="flex justify-between">
            <span className="text-white text-lg">Hubballi - 24 Kms</span>
            <span className="text-white text-lg">Belgaum - 145 Kms</span>
          </div>
        </div>
      </div>

      {/* Utsav Rock Garden section */}
      <div className="mt-8">
        <div className="flex items-center gap-3 mb-6">
          <Triangle className="text-green-900 w-8 h-8 fill-current" />
          <h2 className="text-green-700 text-2xl font-bold">Gandhadagudi Garden distance from Prominent places</h2>
        </div>
        <div className="w-full h-px bg-green-600 mb-6"></div>

        {/* Distance grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          <span className="text-black text-lg">Hubballi - 18 Kms</span>
          <span className="text-black text-lg">Dharwad - 25 Kms</span>
          <span className="text-black text-lg">Navalgund - 22 Kms</span>
          <span className="text-black text-lg">Gadag - 56 Kms</span>
          <span className="text-black text-lg">Savadatti - 53 Kms</span>
          <span className="text-black text-lg">Haveri - 91 Kms</span>
          <span className="text-black text-lg">Belgaum - 102 Kms</span>
          <span className="text-black text-lg">Davangere - 165 Kms</span>
        </div>
      </div>
    </div>
  )
}
