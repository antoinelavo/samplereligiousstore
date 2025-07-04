export default function GreetingSection() {
  return (
    <section className="relative bg-gray-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">인사의 말씀</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-orange-500 mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 relative">
          
          <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-gray-600 to-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          
          <div className="pt-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              안녕하십니까
            </p>
            
<p className="text-gray-700 leading-relaxed mb-6">
              저희 서울더믿음치과의원을 찾아주신 모든 분들께 진심으로 감사의 말씀을 드립니다. 
              저는 환자분들과의 신뢰 관계를 바탕으로 한 진정성 있는 치료를 추구하며, 
              단순히 치료하는 것이 아닌 마음에 믿음을 심어드리는 치과가 되고자 합니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>첫째, 환자 중심의 맞춤형 진료를 실천합니다.</strong><br />
              모든 환자분들은 서로 다른 구강 상태와 치료 필요성을 가지고 계십니다. 
              저희는 획일적인 치료가 아닌, 개별 환자분의 상황에 맞는 최적의 치료 계획을 세워 
              가장 효과적이고 경제적인 치료를 제공하고 있습니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>둘째, 정직하고 투명한 진료를 약속드립니다.</strong><br />
              과잉진료는 절대 하지 않으며, 정말 필요한 치료만을 권해드립니다. 
              치료 전 충분한 상담을 통해 치료 과정과 비용을 명확히 설명하여 
              환자분들이 안심하고 치료받으실 수 있도록 노력하고 있습니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>셋째, 편안하고 안전한 치료 환경을 제공합니다.</strong><br />
              치과 치료에 대한 두려움을 최소화하기 위해 무통 치료 시스템을 도입하였으며, 
              최신 장비와 엄격한 감염 관리를 통해 안전하고 편안한 치료를 받으실 수 있습니다. 
              환자분의 편의를 최우선으로 생각하는 따뜻한 진료 환경을 조성하고 있습니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>넷째, 지속적인 구강건강 관리를 지원합니다.</strong><br />
              일회성 치료에 그치지 않고, 정기적인 검진과 예방 관리를 통해 
              평생에 걸친 구강건강을 책임지는 가족 주치의 역할을 하겠습니다. 
              환자분들의 건강한 미소를 위해 끝까지 함께하겠습니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              저희 치과를 찾아주시는 모든 분들께서 마음 편히 치료받으시고, 
              건강하고 아름다운 미소를 되찾으실 수 있도록 최선을 다하겠습니다. 
              언제나 겸손한 자세로 환자분들을 섬기며, 신뢰받는 치과가 되도록 노력하겠습니다. 
              감사합니다.
            </p>
        

            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xl font-bold text-gray-900 mb-1">정지원</p>
                  <p className="text-orange-600 font-semibold mb-1">서울더믿음치과의원 대표원장</p>
                  <p className="text-gray-600 text-sm">치과보철과 전문의</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};