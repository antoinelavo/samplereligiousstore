import React from 'react';
import ScrollHeader from '@/components/Header'
import Items from '@/components/Items'
import Footer from '@/components/Footer'

const ShelfPage = () => {
  const shelves = [
    {
      name: "Corgi",
      image: "images/shelf/front1.jpeg",
      description: "This is a very cool corgi and it does things that corgis do",
      price: "KRW 10,000"
    },
    {
      name: "Pommy",
      image: "images/shelf/front2.jpeg",
      description: "This is a very cool pommy and it does things that pommies do",
      price: "KRW 10,000"

    },
    {
      name: "Poodle",
      image: "images/shelf/front3.jpeg",
      description: "This is a very cool poodle and it does things that poodles do",
      price: "KRW 10,000"
    },
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
      <ScrollHeader/>

      {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="images/background1.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0">
          <img
            src="images/border.png"
            alt="border image"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
            
      </section>

      {/* Items Section */}
        <Items 
          items={shelves}
          sectionId="shelves"
        />

      

      {/* Footer */}
      <Footer 
        companyName="Out of Place Object"
        founder="김종원, 조현흠"
        phone="02-0000-0000"
        businessNumber="000-0000-0000"
        address="성남시 분당구"
        email="contact@opo.kr"
      />
    </div>
  );
};

export default ShelfPage;