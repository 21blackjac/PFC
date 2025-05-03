import DestinationCard from '../ui/DestinationCard';
import { featuredDestinations } from '../../utils/destinations';

const FeaturedDestinations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-display">
          Nos <span className="text-primary">Destinations</span> Phares
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <DestinationCard 
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;