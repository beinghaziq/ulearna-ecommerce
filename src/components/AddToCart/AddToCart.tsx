'use client'

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function AddToCart({ price, color, size, image, name }: { price: number, color: string, size: string, image: string, name: string }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const addProductToCart = () => {
    addToCart({ name, color, price, image, id: '1' })
  }

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Price</h3>
        <p className="text-2xl font-bold text-gray-900">${price.toFixed(2)}</p>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center border border-gray-200 rounded-md">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 text-gray-600 hover:bg-gray-50"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-10 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 text-gray-600 hover:bg-gray-50"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={() => addProductToCart()}
          className="flex-1 bg-indigo-600 py-3 px-8 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}