// pages/item/[slug].js
import { useState } from 'react';
import Link from 'next/link';
import ScrollHeader from '@/components/Header'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import PaymentButton from '@/components/PaymentButton';


export default function ItemPage({ item }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!item) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Item not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
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
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Image thumbnails */}
          {item.images.length > 1 && (
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
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
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Additional details - Commented out for now */}
          {/*
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
          </div>
          */}

          {/* Price section */}
          <div className="flex justify-center mt-[3em]">
            <div className="mx-auto text-center">
              <h3 className="text-lg font-semibold mb-2">Price</h3>
              <p className="text-gray-600">₩{item.price || 'Out of Stock'}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <PaymentButton item={item} />
        </div>

        {/* Description Image */}
        {item.descriptionImage && (
          <div id="detailsPage" className="max-w-[1000px] mt-[6em] mx-auto">
            <img
              src={item.descriptionImage}
              alt={`${item.name} - Product Details`}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </main>
    </div>
      <Footer/>
    </>
  );
}

// Generate static paths for all items
export async function getStaticPaths() {
  try {
    // Fetch all items from Supabase to generate paths
    const { data: items, error } = await supabase
      .from('items')
      .select('name')
      .order('name');

    if (error) {
      console.error('Error fetching items for paths:', error);
      return {
        paths: [],
        fallback: 'blocking'
      };
    }

    // Generate paths using item names as slugs (converted to lowercase with spaces as hyphens)
    const paths = items.map((item) => ({
      params: { 
        slug: item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      }
    }));

    return {
      paths,
      fallback: 'blocking' // Generate pages on-demand for items not in paths
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: 'blocking'
    };
  }
}

// Generate static props for each item
export async function getStaticProps({ params }) {
  const { slug } = params;
  
  try {
    // Convert slug back to potential item name variations for matching
    const searchTerms = [
      slug,
      slug.replace(/-/g, ' '),
      slug.charAt(0).toUpperCase() + slug.slice(1),
      slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    ];

    // Try to find the item using multiple search strategies
    let item = null;
    let itemData = null;

    // First try exact name matches (case insensitive)
    for (const term of searchTerms) {
      const { data, error } = await supabase
        .from('items')
        .select('*, descriptionImage')
        .ilike('name', term)
        .limit(1);

      if (!error && data && data.length > 0) {
        itemData = data[0];
        break;
      }
    }

    // If no exact match, try partial matches
    if (!itemData) {
      const { data, error } = await supabase
        .from('items')
        .select('*, descriptionImage')
        .ilike('name', `%${slug.replace(/-/g, ' ')}%`)
        .limit(1);

      if (!error && data && data.length > 0) {
        itemData = data[0];
      }
    }

    if (!itemData) {
      return {
        notFound: true
      };
    }

    // Process images: main image, hover image, then additional images
    const images = [];
    
    // Add main image if it exists
    if (itemData.image) {
      images.push(itemData.image);
    }
    
    // Add hover image if it exists and is different from main image
    if (itemData.hoverImage && itemData.hoverImage !== itemData.image) {
      images.push(itemData.hoverImage);
    }
    
    // Add additional images if they exist
    if (itemData.additionalImages) {
      try {
        const additionalImages = typeof itemData.additionalImages === 'string' 
          ? JSON.parse(itemData.additionalImages)
          : itemData.additionalImages;
        
        if (Array.isArray(additionalImages)) {
          images.push(...additionalImages);
        }
      } catch (error) {
        console.error('Error parsing additional images:', error);
      }
    }

    // If no images at all, add a placeholder
    if (images.length === 0) {
      images.push('/images/placeholder.jpg'); // Make sure you have a placeholder image
    }

    // Transform the data for the component
    item = {
      id: itemData.id,
      name: itemData.name,
      slug: slug,
      description: itemData.description || 'No description available',
      images: images,
      price: itemData.price || 'Contact for price',
      category: itemData.category,
      subcategory: itemData.subcategory,
      descriptionImage: itemData.descriptionImage || null
    };

    return {
      props: {
        item
      },
      // Revalidate every hour (3600 seconds)
      revalidate: 3600
    };

  } catch (error) {
    console.error('Error fetching item data:', error);
    return {
      notFound: true
    };
  }
}