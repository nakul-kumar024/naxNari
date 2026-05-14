// store/cartStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // for localStorage save

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [], // array of { product, quantity }

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find((item) => item.product.id === product.id);

          if (existingItem) {
            // increase quantity if already in cart
            return {
              cartItems: state.cartItems.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          // add new item
          return {
            cartItems: [...state.cartItems, { product, quantity: 1 }],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.product.id !== productId),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        })),

      clearCart: () => set({ cartItems: [] }),

      getTotalItems: () => {
        const { cartItems } = get();
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { cartItems } = get();
        return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      },
    }),
    {
      name: 'nari-cart-storage', // key in localStorage
      partialize: (state) => ({ cartItems: state.cartItems }), // only save cartItems
    }
  )
);

export default useCartStore;