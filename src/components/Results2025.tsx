import React from 'react';

const Results2025 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div id="resultats" className="relative pt-16">
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                PODIUM 2025
              </h1>
              <div className="bg-white/90 backdrop-blur rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
                <div className="text-left text-gray-800 space-y-6">
                  <p className="text-lg font-semibold text-green-600 mb-4">
                    TRAIL DE SAINTE ANASTASIE 30190
                  </p>
                  
                  <p className="text-base leading-relaxed">
                    Le Trail des 3 Clochers est un événement qui a lieu dans le Gard depuis la commune de Sainte-Anastasie. 
                    La commune est réputée pour ses nombreux bâtiments historiques classés comme la baume Latrone, 
                    l'oppidum de Castelvielh et le prieuré Saint-Nicolas de Campagnac. 3 courses au programme sur les hauteurs 
                    des Gorges du Gardon, que nous médiatisons sur ce site.
                  </p>
                  
                  <p className="text-lg font-semibold text-green-600">
                    VIVEZ AVEC NOUS LE TRAIL 2026 DE SAINTE ANASTASIE
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base leading-relaxed mb-4">
                      Vous pouvez nous contacter sur <a href="mailto:trailenvrac@gmail.com" className="text-green-600 hover:text-green-700 font-semibold">trailenvrac@gmail.com</a> 
                      ou au <a href="tel:0659643343" className="text-green-600 hover:text-green-700 font-semibold">06 59 64 33 43</a> patrice
                    </p>
                    
                    <p className="text-base leading-relaxed font-medium text-gray-700">
                      Un grand MERCI aux très nombreux bénévoles qui ont dédié leur journée au succès de ce trail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Résultats 2025
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 - Trail 22km */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">22km</h3>
                  <p className="text-lg font-bold text-orange-500 mb-1">650 D+</p>
                  <p className="text-sm italic text-gray-600 mb-4">Trail de Bonnelli</p>
                  
                  {/* GPX 3D Button */}
                  <div className="flex justify-center mb-4">
                    <a 
                      href="https://www.betrail.run/race/trail.des.3.clochers/2025/22km/gpx-path#d" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-lg flex flex-col items-center justify-center w-12 h-12 hover:bg-red-600 transition-colors duration-200"
                    >
                      <span>GPX</span>
                      <span>3D</span>
                    </a>
                  </div>
                  
                  <p className="text-sm font-bold text-gray-700">206 FINISHERS</p>
                </div>
                
                {/* Results List */}
                <div className="space-y-2">
                  {/* Male Category */}
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">1</span>
                      <span className="font-semibold text-gray-800 text-sm">PARADIS TIMOTHÉ</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">2</span>
                      <span className="font-semibold text-gray-800 text-sm">MARTIN</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">3</span>
                      <span className="font-semibold text-gray-800 text-sm">SCHILLING SIMON</span>
                    </div>
                  </div>
                  
                  {/* Female Category */}
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">1</span>
                      <span className="font-semibold text-gray-800 text-sm">DELEUZE CECILE</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">2</span>
                      <span className="font-semibold text-gray-800 text-sm">HREBICEK MELANIE</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">3</span>
                      <span className="font-semibold text-gray-800 text-sm">TROCME BEATRICE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 - Trail 13km */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">13km</h3>
                  <p className="text-lg font-bold text-orange-500 mb-1">425 D+</p>
                  <p className="text-sm italic text-gray-600 mb-4">Trail des 3 Clochers</p>
                  
                  {/* GPX 3D Button */}
                  <div className="flex justify-center mb-4">
                    <a 
                      href="https://www.betrail.run/race/trail.des.3.clochers/2025/13km/gpx-path#d" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-lg flex flex-col items-center justify-center w-12 h-12 hover:bg-red-600 transition-colors duration-200"
                    >
                      <span>GPX</span>
                      <span>3D</span>
                    </a>
                  </div>
                  
                  <p className="text-sm font-bold text-gray-700">257 FINISHERS</p>
                </div>
                
                {/* Results List */}
                <div className="space-y-2">
                  {/* Male Category */}
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">1</span>
                      <span className="font-semibold text-gray-800 text-sm">AUBERT NICOLAS</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">2</span>
                      <span className="font-semibold text-gray-800 text-sm">GONZALEZ BASTIEN</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">3</span>
                      <span className="font-semibold text-gray-800 text-sm">DUFOURNAUD Vincent</span>
                    </div>
                  </div>
                  
                  {/* Female Category */}
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">1</span>
                      <span className="font-semibold text-gray-800 text-sm">SAPEDE CHLOE</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">2</span>
                      <span className="font-semibold text-gray-800 text-sm">HARTVICK EMILIE</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">3</span>
                      <span className="font-semibold text-gray-800 text-sm">ARNOUX MARION</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 - Trail 8km */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">8km</h3>
                  <p className="text-lg font-bold text-orange-500 mb-1">160 D+</p>
                  <p className="text-sm italic text-gray-600 mb-4">Trail de la Cigale</p>
                  
                  {/* GPX 3D Button */}
                  <div className="flex justify-center mb-4">
                    <a 
                      href="https://www.betrail.run/race/trail.des.3.clochers/2025/8km/gpx-path#d" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-lg flex flex-col items-center justify-center w-12 h-12 hover:bg-red-600 transition-colors duration-200"
                    >
                      <span>GPX</span>
                      <span>3D</span>
                    </a>
                  </div>
                  
                  <p className="text-sm font-bold text-gray-700">116 FINISHERS</p>
                </div>
                
                {/* Results List */}
                <div className="space-y-2">
                  {/* Male Category */}
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">1</span>
                      <span className="font-semibold text-gray-800 text-sm">SALHI KAYSSON</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">2</span>
                      <span className="font-semibold text-gray-800 text-sm">VILLARET JÉRÔME</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">3</span>
                      <span className="font-semibold text-gray-800 text-sm">DE VENDEGIES XAVIER</span>
                    </div>
                  </div>
                  
                  {/* Female Category */}
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">1</span>
                      <span className="font-semibold text-gray-800 text-sm">DUGAS FLAVIE</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">2</span>
                      <span className="font-semibold text-gray-800 text-sm">BACCICHET FANTINE</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800 w-4">3</span>
                      <span className="font-semibold text-gray-800 text-sm">CHRISTOPHE MAGALI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Vidéo de l'événement
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/d4oNsjE-E74?start=3"
                title="Trail des 3 Clochers 2025"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results2025;
