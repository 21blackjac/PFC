const OfferCard = ({ offer }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image with zoom effect */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={offer.image} 
          alt={offer.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Discount ribbon (more prominent) */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          {offer.discount}% OFF
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        {/* Title with subtle shine effect */}
        <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:text-amber-300">
          {offer.title}
        </h3>
        
        {/* Price with better visual hierarchy */}
        <div className="flex items-end gap-3">
          <span className="line-through text-gray-300 text-sm">${offer.originalPrice}</span>
          <span className="font-bold text-2xl text-amber-400">${offer.discountedPrice}</span>
        </div>
        
        {/* Hidden details that appear on hover */}
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center text-sm text-gray-200">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {offer.location}
          </div>
          
          <button className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;