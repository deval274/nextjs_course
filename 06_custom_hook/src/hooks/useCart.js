import { useState, useEffect, useMemo } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  //persist cart to localstorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  //sync across tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "cart") {
        try {
          const newCart = JSON.parse(e.newValue || "[]"); // what it does is if the new value is not found, it will return an empty array, what is newValue is the new value of the cart
          setCart(newCart);
        } catch (error) {
          console.error("Error syncing cart across tabs:", error);
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  };

  const updateQuantity = (productId, quantity) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  // this is not required in react 19 or later
  const total = useMemo(() => {
    return Number(
      cart
        .reduce((sum, item) => sum + item.price * (item.quantity || 0), 0)
        .toFixed(2),
    );
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    total,
  };
}
