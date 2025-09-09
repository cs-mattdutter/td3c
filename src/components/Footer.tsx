import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Trail en Vrac</h3>
            <p className="text-gray-600">
              Une course nature exceptionnelle au cœur de paysages magnifiques.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@trailenvrac.fr" className="text-gray-600 hover:text-green-600 flex items-center gap-2 transition-colors duration-200">
                <Mail className="w-5 h-5" />
                contact@trailenvrac.fr
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2026 Trail en Vrac. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;