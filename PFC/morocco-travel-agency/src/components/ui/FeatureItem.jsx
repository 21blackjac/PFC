const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="group relative flex items-start space-x-5 p-6 bg-white/90 hover:bg-white rounded-xl border border-amber-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Amber glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon container */}
      <div className="relative z-10 flex-shrink-0 bg-amber-100/50 text-amber-600 p-3 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1">
        <h4 className="font-display font-bold text-lg text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-200">
          {title}
        </h4>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
          {description}
        </p>
      </div>
      
      {/* Animated arrow */}
      <div className="absolute right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-amber-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
      
      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-50 group-hover:bg-amber-200 transition-colors duration-300"></div>
    </div>
  );
};