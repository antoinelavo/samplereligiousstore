import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: '바람의 향기',
      subtitle: 'odorem venti',
      description: '반짝이는 원사로 촘초히 짜여진 망사의 고급스러움을 느끼실 수 있습니다.',
      price: '₩45,000',
      backgroundImage: '/images/veil1.jpg' // Replace with your actual image path
    },
    {
      id: 2,
      title: '바다의 별',
      subtitle: 'stella maris',
      description: '반짝이는 원사로 촘초히 짜여진 망사의 고급스러움을 느끼실 수 있습니다.',
      price: '₩56,000',
      backgroundImage: '/images/veil2.jpg' // Replace with your actual image path
    },
    {
      id: 3,
      title: '은총의 시간',
      subtitle: 'gratia hora',
      description: '반짝이는 원사로 촘초히 짜여진 망사의 고급스러움을 느끼실 수 있습니다.',
      price: '₩100,000',
      backgroundImage: '/images/veil3.jpg' // Replace with your actual image path
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
    <section className="relative h-screen overflow-hidden bg-white">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            >
              {/* Optional: Add overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-white/0" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            {/* Current Slide Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs md:text-2xl font-light tracking-[0.3em] text-amber-600 uppercase opacity-0 animate-fade-in-up">
                  {slides[currentSlide].subtitle}
                </p>
                <h1 className="text-2xl md:text-7xl lg:text-8xl font-medium tracking-tight text-zinc-900 opacity-0 animate-fade-in-up animation-delay-200">
                  {slides[currentSlide].title}
                </h1>
                <div className="w-24 h-px bg-amber-600/60 opacity-0 animate-fade-in-up animation-delay-400" />
              </div>
              
              <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-600">
                <p className="text-sm md:text-lg font-light leading-loose text-zinc-700 max-w-xl">
                  {slides[currentSlide].description}
                </p>
                <p className="text-sm md:text-xl font-light tracking-wide text-amber-600">
                  {slides[currentSlide].price}
                </p>
              </div>
              
              <div className="flex gap-6 opacity-0 animate-fade-in-up animation-delay-800">
                <button className="group relative overflow-hidden bg-transparent border border-amber-600/80 px-4 py-2 md:px-10 md:py-5 text-lg font-medium tracking-[0.2em] text-amber-600 transition-all duration-700 hover:text-white">
                  <span className="relative z-10 text-sm md:text-lg">제품 보기</span>
                  <div className="absolute inset-0 bg-amber-600 transform -translate-x-full transition-transform duration-700 group-hover:translate-x-0" />
                </button>
                
              </div>
            </div>
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
      `}</style>
    </section>
  );
};

export default HeroCarousel;