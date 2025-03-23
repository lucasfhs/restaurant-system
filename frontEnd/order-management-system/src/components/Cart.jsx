import { Trash2 } from "lucide-react";

export default function Cart({ cart, removeFromCart }) {
  return (
    <div className="w-72 bg-gray-200 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">🛒 Carrinho</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-3 rounded-md mb-2 shadow-sm">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">R$ {item.price.toFixed(2)}</p>
              </div>
              <button className="text-red-500" onClick={() => removeFromCart(index)}>
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
