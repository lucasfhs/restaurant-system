import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-red-600">🍽️ Restaurante</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-red-500">
                Sobre
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-red-500">
                Menu
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-red-500">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500">
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