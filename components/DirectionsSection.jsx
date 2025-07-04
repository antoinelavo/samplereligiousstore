import Image from 'next/image'

export default function DirectionsSection() {
  return (
    <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 id="address" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-mt-60">찾아오시는 길</h2>
          <p className="text-sm text-gray-500 mt-2">경기 성남시 분당구 돌마로 75<br />미금프라자 303호</p>

          <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto max-w-[30em]">

          <div className="aspect-square relative bg-gray-200 flex items-center justify-center">
                          <img src="images/address.png" alt="address" />

          </div>
        </div>

      </div>
    </section>
  );
};