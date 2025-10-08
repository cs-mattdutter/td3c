import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/images/gardon.jpg"
            alt="Gorges du Gardon"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                La Légende du Trail des Trois Clochers
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Depuis des siècles, la petite commune de Sainte-Anastasie, nichée au cœur de la garrigue
                gardoise, est le théâtre d'une légende transmise de génération en génération. On raconte que
                bien avant que les sentiers ne résonnent sous les foulées des traileurs, notamment entre 1893
                et 1901, des chercheurs d'or intrépides parcouraient ces terres, attirés par les rumeurs de
                pépites scintillantes cachées dans les profondeurs de la terre et le long du lit sinueux du
                Gardon.
              </p>

              <div className="my-8">
                <img
                  src="/images/gardon.jpg"
                  alt="Le Gardon et ses mystères"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 text-center mt-2 italic">Le Gardon, gardien des secrets ancestraux</p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Ces chercheurs, venus des quatre coins de la France, avaient un point commun : ils utilisaient
                les trois clochers de Sainte-Anastasie comme repères, des balises immuables dans le
                paysage. On disait que la ligne imaginaire reliant ces trois édifices sacrés pointait vers le plus
                grand gisement d'or jamais découvert. Beaucoup s'y aventuraient, mais peu trouvaient le
                trésor, car il était bien gardé par les esprits de la garrigue, surveillé par l'œil perçant de
                l'aigle de Bonelli, majestueux gardien des cieux, bercé par le chant incessant des cigales,
                cette symphonie vivante des jours d'été dont on disait qu'elle portait des messages des
                anciens esprits de la terre, et par la discrétion des chiroptères qui, à la tombée de la nuit,
                traçaient des chemins invisibles, connus d'eux seuls et menant parfois à des lieux oubliés.
              </p>

              <div className="my-8">
                <img
                  src="/images/pont-saint-nicolas.jpg"
                  alt="Les trois clochers de Sainte-Anastasie"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 text-center mt-2 italic">Les trois clochers, balises sacrées des chercheurs d'or</p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Un jour, un vieil orpailleur, épuisé par des années de vaines recherches, s'endormit au pied
                d'un des clochers. En songe, il vit les esprits de la nature lui révéler que l'or ne pouvait être
                trouvé que par ceux qui montreraient une persévérance et un courage exceptionnels. L'or
                n'était pas matériel, mais symbolisait la richesse de l'effort, de la découverte de soi, et de la
                beauté des paysages. L'aigle de Bonelli lui apparut alors, planant au-dessus de lui, incarnant la
                liberté et la capacité à s'élever au-dessus des obstacles, tandis que la mélodie des cigales
                résonnait, plus forte que jamais, lui murmurant les secrets d'une richesse bien au-delà de
                l'or, lui rappelant la vie vibrante et la persévérance de la nature. Il sentit également la
                présence furtive des chiroptères, messagers des secrets anciens, lui soufflant que la vraie
                richesse se trouve dans ce qui est caché et subtil, comme les trésors que le Gardon charrie
                dans ses profondeurs.
              </p>

              <div className="my-8">
                <img
                  src="/images/pont-de-russan.jpg"
                  alt="Les sentiers mystérieux de la garrigue"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 text-center mt-2 italic">Les sentiers de la garrigue, chemins des anciens esprits</p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Des générations plus tard, en hommage à ces chercheurs d'or et à cette quête de persévérance,
                naquit le Trail des Trois Clochers. Cet événement, qui propose des parcours de 30 km, 20
                km, 10 km, et une marche, reprend le tracé de ces anciens explorateurs. Chaque foulée sur ces
                sentiers, chaque montée vers un clocher, est un rappel de cette quête ancestrale, qui menait
                autrefois les chercheurs d'or, notamment durant les années 1893 à 1901, jusqu'aux rives
                du Gardon.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Les coureurs et les marcheurs qui s'élancent chaque année ne cherchent plus l'or au sens
                propre, mais ils trouvent une autre forme de richesse : le dépassement de soi, la communion
                avec la nature, et la découverte des trésors cachés de Sainte-Anastasie. On raconte que ceux
                qui franchissent la ligne d'arrivée, quel que soit le parcours choisi, sont touchés par la
                bénédiction des esprits de la garrigue, par la force de l'aigle de Bonelli, par les mystérieux
                chants des cigales, par la sagesse des chiroptères et leurs mystérieux chemins, et par
                l'énergie bienfaisante du Gardon, et emportent avec eux un éclat de l'or symbolique, celui
                de l'accomplissement et de la légende.
              </p>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg border-l-4 border-yellow-400 my-8">
                <p className="text-lg leading-relaxed italic text-gray-800">
                  "Alors, la prochaine fois que vous foulerez les sentiers du Trail des Trois Clochers, souvenez-
                  vous des chercheurs d'or, des esprits qui veillent, de l'aigle de Bonelli qui plane au-dessus de
                  vous, du chant des cigales qui vous accompagne de ses secrets, de la présence discrète des
                  chiroptères et leurs chemins invisibles dans la nuit, et des murmures du Gardon. Qui sait,
                  peut-être sentirez-vous la magie de la légende vous accompagner à chaque pas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
