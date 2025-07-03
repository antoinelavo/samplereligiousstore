export default function GreetingSection() {
  return (
    <section className="relative bg-gray-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">인사의 말씀</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
          
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          
          {/* Greeting Message */}
          <div className="pt-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              안녕하십니까
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
                우선, 저는 진부하고 당연한 이야기들은 하지 않겠습니다. 정말 약속 드릴 수 있는 것만 말씀 드리도록 하겠습니다. 저희 치과는 딱 4가지만 먼저 강조하겠습니다.

            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
첫째, 찬스플란트 치과는 환자분께서 믿고 다닐 수 있는 평생 가족 치과 주치의가 되도록 노력하고 있습니다.
저희 치과는 같은 한 곳에서 오랫동안 환자분들의 구강 건강을 책임지는 진료를 추구하고 있습니다.
혹시 치료 받았던 치과가 갑자기 없어져서 당황 해보신적 있나요? 아니면,갑자기 치과의사가 바뀌어서 당황한 적은 없었는지요? 찬스플란트 치과는 부원장님에 맡기지 않는 대표원장님의 직접 책임 진료를 시행하는 치과입니다. 치과가 없어지거나 치과 원장이 바뀌는 일이 절대 없는 평생 가족 치과 주치의 치과를 약속드립니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
둘째, 항상 환자분을 치료할때 '나의 가족이라면 어떻게 치료할까?' 라는 생각을 가지고 치료계획을 세우고 있습니다.
내 가족을 치료한다면 당연히 과잉진료를 엄격히 제한하고 최소한의 치료 범위와 비용으로 최선의 치료 결과와 효과를 얻고자 할 것입니다.
모든 환자분을 치료함에 있어서 이 마음 명심하고 치료에 임한다고 자부할 수 있습니다.
자연치아를 살리기 위한 각고의 노력을 하고 있으며, 다양한 치료 옵션을 구비하여 환자분께서 부담없이 치료를 받게끔 노력하고 있습니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
셋째, 환자분들의 편안하고 안 아픈, 새로운 치과 경험의 혁신을 위해 헌신하고 정성을 다하겠습니다.권위적인 치과의사의 모습이 아니라, 문앞까지 인사,배웅하고 마중하는 편안하고 친근한 치과가 되겠습니다. 치과 방문도 내 집처럼 편안하고 기분 좋은 일이 될 수 있도록 힘쓰겠습니다. 무서운 치과 진료를 최대한 아프지 않고 불편하지 않게 치료해드리려고 노력하겠습니다 : 무통마취시스템 구축
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
넷째, 저는 보건복지부 인증 구강악안면외과 치과 전문의입니다.
'구강악안면외과 전문의'는 치과 내에서도 모든 각종 치과 수술을 전문으로 집도하는 전문가이자, Specialist입니다.
제가 구강악안면외과를 전공한 만큼 임플란트, 고난도 매복 사랑니발치, 하악골융기 제거수술, 치근단낭종적출술, 잇몸물혹제거수술, 치근단절제술과 같은 치과 관련 수술 치료를 전문으로 하고 있습니다.
검증되고 믿을만한 치과를 선택하는 방법은 바로 '전문의'라는 표기입니다. '전문의' 표시가 되어 있는 치과를 찾으셔야만 환자분들의 소중한 치아를 지킬 수 있습니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
환자분께서,치과라는 무서운 공간으로 바쁘신 와중에도 어려운 발걸음을 내서 저희 치과로 내원하는 것은 기적이라고 생각합니다.진정성이 담긴 진료와 치과 의료 서비스로 보답하겠습니다.겸손한 마음 잊지 않고 정성을 다하고 헌신하겠습니다. 소중한 방문 기다리고 있겠습니다.감사합니다.
            </p>



            {/* Signature Area */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xl font-bold text-gray-900 mb-1">노재찬</p>
                  <p className="text-blue-600 font-semibold mb-1">찬스플란트치과의원 대표원장</p>
                  <p className="text-gray-600 text-sm">구강악안면외과 전문의</p>
                </div>
            
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}