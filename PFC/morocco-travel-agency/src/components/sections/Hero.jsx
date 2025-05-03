import { useState } from 'react';
import heroImage from '../../assets/images/marrakech-hero.jpg';
import { Search } from 'lucide-react';

const Hero = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  
  return (
    <section className="relative h-[80vh]">
      {/* Image */}
      <img
        src={heroImage}
        alt="Maroc"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      
      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 font-display">
          L'âme du <span className="text-amber-400">Maroc</span> vous attend
        </h1>
        
        {/* Search Bar - positioned properly on top of the image */}
        <div className={`max-w-xl mx-auto bg-white rounded-full overflow-hidden shadow-lg transition-all duration-300 ${searchFocused ? 'shadow-xl' : ''}`}>
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Rechercher une destination..."
              className="flex-grow px-6 py-3 focus:outline-none w-full text-amber-500"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
              <Search size={18} />
              <span>Rechercher</span>
            </button>
          </div>
        </div>
        
        {/* Popular destinations - subtle and unobtrusive */}
        <div className="mt-4 text-sm flex flex-wrap justify-center gap-2">
          <span className="text-white/90 hover:text-white cursor-pointer transition">Marrakech</span>
          <span className="mx-1 text-white/50">•</span>
          <span className="text-white/90 hover:text-white cursor-pointer transition">Fès</span>
          <span className="mx-1 text-white/50">•</span>
          <span className="text-white/90 hover:text-white cursor-pointer transition">Chefchaouen</span>
          <span className="mx-1 text-white/50">•</span>
          <span className="text-white/90 hover:text-white cursor-pointer transition">Essaouira</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;