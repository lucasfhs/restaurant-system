import React from 'react'
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-600 text-white py-6 text-center ">
      <h2 className="text-xl font-bold">Entre em Contato</h2>
      <p>📍 Endereço: Rua do Sabor, 123 - Cidade</p>
      <p>📞 Telefone: (11) 99999-9999</p>
      <p>📧 Email: contato@restaurante.com</p>
      <div className="flex justify-center text-center space-x-6 mt-4">
        <a href="#" className="hover:text-primary">
          Facebook
          <Facebook size={32} className='mx-auto'/>
        </a>
        <a href="#" className="hover:text-primary">
          Instagram
          <Instagram size={32} className='mx-auto'/>
        </a>
        <a href="#" className="hover:text-primary">
          Twitter
          <Twitter size={32} className='mx-auto'/>
        </a>
      </div>
    </footer>
  );
}

export default Footer