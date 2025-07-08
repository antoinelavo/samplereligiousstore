// Items.jsx
export default function Items({ 
  items = [], 
  sectionId = "items",
  title = null,
  subtitle = null,
  backgroundColor = "bg-white",
  textColor = "text-black",
  descriptionColor = "text-gray-400",
  itemBackgroundColor = "bg-white",
  borderColor = "border-white",
  className = "",
  imageClassName = "object-cover filter aspect-[1/1] w-full",
  titleClassName = "serif-font text-xl mb-2",
  descriptionClassName = "korean-sans mb-2"
}) {
  return (
    <section id={sectionId} className={`py-24 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Optional section title and subtitle */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg ${descriptionColor}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => {
            // Generate hover image: either use provided hoverImage or replace 'front' with 'main'
            const hoverImage = item.hoverImage || item.image.replace('front', 'main');
            
            return (
              <div 
                key={index} 
                className={`${itemBackgroundColor} border ${borderColor} max-w-[20em] mx-auto group cursor-pointer transition-transform duration-300 hover:scale-105`}
              >
            <a href={`/item/${item.name.toLowerCase()}`}>
                <div className="relative overflow-hidden">
                  {/* Default image */}
                  <img 
                    src={item.image} 
                    alt={item.name || item.title}
                    className={`${imageClassName} transition-opacity duration-300 group-hover:opacity-0`}
                    href="https://www.google.com"
                  />
                  {/* Hover image */}
                  <img 
                    src={hoverImage} 
                    alt={`${item.name || item.title} - hover`}
                    className={`${imageClassName} absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
                  />
                </div>
            </a>
                <div className="py-6">
                  <h4 className={`${titleClassName} ${textColor}`}>
                    {item.name || item.title}
                  </h4>
                  <p className={`${descriptionClassName} ${descriptionColor}`}>
                    {item.description}
                  </p>
                  <p>
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}