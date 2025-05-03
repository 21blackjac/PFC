const FormInput = ({ label, type = 'text', placeholder, icon, error }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-medium mb-2 transition-all duration-200">
        {label}
        {error && <span className="text-red-500 text-xs ml-1">({error})</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 transition-colors duration-200 group-focus-within:text-primary">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border ${
            error ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
            icon ? 'pl-10' : ''
          } placeholder-gray-400 group`}
        />
        {/* Validation feedback icon */}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};