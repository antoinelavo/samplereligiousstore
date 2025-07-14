import React from 'react';
import ScrollHeader from '@/components/Header'
import Items from '@/components/Items'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'

const fetchData = async () => {
  const { data, error } = await supabase
    .from('items')
    .select('*')
  
  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Data:', data)
  }
}



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
      <Footer/>
    </div>
  );
};

fetchData();
export default ShelfPage;
