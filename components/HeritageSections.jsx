import React from 'react';

const ContentSection = ({ 
  title, 
  subtitle, 
  description, 
  images, 
  imageLayout = 'single', // 'single' or 'grid'
  contentDirection = 'left', // 'left' or 'right' 
  accentColor = 'amber-600',
  className = ''
}) => {
  
  const isContentLeft = contentDirection === 'left';
  
  const renderImages = () => {
    if (imageLayout === 'grid' && Array.isArray(images)) {
      return (
        <div className="grid grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      );
    }
    
    // Single image layout
    const mainImage = Array.isArray(images) ? images[0] : images;
    return (
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg">
        <img 
          src={mainImage.src} 
          alt={mainImage.alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    );
  };

  return (
    <section className={`py-24 px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          isContentLeft ? '' : 'lg:grid-flow-col-dense'
        }`}>
          
          {/* Content Side */}
          <div className={`space-y-8 ${isContentLeft ? '' : 'lg:col-start-2'}`}>
            <div className="space-y-6">
              {subtitle && (
                <p className={`text-lg font-light tracking-[0.2em] text-${accentColor} uppercase`}>
                  {subtitle}
                </p>
              )}
              
              <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight text-zinc-900 leading-tight">
                {title}
              </h2>
              
              <div className={`w-24 h-px bg-${accentColor}`} />
            </div>
            
            <div className="space-y-6">
              {Array.isArray(description) ? (
                description.map((paragraph, index) => (
                  <p key={index} className="text-lg font-light leading-loose text-zinc-700">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-lg font-light leading-loose text-zinc-700">
                  {description}
                </p>
              )}
            </div>
            
          </div>

          {/* Image Side */}
          <div className={`${isContentLeft ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
            {renderImages()}
          </div>
        </div>
      </div>
    </section>
  );
};

// Example usage component showing both sections
const HeritageSections = () => {
  // Section 1: Heritage
  const heritageData = {
    subtitle: "전통을 이어나가는",
    title: '키아라 미사보',
    description: [
      '15년 전부터 "청담동 미사보"로 유명해진 키아라 미사보는 장인정신과 디테일에 대한 집착이 만들어낸 고품질 수공예품이였습니다.',
      '"청담동 미사보"로 알려진 저희의 명성은 전국의 신앙인들에게 최고의 품질을 약속하는 이름이 되었습니다.',
      '그 후, 이름이 비슷한 여러 유사한 제품들이 만들어졌지만, 키아라는 원조의 품질을 그대로 고수하고 있습니다',

    ],
    images: {
      src: "/images/veil1.jpg",
      alt: "미사보 사진"
    },
    contentDirection: "left",
    imageLayout: "single"
  };

  // Section 2: Handcraft Process
  const handcraftData = {
    subtitle: "수제작",
    title: "정성스러운 손끝에서 탄생하는 작품",
    description: [
      "모든 미사보는 오직 숙련된 장인의 손으로 제작됩니다.",
      "최상급 재질을 사용하여 하나하나 정성스럽게 바느질하고, 섬세한 자수 장식까지 수작업으로 완성합니다.",
      "15년간 연마된 기술과 변함없는 정성으로, 세상에 단 하나뿐인 소중한 미사보를 만들어드립니다."
    ],
    images: [
      { src: "/images/handcraft-1.jpg", alt: "레이스 재단 과정" },
      { src: "/images/handcraft-2.jpg", alt: "정교한 바느질 작업" },
      { src: "/images/handcraft-3.jpg", alt: "자수 장식 과정" },
      { src: "/images/handcraft-4.jpg", alt: "최종 마무리 검수" }
    ],
    contentDirection: "right",
    imageLayout: "grid"
  };

  return (
    <div className="bg-white">
      <ContentSection 
        {...heritageData}
        className="border-t border-gray-200"
      />
      
      <ContentSection 
        {...handcraftData}
        className="border-t border-gray-200 bg-gray-50"
      />
    </div>
  );
};

export default HeritageSections;