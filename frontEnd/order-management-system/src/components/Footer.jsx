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

        {/* Social Icons */}
      {/* <div className="bg-gray-500 w-full bottom-4 flex justify-center gap-4 p-4 xl:mx-auto">
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
      </div> */}

      </div>
    </footer>
  );
}

export default Footer