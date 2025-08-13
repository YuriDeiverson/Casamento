import React from "react";

// TODO: Troque os placeholders pelas suas 6 fotos do casal
// Sugestão: Coloque as fotos em ordem cronológica, da mais antiga para a mais nova.
import casalFoto1 from "/src/assets/casal-foto-1.jpg"; // Foto mais antiga
import casalFoto2 from "/src/assets/casal-foto-2.jpg";
import casalFoto3 from "/src/assets/casal-foto-3.jpg";
import casalFoto5 from "/src/assets/casal-foto-5.jpg";
import casalFoto6 from "/src/assets/casal-foto-6.jpg";
import casalFoto7 from "/src/assets/casal-foto-7.jpg"; // Foto mais recente

const About: React.FC = () => {
  const photos = [
    { src: casalFoto1, alt: "2024", caption: "// commit: Curtindo em SP", position: "top-0 left-10", rotation: "-rotate-3" },
    { src: casalFoto2, alt: "Primeira viagem", caption: "// feature:Primeira viagem", position: "top-32 right-8", rotation: "rotate-2" },
    { src: casalFoto3, alt: "Um momento especial", caption: "// refactor: 2023", position: "top-64 left-12", rotation: "rotate-4" },
    { src: casalFoto5, alt: "Aniversário", caption: "// merge: 2022", position: "top-96 right-16", rotation: "-rotate-5" },
    { src: casalFoto6, alt: "Noivado", caption: "// release: v2.0-noivado", position: "top-[30rem] left-8", rotation: "rotate-2" },
    { src: casalFoto7, alt: "Foto recente", caption: "// deploy: --Inicio", position: "top-[38rem] right-10", rotation: "-rotate-3" },
  ];

  return (
    <section id="about" className="bg-[#F4F4F4] py-24 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16 md:gap-20">
        {/* --- Coluna de Texto à esquerda --- */}
        <div className="flex-1 flex flex-col items-start relative md:pl-8 z-10">
          <div className="absolute left-0 top-0 w-1 h-20 bg-yellow-600 hidden md:block" />
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6 pl-4 md:pl-0">
            Nossa história
          </h2>

          <div className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 pl-4 md:pl-0 space-y-6">
            <p>
              Leila e Yuri se conheceram aos 19 anos, através de um aplicativo
              de namoro. Na época, não imaginavam que algumas conversas
              tímidas, encontros casuais e afinidades improváveis seriam o
              começo de algo tão forte. Com o tempo, aquele sentimento
              cresceu, sobreviveu a fases difíceis, amadureceu… e hoje, está
              pronto para dar um novo passo.
            </p>
            <p>
              Eles não são um casal de conto de fadas, nem um clichê de comédia
              romântica. São só duas pessoas reais, com seus jeitos únicos,
              escrevendo uma história cheia de verdade, parceria e afeto.
            </p>
            <p>
              Ela é copywriter. Ele é desenvolvedor. E juntos formam a dupla
              perfeita: Dev e copy, ele constrói os códigos, ela dá alma às
              palavras. Uma combinação improvável para uns, mas perfeita para
              quem acredita que o amor mora nos detalhes, inclusive nos mais
              nerds. Essa é só a introdução de um novo capítulo. E a história
              está só começando.
            </p>
          </div>
        </div>

        {/* --- Colagem de Imagens "Linha do Tempo" à direita --- */}
        <div className="flex-1 flex justify-center items-start w-full mt-10 md:mt-0 min-h-[800px]">
          <div className="relative w-full max-w-lg h-full">
            {/* A Linha do Tempo em SVG */}
            <svg
              className="absolute top-0 left-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 800"
              preserveAspectRatio="none"
            >
              <path
                d="M 200 0 V 120 L 300 220 V 320 L 150 450 V 550 L 280 680 V 800"
                stroke="#d1d5db"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8 8"
              />
            </svg>

            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute transform transition-transform duration-300 ease-in-out hover:scale-110 hover:z-20 group ${photo.position} ${photo.rotation}`}
              >
                {/* Polaroid */}
                <div className="bg-white p-2 pb-2 rounded-sm shadow-xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-40 h-40 object-cover"
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/300x300/FBBF24/374151?text=Foto+${index + 1}`; }}
                  />
                  <p className="font-mono text-xs text-gray-400 mt-2 pl-1 group-hover:text-yellow-600 transition-colors">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
