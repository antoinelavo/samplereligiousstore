import Image from 'next/image'

export default function DirectionsSection() {
  return (
    <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="address" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-mt-24">찾아오시는 길</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>


          {/* Map Image */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto max-w-[30em]">
              <div className="aspect-square relative">
                <Image 
                  src="images/directions.png" 
                  alt="병원 위치 지도" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
            
              </div>
            </div>

      </div>
    </section>
  )
}