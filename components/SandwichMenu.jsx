import { useState, useEffect } from 'react';

export default function SandwichMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="relative flex flex-col justify-center items-center w-8 h-8 bg-transparent border-none cursor-pointer"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      {/* Full Viewport Dark Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 w-screen h-screen z-[9998]"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[9999] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ position: 'fixed' }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-12">
          <a
            href="/"
            className="text-3xl font-medium text-gray-800 hover:text-rose-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            홈
          </a>
          <a
            href="/shelf"
            className="text-3xl font-medium text-gray-800 hover:text-rose-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Shelf
          </a>
          <a
            href="/Door"
            className="text-3xl font-medium text-gray-800 hover:text-rose-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Door
          </a>
        </div>
      </div>
    </>
  );
}