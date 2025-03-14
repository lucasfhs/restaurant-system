import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-6 text-center">
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
    </footer>
  );
}

export default Footer