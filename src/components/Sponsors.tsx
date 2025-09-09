import React from 'react';

const sponsors = [
  {
    name: 'ACEF',
    logo: '/images/acef.png'
  },
  {
    name: 'Banque Populaire',
    logo: '/images/banquepop.png'
  },
  {
    name: 'Carrefour',
    logo: '/images/Carrefour2.png'
  },
  {
    name: 'CD Gard',
    logo: '/images/cdgard.png'
  },
  {
    name: 'Decathlon',
    logo: '/images/decathlon.png'
  },
  {
    name: 'Groupama',
    logo: '/images/groupama.png'
  },
  {
    name: 'Saint Astasie',
    logo: '/images/saintastasie.png'
  }
];

const Sponsors = () => {
  return (
    <div id="sponsors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Partenaires</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-none w-[200px] mx-8"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;