import React from 'react';

const courses = [
  {
    distance: '31 km',
    name: 'Trail de Bonnelli',
    description: 'Pour les coureurs expérimentés, un parcours technique avec des dénivelés challengeants.',
    elevation: '+950m',
    startTime: '8h00',
    image: '/images/gardon.jpg'
  },
  {
    distance: '20 km',
    name: 'Trail des 3 clochers',
    description: 'Un parcours équilibré, idéal pour les coureurs réguliers.',
    elevation: '+680m',
    startTime: '9h10',
    image: '/images/pont-saint-nicolas.jpg'
  },
  {
    distance: '10 km',
    name: 'Trail de la cigale',
    description: 'Parfait pour s\'initier au trail ou profiter d\'une course courte mais intense.',
    elevation: '+220m',
    startTime: '9h50',
    image: '/images/pont-de-russan.jpg'
  },
  {
    distance: '10 km',
    name: 'Marche',
    description: 'Une belle randonnée pour les marcheurs et les familles.',
    elevation: '+160m',
    startTime: '9h15',
    image: '/images/garrigue-et-gorges-du-gardon.jpeg'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Les Distances</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.distance} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{course.distance}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    Départ {course.startTime}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-700">{course.name}</h4>
                <p className="text-sm text-gray-600 mb-3 flex-grow">{course.description}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Dénivelé : {course.elevation}</span>
                  <a
                    href="https://www.endurancechrono.com/inscription/fr/La_course_des_3_clochers_4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700"
                  >
                    S'inscrire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;