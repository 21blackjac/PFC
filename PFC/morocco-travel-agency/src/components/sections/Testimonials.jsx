import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../utils/testimonials';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-200/30 text-amber-700 rounded-full text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            Ils ont <span className="text-amber-600">voyagé</span> avec nous
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        {/* Testimonials grid with responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16">
        <button className="relative inline-flex items-center px-8 py-4 overflow-hidden text-white font-medium rounded-full group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 group-hover:from-amber-600 group-hover:to-amber-700"></span>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
            <span className="relative z-10 flex items-center">
              Lire plus de temoignage
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

export default Testimonials;