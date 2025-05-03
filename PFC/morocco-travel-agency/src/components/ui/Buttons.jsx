const PrimaryButton = ({ children }) => (
  <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
    {children}
  </button>
);

const SecondaryButton = ({ children }) => (
  <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium py-2.5 px-7 rounded-full transition-colors duration-300 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
    {children}
  </button>
);

const IconButton = ({ icon, children }) => (
  <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-300 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 rounded-full">
    <span className="text-xl">{icon}</span>
    <span>{children}</span>
  </button>
);

export { PrimaryButton, SecondaryButton, IconButton };