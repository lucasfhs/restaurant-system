import { useState } from "react";
import { MapPin, CheckCircle, Truck } from "lucide-react";

export default function DeliveryDashboard() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "João Silva", address: "Rua A, 123", status: "Pronto" },
    { id: 2, customer: "Maria Oliveira", address: "Av. B, 456", status: "Pronto" },
  ]);
  const [currentOrder, setCurrentOrder] = useState(null);

  const acceptOrder = (order) => {
    setCurrentOrder(order);
    setOrders(orders.filter((o) => o.id !== order.id));
  };

  const completeOrder = () => {
    setCurrentOrder(null);
  };

  return (
    <div className="bg-[url('/delivery-bg.webp')] bg-cover bg-center flex items-center justify-center min-h-screen ">
      <div className="glass p-8 rounded-2xl shadow-lg w-96 text-center text-gray-800">
        <h1 className="text-gray-100 text-2xl font-bold mb-4">Painel do Entregador</h1>
        {!currentOrder ? (
          <div className="w-full max-w-md">
            {orders.length === 0 ? (
              <p className="text-gray-100">Nenhum pedido disponível</p>
            ) : (
              <>
                <h2 className="text-lg font-semibold mb-2">Pedidos Prontos</h2>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-gradient-to-r from-gray-600 via-gray-750 to-gray-900 p-4 rounded-xl shadow-md flex justify-between items-center mb-3"
                  >
                    <div>
                      <p className="font-semibold text-white">{order.customer}</p>
                      <p className="text-gray-400 flex items-center">
                        <MapPin size={16} className="mr-1" /> {order.address}
                      </p>
                    </div>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      onClick={() => acceptOrder(order)}
                    >
                      <Truck size={16} className="inline mr-1" />
                      Aceitar
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        ) : (
          <div className="text-gray-100 glass w-full max-w-md p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">Pedido Aceito</h2>
            <p className="font-semibold">{currentOrder.customer}</p>
            <p className=" flex items-center">
              <MapPin size={16} className="mr-1" /> {currentOrder.address}
            </p>
            <div className="mt-4 ">
              <iframe
                title="Mapa"
                className="w-full h-40 rounded-lg border shadow-xl"
                src="https://maps.google.com/maps?q=-19.9167,-43.9345&z=15&output=embed"
              ></iframe>
            </div>
            <button
              className="bg-gradient-to-tr from-green-600 to-green-700 text-white w-full mt-4 py-2 rounded-lg hover:bg-green-600"
              onClick={completeOrder}
            >
              <CheckCircle size={16} className="inline mr-1" />
              Marcar como Entregue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
