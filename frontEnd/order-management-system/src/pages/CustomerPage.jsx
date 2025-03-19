import { useState } from "react";
import { ShoppingCart, CheckCircle, Trash2 } from "lucide-react";

const menuItems = [
  { id: 1, name: "Pizza", price: 39.9 },
  { id: 2, name: "Hambúrguer", price: 24.9 },
  { id: 3, name: "Batata Frita", price: 12.9 },
  { id: 4, name: "Refrigerante", price: 7.5 },
];

export default function CustomerPage() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, { ...item, id: cart.length + 1 }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 pt-24">
      {" "}
      {/* Added mt-16 for margin top */}
      <h1 className="text-2xl font-bold mb-4">Menu do Restaurante</h1>
      <div className="w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-2">Cardápio</h2>
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
            >
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500">R$ {item.price.toFixed(2)}</p>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => addToCart(item)}
              >
                <ShoppingCart size={16} className="inline mr-1" />
                Adicionar
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-2">Carrinho</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio</p>
        ) : (
          <div className="bg-white p-4 rounded-xl shadow-md">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <p className="font-semibold">{item.name}</p>
                <div className="flex items-center">
                  <p className="text-gray-500">R$ {item.price.toFixed(2)}</p>
                  <button
                    className="ml-2 text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            <button
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mt-3"
              onClick={placeOrder}
            >
              <CheckCircle size={16} className="inline mr-1" />
              Finalizar Pedido
            </button>
          </div>
        )}

        {orderPlaced && (
          <div className="mt-4 p-4 bg-green-200 text-green-700 rounded-lg">
            <p>✅ Pedido realizado com sucesso!</p>
          </div>
        )}
      </div>
    </div>
  );
}
