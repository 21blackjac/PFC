const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-500 to-amber-600 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* En-tête avec éléments décoratifs */}
        <div className="mb-12">
          <span className="inline-block mb-4 px-4 py-2 bg-amber-400/20 rounded-full text-sm font-medium text-amber-100">
            Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Restez informés
          </h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Recevez nos offres exclusives et inspirations voyage
          </p>
        </div>
        
        {/* Formulaire amélioré */}
        <div className="max-w-md mx-auto">
          <div className="relative flex shadow-lg rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-grow px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button 
              className="px-6 py-4 bg-amber-800 hover:bg-amber-900 text-white font-medium transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
            >
              S'abonner
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </div>
          <p className="mt-4 text-sm text-amber-200/80">
            Nous respectons votre vie privée.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;