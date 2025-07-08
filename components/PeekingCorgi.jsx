import { useState, useEffect, useRef } from 'react';

export default function PeekingCorgi() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  const timerRef = useRef(null);
  const fadeOutTimerRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const elapsedTimeRef = useRef(0);

  useEffect(() => {
    // Don't show again if already shown on this page
    if (hasShown) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, pause timer
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          elapsedTimeRef.current += Date.now() - startTimeRef.current;
        }
      } else {
        // Page is visible, resume timer
        startTimeRef.current = Date.now();
        const remainingTime = 30000 - elapsedTimeRef.current;
        
        if (remainingTime > 0 && !isVisible) {
          timerRef.current = setTimeout(() => {
            showCorgi();
          }, remainingTime);
        }
      }
    };

    const showCorgi = () => {
      setIsVisible(true);
      setHasShown(true);
      
      // Show speech bubble after slide animation
      setTimeout(() => {
        setShowBubble(true);
        
        // Start fade out timer
        fadeOutTimerRef.current = setTimeout(() => {
          handleExit();
        }, 8000);
      }, 1000); // Wait for slide animation to complete
    };

    const handleExit = () => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        setShowBubble(false);
        setIsExiting(false);
      }, 500); // Wait for fade out animation
    };

    // Start initial timer
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(showCorgi, 20000);

    // Listen for page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (fadeOutTimerRef.current) clearTimeout(fadeOutTimerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasShown, isVisible]);

  const handleClick = () => {
    // Clear fade out timer since user clicked
    if (fadeOutTimerRef.current) {
      clearTimeout(fadeOutTimerRef.current);
    }
    // Navigate to homepage
    window.location.href = 'https://smartstore.naver.com/out_of_place/products/11575546354';
  };


  return (
    <div className={`fixed top-100 right-0 z-50 transition-all duration-500 ease-out cursor-pointer ${
      isExiting ? 'opacity-0 translate-x-full' : 'opacity-100'
    }`}>
      <a onClick={handleClick} className="block">
        {/* Corgi Character */}
        <div className={`relative transition-transform duration-1000 ease-out ${
          isVisible && !isExiting ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Speech Bubble */}
          <div className={`absolute -top-12 -left-8 bg-white rounded-lg px-3 py-2 shadow-lg border-2 border-gray-200 transition-all duration-300 ${
            showBubble ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="text-sm md:text-lg lg:text-xl font-medium text-gray-800 whitespace-nowrap">
              Click Me!
            </div>
            {/* Speech bubble tail */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-200"></div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[-2px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
          
          {/* Corgi Image Container */}
          <div className="w-[12svh] h-[12svh] min-w-[60px] min-h-[60px] max-w-[120px] max-h-[120px] flex items-center justify-center">
            <img
                src="/images/pokinghead.png" alt="Logo"
            />
          </div>
        </div>
      </a>
    </div>
  );
}