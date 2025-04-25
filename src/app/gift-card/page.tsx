"use client";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
          {/* Gift Card Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg mx-auto md:ml-4">
              <Image
                src="/mockups/ChatGPT Image Apr 25, 2025, 05_49_41 PM.png"
                alt="Gift Card"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
                priority
              />
            </div>
            <div className="flex justify-center gap-2 md:justify-start md:ml-24">
              {[1].map((index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border"
                >
                  <Image
                    src="/mockups/ChatGPT Image Apr 25, 2025, 05_49_41 PM.png"
                    alt={`Gift Card preview ${index}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40px, 40px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gift Card Details */}
          <div className="flex flex-col space-y-6 mt-6 md:mt-16">
            <h1 className="text-2xl md:text-3xl font-bold">Digital Gift Card</h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-800">From $25.00</p>

            <div className="space-y-2 md:hidden">
              <h3 className="text-sm font-medium text-black">Description</h3>
              <p className="text-gray-600">
                Perfect for last-minute gifts or letting your loved ones choose what they really want.
                Sent instantly by email with easy redemption at checkout.
              </p>
            </div>

            {/* Amount Selection */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700">Select Amount</h3>
              <div className="flex gap-2">
                {[25, 50, 100, 200].map((amount) => (
                  <button
                    key={amount}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="w-full md:w-48 bg-green-600 text-white py-3 md:py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
            onClick={() => alert("Added to cart!")}
            >
              Add to Cart
            </button>

            {/* Accordion Section */}
            <div className="mt-4 border-t pt-4">
              <div className="border-b">
                <button
                  className="flex justify-between items-center w-full py-3 text-left"
                  onClick={() => toggleAccordion("how-it-works")}
                >
                  <span className="font-medium">How it Works</span>
                  <span>{openAccordion === "how-it-works" ? "−" : "+"}</span>
                </button>
                {openAccordion === "how-it-works" && (
                  <div className="pb-3 text-sm text-gray-600">
                    <p>
                      Choose your amount, complete your purchase, and we'll email the gift card
                      to you or your recipient instantly. It can be used anytime, on any product.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-b">
                <button
                  className="flex justify-between items-center w-full py-3 text-left"
                  onClick={() => toggleAccordion("terms")}
                >
                  <span className="font-medium">Terms & Conditions</span>
                  <span>{openAccordion === "terms" ? "−" : "+"}</span>
                </button>
                {openAccordion === "terms" && (
                  <div className="pb-3 text-sm text-gray-600">
                    <p>
                      Gift cards are non-refundable and never expire. They can only be redeemed
                      online. Lost or stolen gift cards cannot be replaced.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:block space-y-2 md:ml-24 md:mt-4">
            <h3 className="text-sm font-medium text-black">Description</h3>
            <p className="text-gray-600">
              Perfect for last-minute gifts or letting your loved ones choose what they really want.
              Sent instantly by email with easy redemption at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
