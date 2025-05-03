import { useState } from 'react';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');

  const languages = [
    { code: 'FR', name: 'Français' },
    { code: 'EN', name: 'English' },
    { code: 'AR', name: 'العربية' }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-primary"
      >
        <span>{currentLang}</span>
        <span>▼</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-amber-500 rounded-md shadow-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrentLang(lang.code);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:text-amber-600 hover:bg-amber-100"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default LanguageSelector;