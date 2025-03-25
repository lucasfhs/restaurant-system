import React, { useState } from 'react'
import { Home, ShoppingCart, User, Bell } from "lucide-react";
import ProductTable from '../components/CardContainer';
import Cart from '../components/Cart';

const sampleProducts = [
  { _id: 1, name: "Pizza", description: "Deliciosa pizza de queijo", price: 39.90, images: ["https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"] },
  { _id: 2, name: "Hambúrguer", description: "Suculento hambúrguer artesanal", price: 24.90, images: ["https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"] },
  { _id: 3, name: "Batata Frita", description: "Batata frita crocante", price: 12.90, images: ["https://images.unsplash.com/photo-1598679253544-2c97992403ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"] },
];

const CustomerMainPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

    return (
      <div className="min-h-screen flex pt-16">
        {/* Coluna Esquerda (Navegação) */}
        <aside className="glass bg-gradient-to-b from-primary to-gray-100 w-16 glass text-white flex flex-col items-center py-6 space-y-6">
          <Home size={24} />
          <ShoppingCart size={24} />
          <User size={24} />
          <Bell size={24} />
        </aside>

        {/* Coluna Central (Página Principal) */}
        <main className="flex-1 bg-white p-6">
          <h1 className="text-xl font-bold mb-4">Página Principal</h1>
          <ProductTable products={sampleProducts} addToCart={addToCart} />
        </main>

        {/* Coluna Direita (Informações Adicionais) */}
        <aside className="w-72 p-6 bg-gray-200 border-l-2 border-primary space-y-4">
          <h2 className="text-lg font-semibold">Carrinho</h2>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </aside>
      </div>
    );
}

export default CustomerMainPage