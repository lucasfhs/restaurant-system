import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <header
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="h-full flex flex-col items-center justify-center bg-opacity-50 text-white text-center px-6">
          <h2 className="text-5xl font-extrabold">
            Bem-vindo ao Nosso Restaurante
          </h2>
          <p className="mt-4 text-lg">
            Experimente pratos incríveis e sabores inesquecíveis.
          </p>
          <Link
            to=""
            // className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
            className="custom-button"
          >
            Criar conta
          </Link>
        </div>
      </header>

      {/* Sobre nós */}
      <section id="about" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-red-600">
          Sobre Nós
        </h2>
        <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
          Nosso restaurante oferece uma experiência gastronômica única, com
          ingredientes frescos e receitas autênticas preparadas por chefs
          renomados.
        </p>
      </section>

      {/* Menu em destaque */}
      <section id="menu" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-600">
            Nosso Menu
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <img
                  className="w-full h-40 object-cover rounded-md"
                  src={`https://placehold.co/300x200`}
                  alt="Prato"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Prato Especial {item}
                </h3>
                <p className="text-gray-600 mt-2">
                  Descrição deliciosa do prato.
                </p>
                <p className="text-red-600 font-bold mt-2">R$ {item * 20},00</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="testimonials" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-red-600">
          Depoimentos
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="bg-gray-100 rounded-lg shadow-lg p-6">
              <p className="text-gray-700">
                "A melhor experiência gastronômica que já tive! Atendimento
                impecável."
              </p>
              <p className="text-right font-bold mt-4">- Cliente {item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <footer id="contact" className="bg-gray-900 text-white py-6 text-center">
        <h2 className="text-xl font-bold">Entre em Contato</h2>
        <p>📍 Endereço: Rua do Sabor, 123 - Cidade</p>
        <p>📞 Telefone: (11) 99999-9999</p>
        <p>📧 Email: contato@restaurante.com</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-red-500">
            Facebook
          </a>
          <a href="#" className="hover:text-red-500">
            Instagram
          </a>
          <a href="#" className="hover:text-red-500">
            Twitter
          </a>
        </div>
      </footer> */}
    </div>
  );
};

export default LandingPage;
