export default function CTASection() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-20 lg:py-32 bg-gradient-to-br from-slate-700 to-gray-800">
      <div className="absolute inset-0 opacity-10">
        <img 
            src="/images/lobby.jpeg" 
            alt="Dental office background" 
            fill
            className="object-cover opacity-90"
            priority
        />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        <h2 id="appointments" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight scroll-mt-60">
          건강한 미소를 위한<br />
          <span className="text-orange-400">첫 걸음을 시작하세요</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
          전문적인 진료와 정성스러운 케어로
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          여러분의 구강건강을 책임지겠습니다
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-white">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base">당일 진료 가능</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base">첨단 장비 완비</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base">2명의 전문의</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://booking.naver.com/booking/13/bizes/326974" 
                className="group relative inline-flex items-center px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[200px] justify-center">
            <span className="mr-3">진료 예약하기</span>
          </a>
        </div>
      </div>
    </section>
  );
};