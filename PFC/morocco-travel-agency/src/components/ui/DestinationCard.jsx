import destinations from "../../utils/destinations";


import { PrimaryButton } from "./Buttons";

const DestinationCard = () => {
  // Sélectionne la première destination du tableau
  const destination = destinations[0];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Image with hover effect */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* Tag badge */}
        <span className="absolute top-3 right-3 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
          {destination.tag}
        </span>
      </div>
      
      {/* Content section */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-display font-bold text-gray-900">
            {destination.name}
          </h3>
          {/* Rating */}
          <div className="flex items-center text-amber-400">
            <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            {destination.rating}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {destination.description}
        </p>
        
        {/* Price and CTA */}
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-lg">
            {destination.price}
          </span>
          <PrimaryButton>Voir offre</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;