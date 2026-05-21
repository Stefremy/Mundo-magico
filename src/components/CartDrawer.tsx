"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    composeWhatsAppMessage,
    composeEmailMessage,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  // Compose actions
  const handleWhatsAppOrder = () => {
    const url = `https://wa.me/351912672435?text=${composeWhatsAppMessage()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmailOrder = () => {
    const { subject, body } = composeEmailMessage();
    const mailto = `mailto:borboleta_mariana18@hotmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#000000]/70 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Cart Drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] bg-[#0E0B0A]/98 backdrop-blur-xl border-l border-[rgba(232,222,210,0.12)] flex flex-col shadow-2xl transition-all duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Carrinho de Encomendas"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(232,222,210,0.1)]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#8C6A3B]">shopping_bag</span>
            <h2 className="font-serif italic text-xl text-white">O seu Carrinho</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="flex items-center justify-center p-2 rounded-full text-white/60 hover:text-white hover:bg-[rgba(232,222,210,0.05)] transition-all duration-200"
            aria-label="Fechar Carrinho"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 px-4">
              <div className="w-16 h-16 rounded-full border border-[rgba(232,222,210,0.1)] flex items-center justify-center text-[#8C7A6A]/60">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
              </div>
              <div className="space-y-2">
                <p className="font-serif italic text-lg text-white/95">O seu carrinho está vazio</p>
                <p className="text-xs text-white/50 max-w-[280px] leading-relaxed">
                  Adicione artefactos consagrados para iniciar o seu pedido de consulta ou ritual.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                }}
                className="px-6 py-3 bg-[rgba(232,222,210,0.05)] hover:bg-[rgba(232,222,210,0.1)] text-[#E8DED2] text-xs font-sans font-semibold tracking-widest uppercase border border-[rgba(232,222,210,0.15)] transition-all duration-300 rounded-sm"
              >
                Explorar Artefactos
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 pb-6 border-b border-[rgba(232,222,210,0.06)] group"
              >
                {/* Product image */}
                <div className="relative w-20 h-24 bg-[#181310] border border-[rgba(232,222,210,0.08)] flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Product Meta */}
                <div className="flex-1 min-w-0 space-y-2">
                  <div>
                    <span className="text-[9px] font-sans tracking-widest uppercase text-[#8C6A3B] block">
                      {item.category}
                    </span>
                    <h3 className="font-serif italic text-white text-base leading-snug truncate">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[rgba(232,222,210,0.15)] bg-[#181310] h-8 rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-full flex items-center justify-center text-white/60 hover:text-white hover:bg-[rgba(232,222,210,0.05)] transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <span className="text-[12px] font-bold">—</span>
                      </button>
                      <span className="w-8 text-center text-xs font-sans text-white font-medium select-none">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-full flex items-center justify-center text-white/60 hover:text-white hover:bg-[rgba(232,222,210,0.05)] transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <span className="text-[12px] font-bold">+</span>
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-serif font-semibold text-white">
                        {(item.priceNum * item.quantity).toFixed(2)} €
                      </span>
                      {item.quantity > 1 && (
                        <span className="block text-[10px] text-white/40">
                          {item.price} cada
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-1 text-white/40 hover:text-red-400 transition-colors"
                  aria-label={`Remover ${item.name}`}
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {cartItems.length > 0 && (
          <div className="border-t border-[rgba(232,222,210,0.1)] bg-[#0A0706] p-6 space-y-6">
            <div className="flex items-center justify-between text-white font-serif">
              <span className="italic text-base">Total da Encomenda</span>
              <span className="text-2xl font-bold">{cartTotal.toFixed(2)} €</span>
            </div>

            <p className="text-[10px] text-white/40 text-center font-sans tracking-wide leading-relaxed">
              * A sua encomenda será enviada como uma mensagem pré-formatada. 
              A Maria Manuela confirmará a disponibilidade e detalhes de envio.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {/* WhatsApp Checkout */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#2D6A4F] hover:bg-[#3E8B62] text-white font-semibold font-sans uppercase tracking-[0.2em] text-[0.8rem] transition-all duration-300 rounded-sm"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202 0 6.213 1.248 8.477 3.518 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005 0-3.973-.504-5.717-1.464L0 24zm6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654zm11.167-9.964c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                </svg>
                Encomendar por WhatsApp
              </button>

              {/* Email Checkout */}
              <button
                onClick={handleEmailOrder}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#6B4E2D] hover:bg-[#8C6A3B] text-white font-semibold font-sans uppercase tracking-[0.2em] text-[0.8rem] transition-all duration-300 rounded-sm"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                Encomendar por Email
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
