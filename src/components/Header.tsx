import React from "react";
import imagemCriancas from "/src/assets/foto-removebg-preview.png";
import iconHistoria from "/src/assets/Vector.png";
import iconMenu from "/src/assets/launch.png";
import iconEndereco from "/src/assets/adress.png";
import iconLista from "/src/assets/list.png";

const Header: React.FC = () => {
  return (
    <header className="relative w-full bg-[#F4F4F4] py-48 px-6 md:px-12 mb-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative flex-1 flex flex-col items-start md:pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-1 h-20 bg-yellow-600 hidden md:block" />

          <div className="flex flex-col w-full">
            <h1 className="text-xl sm:text-2xl text-gray-700 font-light">
              Bem-vindos ao <span className="text-yellow-600">💛</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
              Casamento de Yuri e Leila
            </h2>

            <p className="text-gray-500 italic mt-4 text-base sm:text-lg max-w-lg">
              “O amor é o encontro de duas almas dispostas a serem felizes.”
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-16 w-full max-w-lg">
              <a href="#about" className="flex items-center gap-4 text-gray-700 font-medium hover:text-yellow-600 transition">
                <img src={iconHistoria} alt="História" className="w-6 h-6" />
                Nossa história
              </a>
              <a href="#adress" className="flex items-center gap-4 text-gray-700 font-medium hover:text-yellow-600 transition">
                <img src={iconEndereco} alt="Endereço" className="w-6 h-6" />
                Endereço
              </a>
              <a href="#menu" className="flex items-center gap-4 text-gray-700 font-medium hover:text-yellow-600 transition">
                <img src={iconMenu} alt="Menu" className="w-6 h-6" />
                Menu
              </a>
              <a href="#gifts" className="flex items-center gap-4 text-gray-700 font-medium hover:text-yellow-600 transition">
                <img src={iconLista} alt="Lista" className="w-6 h-6" />
                Lista de presentes
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 hidden md:flex justify-end">
          <img
            src={imagemCriancas}
            alt="Foto do casal criança"
            className="w-full max-w-sm rounded-2xl  object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="block w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-yellow-600 hover:bg-gray-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;