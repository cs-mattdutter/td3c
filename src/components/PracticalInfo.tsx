import React, { useState } from 'react';
import { FileText, Calendar, Car, HelpCircle } from 'lucide-react';

const PracticalInfo = () => {
  const [activeTab, setActiveTab] = useState('reglement');

  const faq = [
    {
      question: "Puis-je m'inscrire sur place ?",
      answer: "Non, les inscriptions se font uniquement en ligne jusqu'à 2 jours avant la course."
    },
    {
      question: "Y a-t-il une barrière horaire ?", 
      answer: "Oui, une barrière horaire est fixée à 13h00 pour toutes les courses."
    },
    {
      question: "Y a-t-il des douches à l'arrivée ?",
      answer: "Oui, des douches et des vestiaires sont disponibles au gymnase municipal."
    },
    {
      question: "Que dois-je apporter ?",
      answer: "Une pièce d'identité pour le retrait du dossard, et votre matériel obligatoire selon votre course."
    }
  ];

  return (
    <section id="infos-pratiques" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Informations Pratiques</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setActiveTab('reglement')}
            className={`p-4 text-left flex items-center gap-2 rounded-lg ${
              activeTab === 'reglement'
                ? 'bg-[#16a34a] text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <FileText className="w-5 h-5" />
            Règlement
          </button>
          <button
            onClick={() => setActiveTab('dossards')}
            className={`p-4 text-left flex items-center gap-2 rounded-lg ${
              activeTab === 'dossards'
                ? 'bg-[#16a34a] text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <Calendar className="w-5 h-5" />
            Retrait des dossards
          </button>
          <button
            onClick={() => setActiveTab('acces')}
            className={`p-4 text-left flex items-center gap-2 rounded-lg ${
              activeTab === 'acces'
                ? 'bg-[#16a34a] text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <Car className="w-5 h-5" />
            Comment venir
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`p-4 text-left flex items-center gap-2 rounded-lg ${
              activeTab === 'faq'
                ? 'bg-[#16a34a] text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            FAQ
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
          {activeTab === 'reglement' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Règlement de la course</h3>
              <div className="prose max-w-none">
                <p className="mb-4">Le règlement complet de la course est disponible en téléchargement.</p>
                <a
                  href="/reglement-trail-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#F09803] text-white px-6 py-3 rounded-md hover:bg-[#d88a03] transition-colors"
                >
                  Télécharger le règlement (PDF)
                </a>
              </div>
            </div>
          )}

          {activeTab === 'dossards' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Retrait des dossards</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">La veille de la course</h4>
                  <p>Vendredi 04 avril 2026 de 14h à 19h</p>
                  <p>Salle des fêtes de Sainte-Anastasie</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Le jour de la course</h4>
                  <p>Samedi 05 avril 2026 à partir de 7h30</p>
                  <p>Sur place, au village départ</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Documents à présenter :</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Pièce d'identité</li>
                    <li>Licence FFA ou certificat médical</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'acces' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Comment venir ?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">En voiture</h4>
                  <p>Parking gratuit à proximité du départ</p>
                  <div className="mt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11491.007026420084!2d4.321994276314869!3d43.94381098743441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b4340c6a53f1b1%3A0x600caaafe10d51ed!2sAubarne%2C%2030190%20Sainte-Anastasie!5e0!3m2!1sfr!2sfr!4v1757438993776!5m2!1sfr!2sfr"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                    <div className="mt-4 text-center">
                      <a 
                        href="https://maps.app.goo.gl/9WcvFvniqncZ8uip8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Ouvrir dans Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Questions fréquentes</h3>
              <div className="space-y-4">
                {faq.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{item.question}</h4>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;