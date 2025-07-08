export default function Footer({
  companyName = "Style House",
  founder = "김민수",
  phone = "02-1234-5678",
  businessNumber = "123-45-67890",
  address = "서울시 강남구 테헤란로 123, 2층",
  email = "info@stylehouse.com",
  className = ""
}) {
  return (
    <footer className={`bg-white border-t border-gray-200 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">{companyName}</h3>
            <div className="space-y-2 text-sm text-gray-800">
              <p>대표: {founder}</p>
              <p>사업자등록번호: {businessNumber}</p>
              <p className="text-xs text-gray-600 mt-2">
                © 2024 {companyName}. All rights reserved.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">연락처</h3>
            <div className="space-y-2 text-sm text-gray-800">
              <p>전화: {phone}</p>
              <p>이메일: {email}</p>
              <p>주소: {address}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-600">
            본 사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}