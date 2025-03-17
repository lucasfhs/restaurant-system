import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="glass shadow-md fixed w-full z-10">
        <div className=" container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            🍽️ Restaurante
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/customer" className="hover:text-primary">
                Cliente
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="hover:text-primary">
                Entregador
              </Link>
            </li>
            <li>
              <Link to="/kitchen" className="hover:text-primary">
                Cozinha
              </Link>
            </li>
            <li>
              <Link to="/#menu" className="hover:text-primary">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/#testimonials" className="hover:text-primary">
              Depoimentos
              </Link>
            </li>
            <li>
              <Link to="/#about" className="hover:text-primary">
              Sobre
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="hover:text-primary">
              Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar