import Link from 'next/link'
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-20 lg:py-32 overflow-hidden"
             style={{background: 'linear-gradient(135deg, rgba(49, 130, 206, 1) 0%, rgba(56, 178, 172, 1) 100%)'}}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image 
            src="images/lobby.jpeg" 
            alt="Dental office background" 
            fill
            className="object-cover opacity-90"
            priority
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* Main Heading */}
        <h2 id="appointments" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight scroll-mt-36">
          건강한 미소를 위한<br />
          <span className="text-teal-200">첫 걸음을 시작하세요</span>
        </h2>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed">
          전문적인 진료와 정성스러운 케어로
        </p>
        <p className="text-lg md:text-xl text-blue-200 mb-12 leading-relaxed">
          여러분의 구강건강을 책임지겠습니다
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-white">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-teal-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base">당일 진료 가능</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-teal-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base">첨단 장비 완비</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-teal-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base">20년 경력 전문의</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Primary CTA Button */}
          <Link href="https://booking.naver.com/booking/13/bizes/326974" 
                className="group relative inline-flex items-center px-8 py-4 bg-white text-black-600 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 min-w-[200px] justify-center">
            <span className="mr-3">진료 예약하기</span>
          </Link>
          
          {/* Secondary CTA Button
          <Link href="tel:" 
                className="group inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold text-lg border-2 border-white rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 min-w-[200px] justify-center">
            <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>전화 상담</span>
          </Link> */}
          
        </div>
    
        
      </div>
      
    </section>
  )
}