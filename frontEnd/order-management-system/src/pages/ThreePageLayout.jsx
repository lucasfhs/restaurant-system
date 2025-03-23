import React from 'react'
import { Home, ShoppingCart, User, Bell } from "lucide-react";


const ThreePageLayout = () => {
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
          <p className="text-gray-700">
            Aqui fica o conteúdo principal da página.
          </p>
        </main>

        {/* Coluna Direita (Informações Adicionais) */}
        <aside className="w-72 p-6 bg-gray-200 border-l-2 border-primary space-y-4">
          <h2 className="text-lg font-semibold">Informações</h2>
          <p className="text-gray-600">
            Aqui podem estar detalhes do pedido ou notificações.
          </p>
        </aside>
      </div>
    );
}

export default ThreePageLayout