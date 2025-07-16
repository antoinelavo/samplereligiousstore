import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: '바람의 향기',
      subtitle: 'odorem venti',
      description: '반짝이는 원사로 촘촘히 짜여진 망사의 고급스러움을 느끼실 수 있습니다. 여기에 설명을 적으시면 됩니다.',
      price: '₩45,000',
      backgroundImage: 'images/veil1.jpg'
    },
    {
      id: 2,
      title: '바다의 별',
      subtitle: 'stella maris',
      description: '반짝이는 원사로 촘촘히 짜여진 망사의 고급스러움을 느끼실 수 있습니다. 여기에 설명을 적으시면 됩니다.',
      price: '₩56,000',
      backgroundImage: 'images/veil2.jpg'
    },
    {
      id: 3,
      title: '은총의 시간',
      subtitle: 'gratia hora',
      description: '반짝이는 원사로 촘촘히 짜여진 망사의 고급스러움을 느끼실 수 있습니다. 여기에 설명을 적으시면 됩니다.',
      price: '₩100,000',
      backgroundImage: 'images/veil3.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-stone-50">
      <div className="grid lg:grid-cols-2 max-h-screen">
        
        {/* Text Section */}
        <div className="relative z-10 flex items-center justify-center px-6 py-12 lg:px-12 lg:py-24 bg-gradient-to-br from-stone-50 via-stone-100 to-gray-50">
          <div className="w-full max-w-lg">
            {/* Current Slide Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xs md:text-sm font-medium tracking-[0.3em] text-amber-600 uppercase opacity-0 animate-fade-in-up">
                  {slides[currentSlide].subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 opacity-0 animate-fade-in-up animation-delay-200 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-sm md:text-base text-stone-600 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
                  {slides[currentSlide].description}
                </p>
              </div>
        
              <div className="opacity-0 animate-fade-in-up animation-delay-600">
                <p className="text-xl md:text-2xl font-light text-amber-600">
                  {slides[currentSlide].price}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-800">
                <button className="group relative overflow-hidden bg-amber-600 hover:bg-amber-800 px-6 py-3 md:px-8 md:py-4 text-white font-medium tracking-[0.1em] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer transform">
                  <span className="relative z-10 text-sm md:text-base">제품 보기</span>
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-3 pt-4 opacity-0 animate-fade-in-up animation-delay-1000">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-amber-600 w-8' 
                        : 'bg-stone-300 hover:bg-amber-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative order-first lg:order-last">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-white text-stone-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-white text-stone-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Carousel */}
          <div className="relative h-96 lg:h-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={slide.backgroundImage}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Subtle vignette effect for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-black/5" />
              </div>
            ))}
          </div>

          {/* Slide Number Indicator */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-2 rounded-full text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;