// pages/item/[slug].js
import { useState } from 'react';
import Link from 'next/link';
import ScrollHeader from '@/components/Header'
import Footer from '@/components/Footer'

export default function ItemPage({ item }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <>
    <ScrollHeader/>
    <div className="min-h-screen bg-white">
      {/* Main content */}
      <main className="px-6 pb-12 pt-[3em]">
        <div className="max-w-6xl mx-auto">
          {/* Item title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
              {item.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {item.description}
            </p>
          </div>

          {/* Main image display */}
          <div className="mb-8">
            <div className="relative aspect-[1.5/1] max-w-3xl mx-auto bg-gray-100 overflow-hidden">
              <img
                src={item.images[selectedImage]}
                alt={`${item.name} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Image thumbnails */}
          <div className="flex justify-center gap-4 mb-12">
            {item.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 aspect-[1.5/1] overflow-hidden border-2 transition-all duration-200 ${
                  selectedImage === index 
                    ? 'border-black scale-105' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img
                  src={image}
                  alt={`${item.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Additional details */}
        <div className="w-fit mx-auto p-[2em]">
            <div className="max-w-3xl mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Material</h3>
                    <p className="text-gray-600">{item.material || 'Premium Quality'}</p>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Size</h3>
                    <p className="text-gray-600">{item.size || 'Standard'}</p>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Color</h3>
                    <p className="text-gray-600">{item.color || 'Natural'}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[3em]">
                <div className="mx-auto text-center">
                    <h3 className="text-lg font-semibold mb-2">Price</h3>
                    <p className="text-gray-600">{item.price || 'Out of Stock'}</p>
                </div>
            </div>
        </div>

    </div>



        <div className="flex justify-center mt-[5em]">
            <a href="https://smartstore.naver.com/out_of_place" className="border border-gray-400 p-[1em] text-2xl">
            Buy now
            </a>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}

// Generate static paths for all items
export async function getStaticPaths() {
  // This would typically come from your database or CMS
  const items = [
    { slug: 'corgi' },
    { slug: 'pommy' },
    { slug: 'poodle' },
  ];

  const paths = items.map((item) => ({
    params: { slug: item.slug }
  }));

  return {
    paths,
    fallback: false // or 'blocking' if you want to generate pages on-demand
  };
}

// Generate static props for each item
export async function getStaticProps({ params }) {
  const { slug } = params;
  
  // This would typically fetch from your database or CMS
  const items = {
    corgi: {
      name: "Corgi",
      slug: "corgi",
      description: "Adorable corgi with short legs and big personality. Perfect companion for any home.",
      images: [
        "/images/shelf/main1.jpeg",
        "/images/shelf/front1.jpeg", 
        "/images/shelf/closeup1.jpeg",
        "/images/shelf/back1.jpeg",
        "/images/shelf/main1B.jpeg"
      ],
      material: "Acrylic",
      size: "Medium",
      color: "Orange & White",
      price: "10,000 KRW"
    },
    pommy: {
      name: "Pommy", 
      slug: "pommy",
      description: "Fluffy pomeranian with luxurious coat and charming smile.",
      images: [
        "/images/shelf/main2.jpeg",
        "/images/shelf/front2.jpeg",
        "/images/shelf/closeup2.jpeg", 
        "/images/shelf/back2.jpeg",
        "/images/shelf/main2B.jpeg"
      ],
      material: "Acrylic",
      size: "Small",
      color: "Golden Brown",
      price: "10,000 KRW"

    },
    poodle: {
      name: "Poodle",
      slug: "poodle", 
      description: "Elegant poodle with curly coat and sophisticated demeanor.",
      images: [
        "/images/shelf/main3.jpeg",
        "/images/shelf/front3.jpeg",
        "/images/shelf/closeup2.jpeg",
        "/images/shelf/back3.jpeg", 
        "/images/shelf/main3B.jpeg"
      ],
      material: "Acrylic",
      size: "Large", 
      color: "White",
      price: "10,000 KRW"

    }
  };

  const item = items[slug];

  if (!item) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      item
    }
  };
}

