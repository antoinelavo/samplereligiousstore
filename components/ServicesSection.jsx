// components/ScrollingDepartments.jsx
import React from 'react';

export default function ScrollingDepartments() {
  const departments = [
    '구강악안면외과',
    '소아치과',
    '영상치의학과',
    '예방치과',
    '치과보존과',
    '치과교정과',
    '치주과',
    '통합치의학과'
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-700 to-slate-600">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
        <div className="text-center mb-12">
          <h2 id="services" className="scroll-mt-60 text-3xl md:text-4xl font-bold text-white mb-4">진료과목</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg px-4 py-6 text-center hover:bg-opacity-20 transition-all duration-300"
            >
              <span className="text-black font-medium text-sm md:text-base">{dept}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};