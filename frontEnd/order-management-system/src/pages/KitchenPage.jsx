import { useState } from "react";
import { ChefHat, Clock, CheckCircle } from "lucide-react";

export default function KitchenPage() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "João Silva", items: ["Pizza", "Refrigerante"], status: "Recebido" },
    { id: 2, customer: "Maria Oliveira", items: ["Hambúrguer", "Batata Frita"], status: "Recebido" },
  ]);

  const updateStatus = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          if (order.status === "Recebido") return { ...order, status: "Em Preparo" };
          if (order.status === "Em Preparo") return { ...order, status: "Pronto" };
        }
        return order;
      })
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-20"> {/* Added pt-16 for padding */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold mb-4">Painel da Cozinha</h1>

        <div className="w-full max-w-2xl">
          <h2 className="text-lg font-semibold mb-2">Pedidos</h2>

          {orders.length === 0 ? (
            <p className="text-gray-500">Nenhum pedido pendente</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className={`p-4 rounded-xl shadow-md flex justify-between items-center mb-3 ${
                  order.status === "Recebido"
                    ? "bg-yellow-100"
                    : order.status === "Em Preparo"
                    ? "bg-blue-100"
                    : "bg-green-100"
                }`}
              >
                <div>
                  <p className="font-semibold">{order.customer}</p>
                  <p className="text-gray-700 text-sm">
                    Itens: {order.items.join(", ")}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Status: {order.status}
                  </p>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    order.status === "Recebido"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : order.status === "Em Preparo"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-400 cursor-not-allowed"
                  } text-white`}
                  onClick={() => updateStatus(order.id)}
                  disabled={order.status === "Pronto"}
                >
                  {order.status === "Recebido" ? (
                    <ChefHat size={16} className="inline mr-1" />
                  ) : order.status === "Em Preparo" ? (
                    <Clock size={16} className="inline mr-1" />
                  ) : (
                    <CheckCircle size={16} className="inline mr-1" />
                  )}
                  {order.status === "Recebido"
                    ? "Iniciar Preparo"
                    : order.status === "Em Preparo"
                    ? "Finalizar Pedido"
                    : "Pronto"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
