"use client";
import { useCart } from "./context/cartContext";
import Image from "next/image";
import { Trash2, Minus, Plus, X, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CartPreview() {
  const {
    cart,
    isCartOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const cartRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isCartOpen && cartRef.current && !cartRef.current.contains(event.target as Node)) {
        toggleCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  return (
    <>
      {/*Blurred background overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity" />
      )}

      {/*Cart Panel */}
      <div
        ref={cartRef}
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transition-transform duration-300 flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Your Cart ({getTotalItems()})</h2>
          <button
            onClick={toggleCart}
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-4 text-gray-500">
            <ShoppingBag className="h-12 w-12 mb-4 opacity-50" />
            <p className="text-center mb-2">Your cart is empty.</p>
            <p className="text-center text-sm">
              Add some products to your cart and they will show up here.
            </p>
          </div>
        ) : (
          <>
            <div className="p-4 flex-1 space-y-4 overflow-y-auto">
              {cart.map((item, idx) => (
                <div key={`${item.id}-${item.color}-${idx}`} className="flex items-center gap-3 border-b pb-4">
                  <div className="w-16 h-16 relative rounded overflow-hidden flex-shrink-0">
                    <Image src={item.src} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <p className="text-xs text-gray-600">Color: {item.color}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.color)}
                        className="text-gray-500 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-medium">{item.price}</p>
                </div>
              ))}
            </div>

            <div className="border-t p-4 bg-gray-50">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>
              <Link
                href="/checkout"
                onClick={toggleCart} // Close cart on checkout
                className="block w-full bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Checkout
              </Link>
              <button
                onClick={toggleCart}
                className="block w-full text-center py-2 mt-2 text-sm hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
