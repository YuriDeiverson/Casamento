import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// TODO: Troque o placeholder pela imagem que representa o dress code
// import dressCodeImage from "/src/assets/adress.png"; // Exemplo de caminho para a imagem

const DressCode: React.FC = () => {
  return (
    <section id="dresscode" className="bg-[#F4F4F4] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        {/* --- Coluna de Texto --- */}
        <div className="flex-1 flex flex-col items-start relative md:pl-8">
          <div className="absolute left-0 top-0 w-1 h-20 bg-[#d8b348] hidden md:block" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#d8b348] mb-6 pl-4 md:pl-0">
            Dress Code
          </h2>

          <div className="text-gray-700 space-y-6 text-base sm:text-lg leading-relaxed mt-4 pl-4 md:pl-0">
            <p>
              Nosso casamento será uma celebração intimista e vai acontecer em um
              restaurante charmoso que combina perfeitamente com o momento
              especial que estamos vivendo.
            </p>
            <p>
              Queremos que vocês se sintam confortáveis e lindos, mas com um
              toque de sofisticação. Não precisa ir de gala, nem usar salto se
              não quiser! O importante é respeitar o momento, o espaço e, claro,
              essa nova fase que estamos vivendo como casal 💍
            </p>

            <div className="bg-white/60 p-6 rounded-2xl border border-gray-200">
              <p className="font-bold text-gray-800">
                👉 Dress code sugerido:
              </p>
              <p>Minimalista, elegante e com a sua personalidade.</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 text-xl mb-4 mt-6">
                ✨ Evitem:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="text-[#d8b348] mt-1.5"
                  />
                  <span>
                    <strong>Branco e off-white</strong>, que são cores
                    reservadas à noiva (sim, a tradição permanece viva! 😄)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="text-[#d8b348] mt-1.5"
                  />
                  <span>
                    <strong>Looks informais demais</strong> (tipo chinelo e
                    camiseta, por exemplo 🙈)
                  </span>
                </li>
              </ul>
            </div>

            <p className="pt-6 border-t border-gray-200 mt-8">
              Ah! E o mais importante é a sua presença e seu carinho. Obrigada
              por fazer parte dessa história! 🖤
            </p>
            
          </div>
        </div>

        {/* --- Coluna da Imagem ---
        <div className="flex-1 flex justify-center w-full mt-10 md:mt-0">
          <img
            src={dressCodeImage}
            alt="Sugestão de paleta de cores para o Dress Code"
            className="w-full max-w-md rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/600x800/d1d5db/374151?text=Imagem+Dress+Code';
              e.currentTarget.onerror = null;
            }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default DressCode;
