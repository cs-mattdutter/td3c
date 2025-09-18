import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2026-04-05T09:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="accueil" className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://sainte-anastasie.fr/app/uploads/sites/17/2021/12/trail-nature-18.jpg"
          alt="Trail running à Sainte-Anastasie"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trails des 3 clochers 2026
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Rejoignez-nous le 05 avril 2026 pour une aventure inoubliable à travers des paysages exceptionnels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://www.endurancechrono.com/inscription/fr/La_course_des_3_clochers_4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 text-center"
              >
                S'inscrire maintenant
              </a>
              <a
                href="#courses"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 text-center"
              >
                Découvrir les parcours
              </a>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-gray-800 text-center text-xl font-semibold mb-4">Départ dans :</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-100 rounded-lg p-3 shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-1 text-center">{timeLeft.days}</div>
                  <div className="text-xs text-gray-600 text-center font-medium">Jours</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-1 text-center">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-600 text-center font-medium">Heures</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-1 text-center">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-600 text-center font-medium">Minutes</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-1 text-center">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-600 text-center font-medium">Secondes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;