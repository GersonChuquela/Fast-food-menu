"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Modal from "./Modal";
import Cart from "./Cart";

export default function Header() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-red-600 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Roulotte Delícia</h1>
          <p className="text-xl mt-2">O melhor fast food de Moçambique!</p>
        </div>
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-white text-red-600 rounded-full px-4 py-2 font-bold flex items-center"
        >
          🛒 {totalItems} {totalItems === 1 ? "item" : "itens"}
        </button>
      </div>
      <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart onClose={() => setIsCartOpen(false)} />
      </Modal>
    </header>
  );
}
