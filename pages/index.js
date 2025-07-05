import React from 'react';

const BarberShopHomepage = () => {
  const barbers = [
    {
      name: "Wet",
      image: "images/Wet.png",
      specialty: "고객님의 멋진 남자가 되어가는 과정, 세심하게 함께 하겠습니다."
    },
    {
      name: "Zet",
      image: "images/Zet.png",
      specialty: "깔끔한 남성상을 지향하며 디자인합니다. 간결하지만 섬세하게, 정성을 다하겠습니다."
    },
    {
      name: "Dean",
      image: "images/Dean.png",
      specialty: "자세한 상담을 통해 고객님의 스타일을 찾아드리고, 찾아주신 만큼 정성을 다해 최고의 서비스로 보답해드리겠습니다."
    },
        {
      name: "Rua",
      image: "images/Rua.png",
      specialty: "스타일의 경계를 두지않고, 고객님 단 한 분 만의 퍼스널스타일을 시현해드립니다."
    }
  ];



  const haircuts = [
  { image: "images/cut1.png", name: "에즈 x 아이롱펌" },
  { image: "images/cut2.png", name: "아이비리그 x 다운펌" },
  { image: "images/cut3.png", name: "세미크롭" },
  { image: "images/cut4.png", name: "크롭 x 다운펌" },
  { image: "images/cut5.png", name: "가일리프 x 다운펌" },
  { image: "images/cut6.png", name: "리젠트 & 숏가일 x 다운펌" },
  { image: "images/cut7.png", name: "댄디리프 x 볼륨매직" },
  { image: "images/cut8.png", name: "가일 x 아이롱펌" }
];

  return (
    <div className="min-h-screen bg-black">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Noto+Sans+KR:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap');
        
        .script-font {
          font-family: 'Dancing Script', cursive;
        }
        
        .serif-font {
          font-family: 'Playfair Display', serif;
        }
        
        .korean-sans {
          font-family: 'Noto Sans KR', sans-serif;
        }
        
        .minimal-btn {
          background: transparent;
          border: 2px solid white;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .minimal-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: white;
          transition: left 0.4s;
          z-index: -1;
        }
        
        .minimal-btn:hover::before {
          left: 0;
        }
        
        .minimal-btn:hover {
          color: black;
        }
        
        .photo-float-1 { transform: rotate(-2deg) translateY(-6px); }
        .photo-float-2 { transform: rotate(1.5deg) translateY(8px); }
        .photo-float-3 { transform: rotate(-1deg) translateY(-3px); }
        
        .photo-float-1:hover { transform: rotate(0deg) translateY(0px) scale(1.03); }
        .photo-float-2:hover { transform: rotate(0deg) translateY(0px) scale(1.03); }
        .photo-float-3:hover { transform: rotate(0deg) translateY(0px) scale(1.03); }
        
        .service-card {
          background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
          border: 1px solid #333;
          transition: all 0.4s ease;
          box-shadow: 0 8px 25px rgba(0,0,0,0.6);
        }
        
        .service-card:hover {
          transform: translateY(-6px) rotate(0.5deg);
          box-shadow: 0 15px 35px rgba(0,0,0,0.8);
          border-color: white;
        }
        
          
      `
      
      }</style>

      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-50 mx-auto px-[2em]">
        <div className="max-w-[1000px] mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <img src="images/mainlogo.png" className="w-[5em]"></img>

            <div className="flex space-x-12 korean-sans text-sm font-medium tracking-wider">
              <a href="https://m.place.naver.com/hairshop/1108637524/stylist?entry=plt" className="text-white hover:text-gray-300 transition-colors duration-300">
                예약하기
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="images/barbershop2.jpeg"
          alt="Barbershop"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
            
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="serif-font text-6xl md:text-6xl font-bold text-white tracking-widest">
            DAVID
          </h2>
          <h2 className="serif-font text-4xl md:text-4xl font-light text-white tracking-tight">
            BARBERSHOP
          </h2>
          <div className="flex items-center justify-center space-x-4 py-4">
            <hr className="flex-grow border-t border-white opacity-50" />
            <span className="serif-font text-sm font-light text-white">
              since 2023
            </span>
            <hr className="flex-grow border-t border-white opacity-50" />
          </div>
        </div>
      </section>

{/* Meet Our Barbers Section */}
<section id="barbers" className="py-24 bg-black">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h3 className="serif-font text-3xl font-light text-white mb-4">
        OUR CREW
      </h3>
      <div className="w-16 h-px bg-white mx-auto"></div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {barbers.map((barber, index) => (
        <div key={index} className="bg-black border border-white max-w-[20em] mx-auto">
          <img 
            src={barber.image} 
            alt={barber.name}
            className="object-cover filter grayscale aspect-[2/3] w-full"
          />
          <div className="p-6">
            <h4 className="serif-font text-xl text-white mb-2">{barber.name}</h4>
            <p className="korean-sans text-gray-400 mb-2">{barber.specialty}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      
      {/* Haircuts Section */}
      <section id="haircuts" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="serif-font text-3xl md:text-3xl font-light text-white mb-4">
              Signature Cuts
            </h3>
            <div className="w-16 h-px bg-white mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {haircuts.map((haircut, index) => (
              <div key={index} className="group">
                <img 
                  src={haircut.image} 
                  alt={haircut.name}
                  className="w-full aspect-square object-cover filter grayscale group-hover:filter-none transition-all duration-300"
                />
                <div className="mt-3 text-center">
                  <p className="korean-sans text-sm text-gray-300">{haircut.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="serif-font text-2xl font-light text-white mb-6">
          Reservations
        </h3>
        <div className="w-16 h-px bg-white mx-auto mb-8"></div>
        <div className="space-y-6 md:space-y-0 md:flex md:justify-center md:space-x-12">
          <div className="text-center">
            <p className="korean-sans text-sm text-gray-500 mb-2">전화 예약</p>
            <a 
              href="tel:02-123-4567" 
              className="serif-font text-xl text-white hover:text-gray-600 transition-colors"
            >
              02-123-4567
            </a>
          </div>
          
          <div className="text-center">
            <p className="korean-sans text-sm text-gray-500 mb-2">온라인 예약</p>
            <a 
              href="https://m.place.naver.com/hairshop/1108637524/stylist?entry=plt" 
              className="serif-font text-md text-white hover:text-gray-600 transition-colors"
            >
              네이버 예약하기
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 mx-auto items-center w-fill">
          <p className="korean-sans text-sm text-gray-500 mb-2">
            영업시간
          </p>
          <p className="serif-font text-md text-white ">
            매일: &nbsp;10 AM - 8 PM
          </p>
          
        </div>
          
        <div className="w-fit mx-auto mt-[4em]">
          <a
            className="text-white hover:text-gray-800 transition mx-auto"
            href="https://www.instagram.com/barbershop__david">
            <svg
              width="24"
              height="24"
              
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mx-auto">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

      </div>
    </section>

    </div>
  );
};

export default BarberShopHomepage;