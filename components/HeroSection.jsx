import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const HeroSection = ({ 
  pageName, 
  title = null, 
  subtitle = null, 
  fallbackImage = "/images/background1.jpeg",
  showOverlay = true,
  className = "" 
}) => {
  const [heroImage, setHeroImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        setLoading(true);
        console.log(`Fetching hero image for page: ${pageName}`);

        const { data, error } = await supabase
          .from('hero_sections')
          .select('image_url')
          .eq('page_name', pageName)
          .single();

        if (error) {
          // If no hero image found for this page, use fallback
          if (error.code === 'PGRST116') {
            console.log(`No hero image found for ${pageName}, using fallback`);
            setHeroImage(fallbackImage);
          } else {
            throw error;
          }
        } else {
          console.log(`Hero image found for ${pageName}:`, data.image_url);
          setHeroImage(data.image_url);
        }
        
        setError(null);
      } catch (error) {
        console.error('Error fetching hero image:', error);
        setError(error.message);
        setHeroImage(fallbackImage); // Use fallback on error
      } finally {
        setLoading(false);
      }
    };

    if (pageName) {
      fetchHeroImage();
    } else {
      // If no pageName provided, use fallback immediately
      setHeroImage(fallbackImage);
      setLoading(false);
    }
  }, [pageName, fallbackImage]);

  return (
    <section className={`relative min-h-[50svh] flex items-center justify-center ${className}`}>
      {/* Hero Image */}
      <div className="absolute inset-0">
        {loading ? (
          // Loading state - show fallback with loading indicator
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-white text-lg">Loading...</div>
          </div>
        ) : (
          <img
            src={heroImage || fallbackImage}
            alt={`${pageName || 'Hero'} background`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // If image fails to load, use fallback
              console.log('Hero image failed to load, using fallback');
              e.target.src = fallbackImage;
            }}
          />
        )}
        
        {/* Optional dark overlay for better text readability */}
        {showOverlay && (title || subtitle) && (
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        )}
      </div>

      {/* Optional title and subtitle overlay */}
      {(title || subtitle) && (
        <div className="relative z-10 text-center text-white px-4">
          {title && (
            <h1 className="text-5xl md:text-7xl font-bold capitalize tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-4">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Error indicator (only visible in console, not to users) */}
      {error && console.error('Hero section error:', error)}
    </section>
  );
};

export default HeroSection;