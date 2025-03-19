import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Importando o ícone do WhatsApp
import Header from "../components/Header";
import LoginOptions from "../components/LoginOptions";

const LandingPage = () => {
  return (
    <div className="h-full w-full overflow-auto bg-gray-50">
      <div className="h-screen bg-hero bg-cover bg-center">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
          {/* Main Content */}
          <main className="flex flex-col justify-center p-6 text-white sm:p-12">
            {/* Slogan */}
            <aside className="max-w-lg space-y-6">
              <h3 className="text-4xl sm:text-6xl font-bold leading-tight">
                Sabores que conquistam, momentos que marcam.
              </h3>
              <p className="text-xl sm:text-2xl">
                Fique ligado para ter a melhor experiência de compra sem
                precisar enfrentar restaurantes lotados.
              </p>
              <a
                href="https://wa.me/1234567890" // Substitua pelo número real
                className="flex items-center mt-6 text-xl bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              >
                <FaWhatsapp size={24} className="mr-3" />
                Fale conosco no WhatsApp
              </a>
            </aside>
          </main>

          {/* Login Options */}
          <div className="flex justify-center items-center p-6">
            <LoginOptions />
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-6 flex">
          <a
            href="https://www.instagram.com"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.facebook.com"
            className="text-white hover:text-blue-600 transition duration-300"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://www.twitter.com"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <Twitter size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
