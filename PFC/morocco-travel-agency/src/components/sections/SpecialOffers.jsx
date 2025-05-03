import OfferCard from '../ui/OfferCard';
import { specialOffers } from '../../utils/offers';

const SpecialOffers = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            Promotions exclusives
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            Nos <span className="text-amber-600">Offres</span> Spéciales
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        {/* Offers grid with responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {specialOffers.map((offer) => (
            <OfferCard 
              key={offer.id}
              offer={offer}
            />
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-md text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Voir toutes les offres
            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;