"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Modal from "./Modal";

export default function PendingOrders() {
  const { orders } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const pendingOrders = orders.filter((order) => order.status === "pending");

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-yellow-500 text-black py-2 px-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
      >
        Ver Pedidos Pendentes ({pendingOrders.length})
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold text-black mb-4">
          Pedidos Pendentes
        </h2>
        {pendingOrders.length === 0 ? (
          <p className="text-gray-600">Não há pedidos pendentes no momento.</p>
        ) : (
          pendingOrders.map((order) => (
            <div
              key={order.id}
              className="mb-4 p-4 border rounded text-gray-600"
            >
              <h3 className="font-bold">Pedido #{order.id}</h3>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} x {item.quantity} -{" "}
                    {(item.price * item.quantity).toFixed(2)} MT
                  </li>
                ))}
              </ul>
              <p className="font-bold mt-2">
                Total: {order.total.toFixed(2)} MT
              </p>
            </div>
          ))
        )}
      </Modal>
    </>
  );
}
