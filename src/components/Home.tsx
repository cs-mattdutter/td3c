import React from 'react';
import { Calendar, MapPin, Timer, Trophy } from 'lucide-react';
import Hero from './Hero';
import Courses from './Courses';
import Sponsors from './Sponsors';
import PracticalInfo from './PracticalInfo';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Courses />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Calendar className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Date</h3>
              <p className="text-gray-600 text-center">20 Mars 2025</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lieu</h3>
              <p className="text-gray-600 text-center">Départ : Place du village</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Timer className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horaires</h3>
              <p className="text-gray-600 text-center">À partir de 8h30</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Trophy className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Récompenses</h3>
              <p className="text-gray-600 text-center">Lots pour tous les participants</p>
            </div>
          </div>
        </div>
      </section>
      <PracticalInfo />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
