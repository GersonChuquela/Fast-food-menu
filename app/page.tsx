"use client";

import Category from "./components/Category";
import Header from "./components/Header";
import PendingOrders from "./components/PendingOrders";
import PromoBanner from "./components/PromoBanner";
import { CartProvider } from "./context/CartContext";
import { menuData } from "./data/menuData";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <PromoBanner />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8">
            {menuData.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        </main>
        <PendingOrders />
        <footer className="bg-red-600 text-white py-4 text-center">
          <p>&copy; 2025 Roulotte Delícia. Todos os direitos reservados.</p>
        </footer>
      </div>
    </CartProvider>
  );
}
