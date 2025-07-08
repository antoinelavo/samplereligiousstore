import { useState, useEffect } from 'react';

export default function ScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Show header after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Your updated header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 mx-auto px-[2em] transition-all duration-300 ease-in-out
        // isScrolled 
        //   ? 'translate-y-0 opacity-100 bg-white backdrop-blur-md shadow-lg' 
        //   : '-translate-y-full opacity-0'
      `}>
        <div className="max-w-[1000px] mx-auto px-6 py-6">
          <div className="flex justify-center items-center">
            <a href="/">
              <img src="/images/logo.png" alt="Logo" className="w-[5em]"/>
            </a>

            {/* <div className="flex space-x-12 text-sm font-medium tracking-wider text-black">
              <a 
                href="https://smartstore.naver.com/out_of_place" 
                className="text-white-800 hover:text-white-600 transition-colors duration-300"
              >
                구매하기
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}