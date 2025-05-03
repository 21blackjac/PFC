const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="relative">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-amber-100 shadow-sm mr-5"
          />
          <div className="absolute -bottom-1 -right-1 bg-amber-400 rounded-full p-1">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
          <div className="flex items-center mt-1">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-gray-200 fill-current'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">{testimonial.rating}/5</span>
          </div>
        </div>
      </div>
      
      <blockquote className="relative pl-6 mb-6">
        <div className="absolute left-0 top-0 text-3xl text-amber-100 font-serif">"</div>
        <p className="text-gray-600 italic text-base leading-relaxed">
          {testimonial.comment}
        </p>
      </blockquote>

      <div className="flex items-center text-sm text-gray-500 border-t border-gray-100 pt-4">
        <svg className="w-4 h-4 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Visited: <span className="font-medium text-gray-700">{testimonial.destination}</span></span>
      </div>
    </div>
  );
};

export default TestimonialCard;