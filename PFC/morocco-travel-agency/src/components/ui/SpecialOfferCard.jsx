import OfferCard from '../ui/OfferCard';
import { specialOffers } from '../../utils/offers';

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-50 rounded-full mb-4">
            Voyages Exclusifs
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            Nos <span className="text-amber-600">Offres</span> Spéciales
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        {/* Offers grid with responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer) => (
            <OfferCard 
              key={offer.id}
              offer={offer}
            />
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-12">
        <button className="relative inline-flex items-center px-8 py-4 overflow-hidden text-white font-medium rounded-full group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 group-hover:from-amber-600 group-hover:to-amber-700"></span>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
            <span className="relative z-10 flex items-center">
              View All Offer
              <svg 
                className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;