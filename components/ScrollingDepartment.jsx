// components/ScrollingDepartments.jsx
import React from 'react';

export default function ScrollingDepartments() {
  const departments = [
    '구강악안면외과',
    '구강내과', 
    '구강병리과',
    '소아치과',
    '영상치의학과',
    '예방치과',
    '치과보존과',
    '치과보철과',
    '치주과',
    '통합치의학과'
  ];

  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section className="relative py-16 overflow-hidden"
               style={{background: 'linear-gradient(90deg, rgba(49, 130, 206, 1) 0%, rgba(56, 178, 172, 1) 100%)'}}>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mb-8">
          <h2 id="services" className="scroll-mt-24 text-3xl font-bold text-white text-center mb-2">진료과목</h2>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set */}
            {departments.map((dept, index) => (
              <div 
                key={`first-${index}`}
                className="inline-flex items-center justify-center bg-blue bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg px-6 py-3 mx-3 min-w-max"
              >
                <span className="text-white font-medium text-lg">{dept}</span>
              </div>
            ))}
            
            {/* Duplicate for seamless loop */}
            {departments.map((dept, index) => (
              <div 
                key={`second-${index}`}
                className="inline-flex items-center justify-center bg-blue bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg px-6 py-3 mx-3 min-w-max"
              >
                <span className="text-white font-medium text-lg">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}