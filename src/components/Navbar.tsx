import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/images/td3c_logo3.png" 
              alt="TD3C Logo" 
              className="h-16 w-auto mr-3"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Accueil</Link>
              <a href="#courses" className="px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Les Distances</a>
              <a href="#infos-pratiques" className="px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Infos pratiques</a>
              <a href="#sponsors" className="px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Partenaires</a>
              <Link to="/resultats" className="px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Résultats 2025</Link>
              <Link to="/a-propos" className="px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">À propos</Link>
              <a 
                href="https://www.endurancechrono.com/inscription/fr/La_course_des_3_clochers_4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#F09803] text-white px-4 py-2 rounded-md hover:bg-[#d88a03] font-medium"
              >
                S'inscrire
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Accueil</Link>
              <a href="#courses" className="block px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Les Distances</a>
              <a href="#infos-pratiques" className="block px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Infos pratiques</a>
              <a href="#sponsors" className="block px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Partenaires</a>
              <Link to="/resultats" className="block px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">Résultats 2025</Link>
              <Link to="/a-propos" className="block px-3 py-2 rounded-md text-[#1D3A2A] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-medium">À propos</Link>
              <a 
                href="https://www.endurancechrono.com/inscription/fr/La_course_des_3_clochers_4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-[#F09803] text-white rounded-md hover:bg-[#d88a03] font-medium"
              >
                S'inscrire
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;