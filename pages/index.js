import { useState } from 'react'
import React from 'react';
import ServicesSection from '/components/ServicesSection'
import CTASection from "/components/CTASection"
import GreetingSection from "/components/GreetingSection"
import DirectionsSection from '/components/DirectionsSection'
import Testimonials from '/components/Testimonials'


export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="antialiased bg-white font-sans text-gray-900">
      <main className="w-full">
        {/* Header */}
        <header className="sticky top-0 w-full z-50 bg-white shadow-md transition-all duration-300">
          <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
            
            {/* Top bar - hidden on mobile */}
            <div className="hidden md:flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <ul className="flex text-gray-600 text-sm">
                  <li>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24">
                        <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                      </svg>
                      <span className="ml-2">경기 성남시 분당구 돌마로 75 미금프라자 303호</span>
                    </div>
                  </li>
                  <li className="ml-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24">
                        <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                      </svg>
                      <span className="ml-2">0507-1378-2082</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex justify-end text-gray-600 space-x-4">
                  <li><a href="https://blog.naver.com/thetrustdc" className="hover:text-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                      <path d="M19 2H5a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3.5L12 22l3.5-4H19a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z"/>
                    </svg>
                  </a></li>
                  <li><a href="https://www.instagram.com/the_trustdc" target="_blank" className="hover:text-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                      <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                      <circle cx="11.994" cy="11.979" r="3.003" />
                    </svg>
                  </a></li>
                </ul>
              </div>
            </div>

            {/* Main navigation */}
            <div className="flex flex-wrap items-center justify-between py-4">
              <div className="w-1/2 md:w-auto">
                <a href="/" className="text-gray-800 font-bold text-2xl">
                  서울더믿음치과의원
                </a>
              </div>

              <button 
                className="md:hidden block text-gray-800"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>

              <div className={`${menuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
                <nav className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                  <ul className="md:flex items-center">
                    <li><a className="py-2 inline-block text-gray-700 md:hidden lg:block font-semibold hover:text-orange-500 transition-colors" href="#services">진료과목</a></li>
                    <li className="md:ml-6"><a className="py-2 inline-block text-gray-700 md:px-2 font-semibold hover:text-orange-500 transition-colors" href="#aboutus">의료진 소개</a></li>
                    <li className="md:ml-6"><a className="py-2 inline-block text-gray-700 md:px-2 font-semibold hover:text-orange-500 transition-colors" href="#appointments">진료 예약</a></li>
                    <li className="md:ml-6 md:hidden lg:block"><a className="py-2 inline-block text-gray-700 md:px-2 font-semibold hover:text-orange-500 transition-colors" href="#address">찾아오시는 길</a></li>
                    <li className="md:ml-6"><a className="py-2 inline-block text-gray-700 md:px-2 font-semibold hover:text-orange-500 transition-colors" href="#contact">연락처</a></li>
                    <li className="md:ml-6 mt-3 md:mt-0">
                      <a className="inline-block font-semibold px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 transition-colors border rounded-lg shadow-md hover:shadow-lg" href="https://booking.naver.com/booking/13/bizes/441989?tr=bnm">
                        진료 예약하기
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32 flex items-center min-h-screen overflow-hidden">
          
          {/* Background Image */}
          <img 
            src="/images/lobby.jpeg" 
            alt="Dental office background" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-slate-600 opacity-80 z-5"></div>
          
          <div className="w-full text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                서울더믿음치과의원
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl leading-snug mb-8">
                마음에 믿음을 심는 전문의료진의 따뜻하고 세심한 치과치료
              </p>
              <a href="https://booking.naver.com/booking/13/bizes/441989?tr=bnm" className="inline-block px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                진료 예약하기
              </a>
            </div>
          </div>
        </section>

        <ServicesSection />

        {/* Doctor Section - Image and text swapped */}
        <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:-mx-8">
            
            {/* Doctor Information - Now on left */}
            <div className="w-full lg:w-1/2 lg:px-8 text-center lg:text-left mb-8 lg:mb-0">
              <div className="max-w-lg mx-auto lg:mx-0">
                
                <div className="mb-6">
                  <h2 id="aboutus" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 scroll-mt-60">정지원</h2>
                  <p className="text-xl font-semibold text-orange-600 mb-1">대표원장</p>
                  <p className="text-lg text-gray-600">치과 보철과 전문의</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">주요 경력</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>서울대 치의학전문대학원 임플란트 코스 수료</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>미국 하버드대학교 임플란트 수술 과정</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>미국 보스턴 MGH 병원 임플란트 보철 과정</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>오스템 임플란트 임상지도의, 자문위원</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>최소침습 IBS 임플란트 자문위원</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Doctor Image - Now on right */}
            <div className="w-full lg:w-1/2 lg:px-8">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-[4/5] relative rounded-xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <img 
                    src="/images/dentist1.png" 
                    alt="dentist1" 
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                  />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-gray-600 to-orange-500 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Doctor Section - Image and text swapped */}
        <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:-mx-8">
            
            {/* Doctor Information - Now on left */}
            <div className="w-full lg:w-1/2 lg:px-8 text-center lg:text-left mb-8 lg:mb-0">
              <div className="max-w-lg mx-auto lg:mx-0">
                
                <div className="mb-6">
                  <h2 id="aboutus" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 scroll-mt-60">최은혜</h2>
                  <p className="text-xl font-semibold text-orange-600 mb-1">대표원장</p>
                  <p className="text-lg text-gray-600">치과 통합치의학 전문의</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">주요 경력</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>서울대 치의학대학원 박사</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>서울대 치의학교육연수원 발치와연수회</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>미국 Columbia University Implant Course</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>대한심미치과학회 정회원</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>대한레이저치의학회 정회원</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Doctor Image - Now on right */}
            <div className="w-full lg:w-1/2 lg:px-8">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-[4/5] relative rounded-xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <img 
                    src="/images/dentist2.png" 
                    alt="dentist1" 
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                  />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-gray-600 to-orange-500 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <GreetingSection />
        <CTASection />
        <Testimonials />
        <DirectionsSection />

        {/* Footer */}
        <footer id="contact" className="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
          <div className="flex flex-col md:flex-row">
            <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
              <h3 className="font-bold text-2xl">서울더믿음치과의원</h3>
            </div>

            <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
              <h5 className="uppercase tracking-wider font-semibold text-gray-400">진료과목</h5>
              <ul className="mt-4">
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">구강악안면외과</div></li>
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">구강내과</div></li>
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">구강병리과</div></li>
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">소아치과</div></li>
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">영상치의학과</div></li>
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">예방치과</div></li>
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">치과보존과</div></li>
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">치과보철과</div></li>
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">치주과</div></li>
                <li className="mt-2"><div className="opacity-75 hover:opacity-100 hover:text-orange-400 transition-colors">통합치의학과</div></li>
              </ul>
            </div>
            
            <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
              <ul className="mt-4 space-y-4">
                <li>
                  <div className="block flex items-center opacity-75 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-500">
                      <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                    </svg>
                    <span className="ml-3">경기 성남시 분당구 돌마로 75 미금프라자 303호</span>
                  </div>
                </li>
                <li>
                  <div className="block flex items-center opacity-75 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-500">
                      <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                      <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                    </svg>
                    <span className="ml-3">평일 : 오전 9:30 - 오후 6:30</span>
                  </div>
                </li>
                <li>
                  <div className="block flex items-center opacity-75 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-500">
                      <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                      <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                    </svg>
                    <span className="ml-3">토요일 : 오전 9:30 - 오후 2:00</span>
                  </div>
                </li>
                <li>
                  <div className="block flex items-center opacity-75 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-500">
                      <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                      <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                    </svg>
                    <span className="ml-3">휴게시간 : 오후 1:00 - 오후 2:00</span>
                  </div>
                </li>
                <li>
                  <a href="tel:0507-1378-2082" className="block flex items-center opacity-75 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-500">
                      <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414L8.586 3.172a.999.999 0 0 0-1.414 0L5.636 4.708c-.395.395-.408.972-.03 1.378.27.29.635.706.906 1.26C7.18 9.146 9.354 11.32 11.154 13.12s3.974 3.974 5.774 4.642c.554.271.97.636 1.26.906.406.378.983.365 1.378-.03l1.536-1.536a.999.999 0 0 0 0-1.414l-3.121-3.121-.274-.274z"/>
                    </svg>
                    <span className="ml-3">0507-1378-2082</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
