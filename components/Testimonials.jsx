export default function Testimonials() {
  const testimonials = [
    {
      name: "김민*",
      age: "",
      treatment: "스케일링",
      rating: 5,
      text: "스케일링 받으러 방문했는데 전혀 아프지 않게 꼼꼼히 해주셨어요. 오래된 보철 상태도 상세히 설명해주시고 치료 계획도 친절하게 안내받았습니다. 믿고 다닐 수 있는 치과예요."
    },
    {
      name: "이서*",
      age: "",
      treatment: "사랑니 발치",
      rating: 5,
      text: "사랑니 발치가 무서웠는데 정말 빠르고 깔끔하게 해주셨어요. 마취도 전혀 아프지 않았고 수술 후에도 붓기나 통증이 거의 없어서 바로 일상생활 가능했습니다. 너무 만족해요!"
    },
    {
      name: "박지*",
      age: "",
      treatment: "치료상담",
      rating: 5,
      text: "치료 과정을 자세히 설명해주셔서 안심이 되었습니다. 발치 후 치료 옵션들도 꼼꼼히 상담해주시고 환자 입장에서 최선의 방법을 제안해주셔서 감사했어요."
    },
    {
      name: "최수*",
      age: "",
      treatment: "임플란트",
      rating: 5,
      text: "지인 추천으로 임플란트 상담받으러 왔어요. 마취 과정도 전혀 아프지 않게 해주시고 수술 내내 세심하게 배려해주셔서 편안하게 받을 수 있었습니다. 정말 친절한 곳이에요."
    },
    {
      name: "윤정*",
      age: "",
      treatment: "일반진료",
      rating: 5,
      text: "치과 공포증이 있어서 항상 긴장했는데 원장님께서 차근차근 설명해주시고 편안하게 해주셔서 마음이 놓였어요. 다음에도 꼭 여기서 치료받으려고 합니다."
    },
    {
      name: "한민*",
      age: "",
      treatment: "정기검진",
      rating: 5,
      text: "정기검진차 방문했는데 꼼꼼한 진단과 상세한 설명이 인상적이었습니다. 과잉진료 없이 정말 필요한 치료만 권해주시는 믿을 수 있는 치과입니다. 적극 추천해요!"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-orange-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="relative bg-gray-50 py-16 lg:py-32">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">환자 후기</h2>
          <p className="text-gray-600 text-lg">저희 병원에서 치료받으신 환자분들의 생생한 후기입니다</p>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.treatment}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a 
            href="https://booking.naver.com/booking/13/bizes/326974" 
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            진료 예약하기
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};