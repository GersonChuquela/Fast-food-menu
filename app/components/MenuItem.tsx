"use client";

import Image from "next/image";
import type { MenuItem as MenuItemType } from "../data/menuData";
import { useCart } from "../context/CartContext";

export default function MenuItem({ item }: { item: MenuItemType }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        width={300}
        height={200}
        className="w-full h-64 object-cover bg-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <p className="text-red-600 font-bold mt-2">
          {item.price.toFixed(2)} MT
        </p>
        <button
          onClick={() => addToCart(item)}
          className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
        >
          Adicionar ao Pedido
        </button>
      </div>
    </div>
  );
}
