import React from "react";
import imagemJuntos from "/src/assets/juntos.jpg"; // Certifique-se de usar o caminho correto para a imagem do casal

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#F4F4F4] py-30 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        
        {/* Texto à esquerda */}
        <div className="flex-1 flex flex-col items-start relative pl-0 md:pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 h-20 bg-yellow-600 hidden md:block" />
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6 pl-4 md:pl-0">
              Nossa história
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mt-4 pl-4 md:pl-0">
              Leila e Yuri se conheceram aos 19 anos, através de um aplicativo de namoro.
              Na época, não imaginavam que algumas conversas tímidas, encontros casuais e
              afinidades improváveis seriam o começo de algo tão forte. Com o tempo, aquele
              sentimento cresceu, sobreviveu a fases difíceis, amadureceu… e hoje, está
              pronto para dar um novo passo. Eles não são um casal de conto de fadas, nem
              um clichê de comédia romântica. São só duas pessoas reais, com seus jeitos
              únicos, escrevendo uma história cheia de verdade, parceria e afeto.
              
              <br /><br />
              
              Ela é ariana, intensa, criativa, viciada em livros de fantasia, ásia e dona
              de uma mente inquieta. Ele, escorpiano, misterioso, tranquilo, estrategista
              nato e fã declarado de Star Wars. Juntos, preferem o sofá e uma maratona de
              animes a qualquer balada. São apaixonados por animais, bons diálogos e tudo
              que envolve tecnologia, imaginação e paz.
              
              <br /><br />
              
              Ela é copywriter. Ele é desenvolvedor. E juntos formam a dupla perfeita:
              Dev e copy, ele constrói os códigos, ela dá alma às palavras. Uma combinação
              improvável para uns, mas perfeita para quem acredita que o amor mora nos
              detalhes, inclusive nos mais nerds.
              
              <br /><br />
              
              Essa é só a introdução de um novo capítulo. E a história está só começando.
            </p>
        </div>

        {/* Imagem à direita */}
        <div className="flex-1 flex justify-center w-full mt-10 md:mt-0">
          <img
            src={imagemJuntos}
            alt="Leila e Yuri"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;