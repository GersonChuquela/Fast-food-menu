/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const { cart, removeFromCart, clearCart, processOrder } = useCart();
  const [orderProcessed, setOrderProcessed] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleProcessOrder = () => {
    processOrder();
    setOrderProcessed(true);
    setTimeout(() => {
      setOrderProcessed(false);
      onClose();
    }, 3000);
  };

  if (orderProcessed) {
    return (
      <div className="text-gray-600 text-center">
        <h2 className="text-2xl font-bold mb-4">Pedido Processado!</h2>
        <p>O seu pedido foi processado com sucesso.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Gerencie o seu carrinho
      </h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={item.id}
                className="py-4 flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <div className="space-y-2">
                  <h3 className="text-lg text-gray-600 font-semibold px-2">
                    {item.name}
                  </h3>
                  <div className="flex gap-4">
                    <p className="text-gray-700 bg-gray-100 px-3 py-1 rounded-full font-medium">
                      Quantidade:{" "}
                      <span className="font-bold">{item.quantity}</span>
                    </p>
                    <p className="text-gray-700 bg-gray-100 px-3 py-1 rounded-full font-medium">
                      Preço:{" "}
                      <span className="font-bold">
                        {item.price.toFixed(2)} MT
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="font-bold text-lg">
                    {(item.price * item.quantity).toFixed(2)} MT
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 border-2 border-red-600 px-3 py-1 rounded-md hover:bg-red-600 hover:text-white transition-all duration-200 text-sm font-medium hover:shadow-md"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span>{total.toFixed(2)} MT</span>
            </div>
            <button
              onClick={handleProcessOrder}
              className="mt-4 bg-green-600 text-black semibold py-2 px-4 rounded hover:bg-green-700 transition duration-300 w-full"
            >
              Finalizar Pedido
            </button>
          </div>
        </>
      )}
      <button
        onClick={onClose}
        className="mt-4 w-full text-white semibold bg-red-600 hover:bg-red-700 rounded px-4 py-2 text-center font-medium transition-colors duration-200"
      >
        Fechar
      </button>
    </div>
  );
}
