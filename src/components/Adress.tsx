import React from "react";
import imagemForneto from "/src/assets/forneto-pizzaria 1.png";

const Adress: React.FC = () => {
  return (
    <section id="adress" className="bg-[#F4F4F4] py-24 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Texto */}
        <div className="flex-1 flex flex-col items-start relative pl-0 md:pl-8">
          
         

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6 pl-4 md:pl-0">
            Local
          </h2>
          {/* Linha amarela abaixo do título */}
          <div className="w-16 h-1 bg-yellow-600 mb-6 ml-4 md:ml-0" />

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify pl-4 md:pl-0">
            Data: 28 de Novembro às 18 hrs
            <br /><br />
            Forneto Restaurante, R. José Maia Gomes, 173
            <br />
            Jatiúca, Maceió – AL, 57036-240
          </p>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={imagemForneto}
            alt="Forneto Restaurante"
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Adress;
