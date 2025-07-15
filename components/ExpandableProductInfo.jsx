import React, { useState } from 'react';

const ExpandableProductInfo = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'product-info',
      title: '상품정보',
      content: (
        <div className="space-y-4 text-zinc-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-zinc-900 mb-2">소재</p>
              <p className="text-sm">소재를 쓰시면 됩니다</p>
            </div>
            <div>
              <p className="font-medium text-zinc-900 mb-2">제작방식</p>
              <p className="text-sm">방식을 쓰시면 됩니다</p>
            </div>
            <div>
              <p className="font-medium text-zinc-900 mb-2">크기</p>
              <p className="text-sm">크기를 쓰시면 됩니다</p>
            </div>
            <div>
              <p className="font-medium text-zinc-900 mb-2">색상</p>
              <p className="text-sm">화이트</p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="font-medium text-zinc-900 mb-2">특징</p>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>특징을 쓰시면 됩니다</li>
              <li>섬세한 손자수 장식</li>
              <li>고급 장식</li>
              <li>개별 포장</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'care-instructions',
      title: '상품 취급 시 주의사항',
      content: (
        <div className="space-y-4 text-zinc-700">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-medium text-amber-800 mb-2">중요 안내</p>
            <p className="text-sm text-amber-700">섬세한 수제품이므로 취급 시 각별한 주의가 필요합니다.</p>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="font-medium text-zinc-900 mb-2">보관 방법</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>직사광선을 피해 서늘하고 건조한 곳에 보관</li>
                <li>제공되는 전용 보관함에 평평하게 보관</li>
                <li>습기가 많은 곳 피하기</li>
                <li>향수나 화학제품과 접촉 금지</li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium text-zinc-900 mb-2">착용 시 주의사항</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>날카로운 액세서리나 장신구와의 접촉 주의</li>
                <li>착용 전 손톱이나 반지로 인한 걸림 확인</li>
                <li>강한 당김이나 비틀림 금지</li>
                <li>화장품이나 헤어제품과의 직접 접촉 피하기</li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium text-zinc-900 mb-2">세탁 및 관리</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>전문 드라이클리닝만 가능</li>
                <li>물세탁 절대 금지</li>
                <li>다림질 시 낮은 온도에서 천을 대고 진행</li>
                <li>오염 시 즉시 전문업체 상담</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'shipping-returns',
      title: '배송 / 교환 및 반품 정보',
      content: (
        <div className="space-y-4 text-zinc-700">
          <div>
            <p className="font-medium text-zinc-900 mb-3">📦 배송 정보</p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">배송료</span>
                <span className="text-sm">무료배송 (전국)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">배송기간</span>
                <span className="text-sm">주문 후 7-14일 (맞춤 제작품)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">배송회사</span>
                <span className="text-sm">CJ대한통운, 로젠택배</span>
              </div>
            </div>
          </div>
          
          <div>
            <p className="font-medium text-zinc-900 mb-3">🔄 교환 및 반품</p>
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-medium text-red-800 mb-2">❌ 교환/반품 불가 상품</p>
                <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
                  <li>맞춤 제작된 상품</li>
                  <li>착용 또는 사용 흔적이 있는 상품</li>
                  <li>고객 부주의로 인한 오염이나 손상</li>
                  <li>제품 택 및 포장재 분실</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-medium text-green-800 mb-2">✅ 교환/반품 가능한 경우</p>
                <ul className="text-sm text-green-700 space-y-1 list-disc list-inside">
                  <li>제품 하자 또는 배송 중 손상</li>
                  <li>주문한 상품과 다른 상품 배송</li>
                  <li>배송 후 7일 이내 (미착용 상태)</li>
                </ul>
              </div>
              
              <div className="mt-4">
                <p className="font-medium text-zinc-900 mb-2">📞 교환/반품 신청</p>
                <div className="text-sm space-y-1">
                  <p>• 고객센터: 02-1234-5678</p>
                  <p>• 이메일: email@email.co.kr</p>
                  <p>• 운영시간: 평일 09:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const PlusIcon = ({ isExpanded }) => (
    <svg 
      className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
      />
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="space-y-2">
        {sections.map((section) => (
          <div key={section.id} className="border border-gray-200  rounded-lg overflow-hidden">
            {/* Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-5 bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between text-left group"
            >
              <h3 className="text-lg font-medium text-zinc-900 group-hover:text-amber-600 transition-colors duration-200">
                {section.title}
              </h3>
              <div className="text-zinc-400 group-hover:text-amber-600 transition-colors duration-200">
                <PlusIcon isExpanded={expandedSections[section.id]} />
              </div>
            </button>
            
            {/* Content */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out  ${
              expandedSections[section.id] 
                ? 'max-h-screen opacity-100' 
                : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200 pt-[2em]">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableProductInfo;