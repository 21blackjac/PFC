import staticDestinations from '../../utils/destinations';
import DestinationCard from '../ui/DestinationCard';

const DestinationGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4 tracking-wider uppercase">
            Explore the Beauty
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Discover Our <span className="text-amber-600">Destinations</span>
          </h2>
          <div className="flex justify-center space-x-1 mb-6">
            <div className="w-16 h-1 bg-amber-400 rounded-full"></div>
            <div className="w-3 h-1 bg-amber-300 rounded-full"></div>
            <div className="w-1 h-1 bg-amber-200 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the vibrant culture and breathtaking landscapes of our carefully selected destinations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {staticDestinations.map((destination) => (
            <DestinationCard 
              key={destination.id}
              destination={destination}
              className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="relative inline-flex items-center px-8 py-4 overflow-hidden text-white font-medium rounded-full group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 group-hover:from-amber-600 group-hover:to-amber-700"></span>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
            <span className="relative z-10 flex items-center">
              View All Destinations
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

export default DestinationGrid;