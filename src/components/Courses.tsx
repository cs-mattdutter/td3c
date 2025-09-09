import React from 'react';

const courses = [
  {
    distance: '22 km',
    name: 'Trail de Bonelli',
    description: 'Pour les coureurs expérimentés, un parcours technique avec des dénivelés challengeants.',
    elevation: '+600m',
    startTime: '9h10',
    image: '/images/gardon.jpg'
  },
  {
    distance: '13 km',
    name: 'Trail des 3 clochers',
    description: 'Un parcours équilibré, idéal pour les coureurs réguliers.',
    elevation: '+300m',
    startTime: '9h50',
    image: '/images/pont-saint-nicolas.jpg'
  },
  {
    distance: '8 km',
    name: 'Trail de la cigale',
    description: 'Parfait pour s\'initier au trail ou profiter d\'une course courte mais intense.',
    elevation: '+200m',
    startTime: '9h30',
    image: '/images/pont-de-russan.jpg'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Les Distances</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.distance} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{course.distance}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Départ {course.startTime}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-700">{course.name}</h4>
                <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
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