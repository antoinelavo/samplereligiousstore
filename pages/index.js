import React, { useState, useEffect } from 'react';

// ==========================================
// CONFIGURATION - EDIT THESE VALUES FOR EACH CLINIC
// ==========================================
const CLINIC_CONFIG = {
  // Clinic Basic Info
  clinicName: "향기로운치과의원",
  clinicSubtitle: "안전하고 믿음직한 진료를 원칙으로 합니다.",
  
  // Contact Information
  phone: "031-715-4212",
  address: "경기 성남시 분당구 돌마로 75 미금프라자 5층",
  
  // Social Media URLs
  instagramUrl: "https://www.instagram.com/clinic_instagram",
  blogUrl: "https://blog.naver.com/clinic_blog",
  youtubeUrl: "https://youtube.com/clinic_channel",
  kakaoTalkUrl: "https://pf.kakao.com/_XYqhs",
  
  // Booking & External Links
  bookingUrl: "https://booking.naver.com/booking/13/bizes/1242506",
  
  // Operating Hours
  weekdayHours: "평일 : 오전 9:30 - 오후 6:30",
  saturdayHours: "토요일 : 오전 9:30 - 오후 2:30",
  lunchHours: "휴게시간 : 오후 1:00 - 오후 2:00",
  
  // Doctor Information
  doctorName: "전상섭",
  doctorTitle: "대표원장",
  // doctorSpecialty: "내과 전문의",

  // Doctor Information 2
  doctorName2: "이애주",
  doctorTitle2: "대표원장",
  // doctorSpecialty2: "내과 전문의",
  
  // Hero Images (multiple images for carousel)
  heroImages: [
    "/images/clinic-hero-1.jpg",
    "/images/clinic-hero-2.jpg", 
    "/images/clinic-hero-3.jpg",
    "/images/clinic-hero-4.jpg"
  ],
  
  // Other Images
  doctorImage: "/images/doctor.jpg",
  doctorImage2: "/images/doctor2.jpg",
  mapImage: "/images/clinic-map.png"
};

// ==========================================
// HEADER COMPONENT
// ==========================================
const Header = ({ clinicName, bookingUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Bar - Contact Info */}
        <div className={`hidden lg:flex justify-between items-center py-3 border-b transition-colors duration-300 text-sm ${
          isScrolled ? 'border-gray-200' : 'border-white/20'
        }`}>
          <div className={`flex items-center space-x-6 transition-colors duration-300 ${
            isScrolled ? 'text-gray-600' : 'text-white/80'
          }`}>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{CLINIC_CONFIG.address}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{CLINIC_CONFIG.phone}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href={CLINIC_CONFIG.instagramUrl} className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-400 hover:text-teal-500' : 'text-white/60 hover:text-teal-400'
            }`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024v-6.989h-2.335v-4.035h2.335V9.31c0-2.32 1.382-3.596 3.485-3.596.955 0 1.956.171 1.956.171v2.149H11.94c-1.08 0-1.423.671-1.423 1.353v1.624h2.478l-.396 4.035h-2.082v6.989C18.963 21.404 22.122 17.066 22.122 11.987 22.122 5.367 16.755.001 12.017.001z"/>
              </svg>
            </a>
            <a href={CLINIC_CONFIG.blogUrl} className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-400 hover:text-teal-500' : 'text-white/60 hover:text-teal-400'
            }`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-3">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>{clinicName}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className={`font-medium transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white/90 hover:text-teal-300'
            }`}>진료과목</a>
            <a href="#doctor" className={`font-medium transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white/90 hover:text-teal-300'
            }`}>의료진</a>
            <a href="#testimonials" className={`font-medium transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white/90 hover:text-teal-300'
            }`}>후기</a>
            <a href="#location" className={`font-medium transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white/90 hover:text-teal-300'
            }`}>오시는길</a>
            <a href="#contact" className={`font-medium transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white/90 hover:text-teal-300'
            }`}>연락처</a>
            <a 
              href={bookingUrl} 
              className="bg-purple-800 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              예약하기
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/20 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-black/90 hover:text-teal-300 font-medium transition-colors">진료과목</a>
              <a href="#doctor" className="text-black/90 hover:text-teal-300 font-medium transition-colors">의료진</a>
              <a href="#testimonials" className="text-black/90 hover:text-teal-300 font-medium transition-colors">후기</a>
              <a href="#location" className="text-black/90 hover:text-teal-300 font-medium transition-colors">오시는길</a>
              <a href="#contact" className="text-black/90 hover:text-teal-300 font-medium transition-colors">연락처</a>
              <a 
                href={bookingUrl} 
                className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-teal-600 transition-all text-center"
              >
                예약하기
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// ==========================================
// HERO COMPONENT WITH HORIZONTAL SCROLLING IMAGES
// ==========================================
const HeroSection = ({ clinicName, clinicSubtitle, bookingUrl, heroImages }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Horizontal Scroll */}
      <div className="absolute inset-0 z-0">
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ 
            transform: `translateX(-${currentImage * 100}%)`,
            width: `${heroImages.length * 100}%`
          }}
        >
          {heroImages.map((image, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <img 
                src={image} 
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-indigo-800/60 to-teal-700/70"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slideInUp tracking-wide">
          {clinicName}
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl mb-12 text-teal-200 animate-slideInUp animation-delay-300 font-light">
          {clinicSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideInUp animation-delay-600">
          <a 
            href={bookingUrl} 
            className="group relative bg-gradient-to-r from-purple-600 to-teal-500 text-white px-10 py-5 rounded-full text-xl font-medium hover:from-purple-700 hover:to-teal-600 transform hover:scale-110 transition-all duration-400 shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10">진료 예약하기</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          </a>
          <a 
            href="#services" 
            className="group border-2 border-white/50 text-white px-10 py-5 rounded-full text-xl font-light hover:bg-white/10 backdrop-blur-sm transition-all duration-400"
          >
            <span className="group-hover:text-teal-200 transition-colors">진료과목 보기</span>
          </a>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-teal-400 scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-8 animate-bounce">
        <div className="writing-mode-vertical text-white/60 text-sm font-light tracking-widest">
          더보기
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent mx-auto mt-2"></div>
      </div>
    </section>
  );
};

// ==========================================
// SERVICES COMPONENT
// ==========================================
const ServicesSection = () => {
  const services = [
    {
    icon: "🦷",
    title: "임플란트",
    description: "플라즈마 레이저 임플란트 시술",
    features: ["플라즈마 레이저 시술", "빠른 회복", "정밀 안전성 검사"],
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: "😁",
    title: "교정치료",
    description: "돌출입, 무턱, 소아 교정",
    features: ["돌출입 교정", "무턱 교정", "소아 교정"],
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    icon: "🤕",
    title: "턱관절 치료",
    description: "부정교합 및 턱관절 장애 치료",
    features: ["두통·안면통 완화", "턱관절 소리 치료", "턱 통증 관리"],
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: "😴",
    title: "수면 클리닉",
    description: "코골이 및 수면무호흡증 치료",
    features: ["코골이 검사", "이갈이·이악물기", "맞춤형 수면장치"],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: "💉",
    title: "스플린트 & 보톡스",
    description: "턱관절 보호장치 및 저작근 보톡스 시술",
    features: ["맞춤형 스플린트", "저작근 보톡스", "통증 완화"],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: "✨",
    title: "미백치료",
    description: "치아 및 잇몸 미백",
    features: ["치아미백", "잇몸미백", "보호제 코팅"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: "🔬",
    title: "레이저 치료",
    description: "잇몸 및 신경 레이저 치료",
    features: ["물방울 레이저 잇몸치료", "레이저 신경치료"],
    gradient: "from-pink-500 to-red-600"
  },
  {
    icon: "🔪",
    title: "수술 및 발치",
    description: "3D CT 촬영 기반 사랑니 및 매복치 발치",
    features: ["3차원 CT 촬영", "사랑니 발치", "매복치 발치"],
    gradient: "from-gray-500 to-gray-600"
  },
  {
    icon: "🛠️",
    title: "충치 및 보철",
    description: "충치 치료 및 보철 시술",
    features: ["레진 치료", "크라운", "지르코니아 인레이"],
    gradient: "from-yellow-500 to-amber-600"
  },
  {
    icon: "👶",
    title: "소아진료",
    description: "어린이 충치 및 예방 치료",
    features: ["충치 치료", "크라운", "불소 도포", "실란트"],
    gradient: "from-teal-500 to-green-600"
  }
];

    // {
    //   icon: "🏥",
    //   title: "내과",
    //   description: "일반내과 진료 및 건강검진",
    //   features: ["정기검진", "성인병 관리", "예방접종"],
    //   gradient: "from-purple-500 to-indigo-600"
    // },
    // {
    //   icon: "❤️",
    //   title: "순환기내과",
    //   description: "심장 및 혈관계 질환 전문진료",
    //   features: ["심전도 검사", "혈압 관리", "콜레스테롤 관리"],
    //   gradient: "from-indigo-500 to-blue-600"
    // },
    // {
    //   icon: "🫁",
    //   title: "호흡기내과",
    //   description: "폐 및 호흡기계 질환 진료",
    //   features: ["폐기능 검사", "천식 치료", "금연 클리닉"],
    //   gradient: "from-blue-500 to-cyan-600"
    // },
    // {
    //   icon: "🧠",
    //   title: "신경과",
    //   description: "신경계 질환 전문 진료",
    //   features: ["두통 치료", "어지럼증", "수면장애"],
    //   gradient: "from-cyan-500 to-teal-600"
    // },
    // {
    //   icon: "🦴",
    //   title: "정형외과",
    //   description: "근골격계 질환 진료",
    //   features: ["관절염 치료", "스포츠 손상", "물리치료"],
    //   gradient: "from-teal-500 to-green-600"
    // },
    // {
    //   icon: "👁️",
    //   title: "안과",
    //   description: "눈 건강 전문 진료",
    //   features: ["시력 교정", "백내장", "녹내장 검사"],
    //   gradient: "from-green-500 to-emerald-600"
    // }

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-900 mb-6">진료과목</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            최고의 의료진과 최신 장비로 환자 중심의 진료를 제공합니다
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-200 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// DOCTOR PROFILE COMPONENT
// ==========================================
const DoctorSection = ({ doctorName, doctorTitle, doctorSpecialty, doctorImage }) => {
  const qualifications = [
    "한국대학교 치의과대학 졸업",
    "한국대학교 인턴 수료",
    "한국대학교 치과 프로그램 수료"
  ];

  return (
    <section id="doctor" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-600 to-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-600 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-900 mb-6">의료진 소개</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Doctor Information */}
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h3 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-4">{doctorName}</h3>
                <p className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 mb-2">{doctorTitle}</p>
                <p className="text-xl text-gray-600 font-light">{doctorSpecialty}</p>
              </div>

              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed font-light">
                  환자 중심의 진료 철학을 바탕으로 정확한 진단과 효과적인 치료를 제공하고 있습니다. 
                  지속적인 연구와 학습을 통해 최신 의료 기술을 도입하여 
                  환자분들께 최상의 의료 서비스를 제공하겠습니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-indigo-50/50 rounded-2xl p-8">
                <h4 className="text-xl font-medium text-gray-900 mb-6">주요 경력</h4>
                <ul className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-700 font-light leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={doctorImage} 
                    alt={`${doctorName} ${doctorTitle}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-purple-400 rounded-full blur-xl opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// ==========================================
// DOCTOR PROFILE COMPONENT
// ==========================================
const SecondDoctorSection = ({ doctorName2, doctorTitle2, doctorSpecialty2, doctorImage2 }) => {
  const qualifications = [
    "한국대학교 치의과대학 졸업",
    "한국대학교 인턴 수료",
    "한국대학교 치과 프로그램 수료"
  ];

  return (
    <section id="doctor2" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-600 to-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-600 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-900 mb-6">의료진 소개</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Doctor Information */}
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h3 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-4">{doctorName2}</h3>
                <p className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 mb-2">{doctorTitle2}</p>
                <p className="text-xl text-gray-600 font-light">{doctorSpecialty2}</p>
              </div>

              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed font-light">
                  환자 중심의 진료 철학을 바탕으로 정확한 진단과 효과적인 치료를 제공하고 있습니다. 
                  지속적인 연구와 학습을 통해 최신 의료 기술을 도입하여 
                  환자분들께 최상의 의료 서비스를 제공하겠습니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-indigo-50/50 rounded-2xl p-8">
                <h4 className="text-xl font-medium text-gray-900 mb-6">주요 경력</h4>
                <ul className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-700 font-light leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={doctorImage2} 
                    alt={`${doctorName2} ${doctorTitle2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-purple-400 rounded-full blur-xl opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



// ==========================================
// CTA COMPONENT
// ==========================================
const CTASection = ({ bookingUrl }) => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-teal-700">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white max-w-5xl mx-auto">
          
          <h2 className="text-5xl md:text-7xl font-extralight mb-8 leading-tight">
            건강한 내일을 위한<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-200">첫 걸음을 시작하세요</span>
          </h2>
          
          <p className="text-2xl md:text-3xl mb-6 text-purple-100 font-light">
            전문 의료진의 정확한 진단과 치료로
          </p>
          <p className="text-xl md:text-2xl mb-16 text-teal-200 font-light">
            여러분의 건강을 책임지겠습니다
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
            <div className="flex items-center text-white group">
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-200"></div>
              <span className="text-lg font-light">당일 진료 가능</span>
            </div>
            <div className="flex items-center text-white group">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-200"></div>
              <span className="text-lg font-light">최신 의료 장비</span>
            </div>
            {/* <div className="flex items-center text-white group">
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-200"></div>
              <span className="text-lg font-light">전문의 직접 진료</span>
            </div> */}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={bookingUrl} 
              className="group relative bg-gradient-to-r from-teal-500 to-purple-600 text-white px-12 py-6 rounded-full text-xl font-medium hover:from-teal-400 hover:to-purple-500 transform hover:scale-110 transition-all duration-400 shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">지금 예약하기</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </a>
            <a 
              href={`tel:${CLINIC_CONFIG.phone}`} 
              className="group border-2 border-white/30 text-white px-12 py-6 rounded-full text-xl font-light hover:bg-white/10 backdrop-blur-sm transition-all duration-400"
            >
              <span className="group-hover:text-teal-200 transition-colors">전화 상담</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// TESTIMONIALS COMPONENT
// ==========================================
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "김민*",
      treatment: "정기검진",
      rating: 5,
      text: "정기검진으로 방문했는데 꼼꼼하고 친절한 진료에 감동했습니다. 의료진 분들이 환자 입장에서 세심하게 배려해주셔서 편안하게 검진받을 수 있었어요."
    },
    {
      name: "이서*",
      treatment: "내과진료",
      rating: 5,
      text: "오랫동안 고민이었던 증상을 정확히 진단해주시고 친절하게 설명해주셔서 정말 감사했습니다. 치료 후 많이 좋아졌어요. 믿고 다닐 수 있는 병원이에요."
    },
    {
      name: "박지*",
      treatment: "건강검진",
      rating: 5,
      text: "건강검진 받으러 갔는데 시설도 깨끗하고 직원분들도 모두 친절하셨어요. 결과 상담도 자세히 해주시고 앞으로 관리 방법까지 알려주셔서 만족합니다."
    },
    {
      name: "최수*",
      treatment: "순환기내과",
      rating: 5,
      text: "고혈압 관리 때문에 방문했는데 원장님께서 생활습관부터 약물치료까지 체계적으로 관리해주십니다. 덕분에 혈압이 많이 안정되었어요."
    },
    {
      name: "윤정*",
      treatment: "호흡기내과",
      rating: 5,
      text: "천식으로 고생하다가 이곳에서 치료받고 있는데 증상이 많이 호전되었습니다. 의료진의 전문성과 따뜻한 진료에 감사드려요."
    },
    {
      name: "한민*",
      treatment: "신경과",
      rating: 5,
      text: "두통으로 힘들어하다가 정확한 진단과 치료를 받을 수 있었습니다. 설명도 이해하기 쉽게 해주시고 치료 효과도 좋아서 추천하고 싶어요."
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-900 mb-6">환자 후기</h2>
          <p className="text-xl text-gray-600 font-light">저희 병원에서 치료받으신 환자분들의 생생한 후기입니다</p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-8 font-light italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <div className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-full text-xs font-medium">
                      {testimonial.treatment}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// DIRECTIONS COMPONENT
// ==========================================
const DirectionsSection = ({ mapImage, address }) => {
  return (
    <section id="location" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-900 mb-6">오시는 길</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="mb-12 text-center space-y-4">
          <p className="text-gray-600 text-lg font-light">
            {address}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-indigo-100/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-1/1 relative">
              <img 
                src={mapImage} 
                alt="병원 위치 지도" 
                className="w-full h-full object-cover"
              />

            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

// ==========================================
// FOOTER COMPONENT
// ==========================================
const Footer = ({ clinicName, phone, address, weekdayHours, saturdayHours, lunchHours }) => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Clinic Info */}
          <div>
            <h3 className="text-3xl font-light mb-6">{clinicName}</h3>
            <p className="text-purple-200 mb-6 font-light leading-relaxed">
              환자 중심의 진료 철학으로<br />
              건강한 삶을 지원합니다
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-medium mb-6 text-teal-300">연락처</h4>
            <div className="space-y-4">
              <div className="flex items-start group">
                <svg className="w-6 h-6 text-teal-400 mr-4 mt-1 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-purple-200 font-light leading-relaxed">{address}</span>
              </div>
              
              <div className="flex items-center group">
                <svg className="w-6 h-6 text-teal-400 mr-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={`tel:${phone}`} className="text-purple-200 hover:text-white transition-colors font-light">
                  {phone}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-medium mb-6 text-teal-300">진료시간</h4>
            <div className="space-y-3 font-light text-purple-200">
              <p>{weekdayHours}</p>
              <p>{saturdayHours}</p>
              <p>{lunchHours}</p>
              <p className="text-teal-300 font-medium">일요일 · 공휴일 휴진</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function KoreanClinicTemplate() {
  useEffect(() => {
    // Add custom CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .animate-slideInUp {
        animation: slideInUp 0.8s ease-out forwards;
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.4s ease-out;
      }
      
      .animation-delay-300 {
        animation-delay: 0.3s;
        opacity: 0;
      }
      
      .animation-delay-600 {
        animation-delay: 0.6s;
        opacity: 0;
      }
      
      .writing-mode-vertical {
        writing-mode: vertical-rl;
        text-orientation: mixed;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f5f9;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #8b5cf6, #14b8a6);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #7c3aed, #0d9488);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        clinicName={CLINIC_CONFIG.clinicName} 
        bookingUrl={CLINIC_CONFIG.bookingUrl} 
      />
      
      <HeroSection 
        clinicName={CLINIC_CONFIG.clinicName}
        clinicSubtitle={CLINIC_CONFIG.clinicSubtitle}
        bookingUrl={CLINIC_CONFIG.bookingUrl}
        heroImages={CLINIC_CONFIG.heroImages}
      />
      
      <ServicesSection />
      
      <DoctorSection 
        doctorName={CLINIC_CONFIG.doctorName}
        doctorTitle={CLINIC_CONFIG.doctorTitle}
        doctorSpecialty={CLINIC_CONFIG.doctorSpecialty}
        doctorImage={CLINIC_CONFIG.doctorImage}
      />

      <SecondDoctorSection 
        doctorName2={CLINIC_CONFIG.doctorName2}
        doctorTitle2={CLINIC_CONFIG.doctorTitle2}
        doctorSpecialty2={CLINIC_CONFIG.doctorSpecialty2}
        doctorImage2={CLINIC_CONFIG.doctorImage2}
      />
      
      <CTASection bookingUrl={CLINIC_CONFIG.bookingUrl} />
      
      <TestimonialsSection />
      
      <DirectionsSection 
        mapImage={CLINIC_CONFIG.mapImage}
        address={CLINIC_CONFIG.address}
      />
      
      <Footer 
        clinicName={CLINIC_CONFIG.clinicName}
        phone={CLINIC_CONFIG.phone}
        address={CLINIC_CONFIG.address}
        weekdayHours={CLINIC_CONFIG.weekdayHours}
        saturdayHours={CLINIC_CONFIG.saturdayHours}
        lunchHours={CLINIC_CONFIG.lunchHours}
      />
    </div>
  );
}