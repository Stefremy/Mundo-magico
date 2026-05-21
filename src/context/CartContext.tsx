"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: string;
  priceNum: number;
  img: string;
  category: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartCount: number;
  cartTotal: number;
  composeWhatsAppMessage: () => string;
  composeEmailMessage: () => { subject: string; body: string };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("mundo_magico_cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("mundo_magico_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product: any, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          priceNum: parseFloat(product.priceNum) || 0,
          img: product.img,
          category: product.category,
          quantity: quantity,
        },
      ];
    });
    // Open the cart drawer automatically when an item is added
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.priceNum * item.quantity,
    0
  );

  const composeWhatsAppMessage = () => {
    let message = "Olá Maria Manuela! Gostaria de encomendar os seguintes artigos consagrados do Mundo Mágico:\n\n";
    cartItems.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} (${item.price} cada) — Subtotal: ${(item.priceNum * item.quantity).toFixed(2)} €\n`;
    });
    message += `\n*Total Estimado:* ${cartTotal.toFixed(2)} €\n\n`;
    message += "Por favor, confirme a disponibilidade dos artigos e os dados de pagamento (MB Way ou Transferência). Muito grato(a)! 🌙✨";
    return encodeURIComponent(message);
  };

  const composeEmailMessage = () => {
    const subject = encodeURIComponent("Nova Encomenda — Mundo Mágico");
    let body = "Olá Maria Manuela,\n\nGostaria de encomendar os seguintes artigos consagrados do Mundo Mágico:\n\n";
    cartItems.forEach((item) => {
      body += `• ${item.quantity}x ${item.name} (${item.price} cada) — Subtotal: ${(item.priceNum * item.quantity).toFixed(2)} €\n`;
    });
    body += `\nTotal Estimado: ${cartTotal.toFixed(2)} €\n\n`;
    body += "Por favor, confirme a disponibilidade dos artigos e as instruções para pagamento (MB Way ou Transferência) e envio.\n\nObrigado(a)! 🌙";
    return {
      subject,
      body: encodeURIComponent(body),
    };
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        cartTotal,
        composeWhatsAppMessage,
        composeEmailMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
