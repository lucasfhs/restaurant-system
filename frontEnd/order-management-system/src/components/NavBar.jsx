import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-2xl font-bold text-primary">🍽️ Restaurante</Link>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-primary">
                Sobre
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-primary">
                Menu
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-primary">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar