export default function Testimonials() {
  const testimonials = [
    {
      name: "금방***",
      age: "",
      treatment: "스케일링",
      rating: 5,
      text: "스케일링 하러 방문했는데 안아프게 세심히 잘 해주셨어요. 어떤에 10년 이상 된 보철도 상의로 다시 치료받기로 했네요. 병원도 친절히 설명해주셔서 온고 가는 치과입니다."
    },
    {
      name: "bobeullu61",
      age: "",
      treatment: "임플란트",
      rating: 5,
      text: "사랑니 뽑으러 갔어요. 진짜 10분만에 뽑았고 지금 8시간정도 지났는데 안아파요! 얼굴도 안부어서 바로 일상생활 했어여 뽑을때 치과 특유에 무서운 소리도 안나서 안무서웠구 귀여운 오리 인형도 빌려주셧어여🐥 아 글고 미금역 근처라 교통도 좋은듯"
    },
    {
      name: "joy****",
      age: "",
      treatment: "치료상담",
      rating: 5,
      text: "자세한 설명과 추후 치료과정들을 차분히 설명해 주셔서 감사했습니다. 치아 발치후 대치시술도 잘 설명해 주셔서 감사했습니다~^^"
    },
    {
      name: "싸리누나",
      age: "",
      treatment: "사랑니 발치",
      rating: 5,
      text: "동생이 다녀오고 추천한다고 해서 사랑니 발치하러 다녀왔습니다!!! 마취하는게 아플까 걱정했는데 하나도 안아프게 잘해주셨어요. 엄청 친절하셔서 기분 좋게 진료 받고 왔습니다. 추천해요~~👍👍"
    },
    {
      name: "fl****",
      age: "",
      treatment: "치료상담",
      rating: 5,
      text: "원장님께서 쉽고 깔끔하게 설명도 잘해주시고 겁이 많아서 치과 무서워하는데 마음 편하게 해주셔서 다음에 또 오려구요."
    },
    {
      name: "yyjrock",
      age: "",
      treatment: "진료상담",
      rating: 5,
      text: "너무 친절한 데스크, 정확한 진단과 상세한 설명까지 최고입니다! 과잉진료를 안하시는 이 시대에 참 된 병원! 찬스플란트치과의원으로 오세요 🙏🏻"
    },
    {
      name: "갱이8350",
      age: "",
      treatment: "치료상담",
      rating: 5,
      text: "네이버 리뷰보고 첫방문했어요. 의사선생님, 간호사분들 모두 친절하게 잘 설명해주셨어요. 치과는 늘 가기 무서운곳인데... 모두 친절하게 응대해주시니까 마음이 놓이더라고요. 남은 치료도 잘 받겠습니다!^^"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
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
    <>
      <style jsx>{`
        @keyframes scroll-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll-testimonials {
          animation: scroll-testimonials 10s linear infinite;
        }
        
        .animate-scroll-testimonials:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative bg-gray-50 py-16 lg:py-32 overflow-hidden">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mb-12">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">환자 후기</h2>
            <p className="text-gray-600 text-lg">저희 병원에서 치료받으신 환자분들의 생생한 후기입니다</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Scrolling testimonials */}
        <div className="relative">
          <div className="flex animate-scroll-testimonials whitespace-nowrap">
            
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`first-${index}`}
                className="inline-block bg-white rounded-2xl shadow-lg p-6 mx-4 w-80 flex-shrink-0"
                style={{ whiteSpace: 'normal' }}
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
                      <p className="text-sm text-gray-600">{testimonial.age}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {testimonial.treatment}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`second-${index}`}
                className="inline-block bg-white rounded-2xl shadow-lg p-6 mx-4 w-80 flex-shrink-0"
                style={{ whiteSpace: 'normal' }}
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
                      <p className="text-sm text-gray-600">{testimonial.age}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {testimonial.treatment}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
          <a 
            href="https://booking.naver.com/booking/13/bizes/326974" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            진료 예약하기
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}