import React, { useEffect, useRef, useState } from "react";
import ResponsiveDropdown from "./ResponsveDropdown";
import useScrollProgress from "../hooks/useScrollProgress";

export default function Header() {
  const items = [
    { title: 'Home', link: '/' },
    { title: 'Sobre', link: '/sobre' },
    { title: 'Serviços', link: '/servicos' },
    { title: 'Contato', link: '/contato' },
  ];
  
  const { scrollProgress, navbarRef: headerRef } = useScrollProgress();

  return (
    <div
      ref={headerRef}
      id="globalHeader"
      className={`w-full h-18 z-50 fixed transition-all duration-200 ${scrollProgress > 0 ? "glass" : ""}`}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${scrollProgress * 0.2})`, // Dynamically set background color
      }}
      // style={{
      //   backgroundColor: `rgba(255, 255, 255, ${scrollProgress * 0.3})`, // Aumenta a opacidade de 0 a 0.8
      //   backdropFilter: `blur(${scrollProgress * 10}px)`, // Aumenta o desfoque de 0 a 10px
      //   boxShadow: scrollProgress > 0 ? "0px 4px 10px rgba(0,0,0,0.1)" : "none",
      // }}
    >
      <div
        id="globalHeader-content"
        className="h-full max-w-[1024px] mx-auto flex items-center justify-between p-4 text-white"
      >
        {/* Logo */}
        <div>
          <h1 className="flex items-center justify-center gap-4">
            <div className="text-4xl font-bold">Grupo</div>
            <span className="text-3xl italic font-serif underline">Zero</span>
          </h1>
        </div>

        {/* <ResponsiveDropdown items={items} /> */}

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
    </div>
  );
}
