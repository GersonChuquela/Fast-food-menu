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
      <h2 className="text-2xl font-bold mb-4">Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={item.id}
                className="py-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Quantidade: {item.quantity}</p>
                  <p className="text-gray-600">
                    Preço: {item.price.toFixed(2)} MT
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    {(item.price * item.quantity).toFixed(2)} MT
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
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
              className="mt-4 bg-green-600 text-black py-2 px-4 rounded hover:bg-green-700 transition duration-300 w-full"
            >
              Finalizar Pedido
            </button>
          </div>
        </>
      )}
      <button
        onClick={onClose}
        className="mt-4 text-gray-600 hover:text-gray-800"
      >
        Fechar
      </button>
    </div>
  );
}
