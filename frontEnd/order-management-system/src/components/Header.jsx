import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-around p-4 text-white">
      {/* Logo */}
      <div>
        <h1 className="flex items-center justify-center gap-4">
          <div className="text-4xl font-bold">Grupo</div>
          <span className="text-3xl italic font-serif underline">Zero</span>
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="#menu"
          className="relative text-2xl font-bold text-white transition-colors duration-200 hover:text-red-500 after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
        >
          Cardápio
        </a>
        <a
          href="#brief"
          className="relative text-2xl font-bold text-white transition-colors duration-200 hover:text-red-500 after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
        >
          Depoimentos
        </a>
        <a
          href="#about"
          className="relative text-2xl font-bold text-white transition-colors duration-200 hover:text-red-500 after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
        >
          Sobre
        </a>
        <a
          href="#contact"
          className="relative text-2xl font-bold text-white transition-colors duration-200 hover:text-red-500 after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
        >
          Contato
        </a>
      </div>
    </div>
  );
}
