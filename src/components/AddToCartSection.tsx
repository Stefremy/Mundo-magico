"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

interface AddToCartSectionProps {
  product: {
    id: number;
    slug: string;
    name: string;
    price: string;
    priceNum: string;
    img: string;
    category: string;
  };
}

export default function AddToCartSection({ product }: AddToCartSectionProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-stretch gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between border border-[rgba(29,24,21,0.18)] bg-[#E8E0D5]/40 h-12 px-4 rounded-sm sm:w-32 shrink-0">
          <button
            onClick={handleDecrease}
            disabled={quantity <= 1}
            type="button"
            className="text-[#1D1815]/60 hover:text-[#1D1815] disabled:opacity-30 disabled:hover:text-[#1D1815]/60 transition-colors py-2 px-2"
            aria-label="Diminuir quantidade"
          >
            <span className="text-sm font-bold">—</span>
          </button>
          <span className="text-sm font-sans font-semibold text-[#1D1815] min-w-[20px] text-center select-none">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            type="button"
            className="text-[#1D1815]/60 hover:text-[#1D1815] transition-colors py-2 px-2"
            aria-label="Aumentar quantidade"
          >
            <span className="text-sm font-bold">+</span>
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          type="button"
          className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-[#6B4E2D] hover:bg-[#8C6A3B] text-[#F2EDE6] font-sans text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
          Adicionar ao Carrinho
        </button>
      </div>

      <p className="text-[10px] text-[#8C7A6A] font-sans tracking-wide">
        * Adicione este artefacto consagrado ao seu carrinho para compor e enviar a sua encomenda por WhatsApp ou Email.
      </p>
    </div>
  );
}
