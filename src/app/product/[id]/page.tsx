"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/utils/mockData";
import { useState, use } from "react";
import React from "react";
import { useCart } from "@/components/context/cartContext";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  
  const product = products.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0] || "white"
  );
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const toggleAccordion = (section: string) => {
    if (openAccordion === section) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(section);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Mobile Layout - Single Column */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
          {/* Product Image Section */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg mx-auto md:ml-4">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Image Previews */}
            <div className="flex justify-center gap-2  md:justify-start md:ml-24">
              {[1].map((index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border"
                >
                  <Image
                    src={product.src}
                    alt={`${product.alt} preview ${index}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-6 mt-6 md:mt-16">
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              {product.price}
            </p>

            {/* Description - Moved here for mobile */}
            <div className="space-y-2 md:hidden">
              <h3 className="text-sm font-medium text-black">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700">Quantity</h3>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="w-full md:w-48 bg-green-600 text-white py-3 md:py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  color: selectedColor,
                  quantity: quantity,
                  src: product.src,
                });
              }}
            >
              Add to Cart
            </button>

            {/* Accordion Section */}
            <div className="mt-4 border-t pt-4">
              {/* Product Information Accordion */}
              <div className="border-b">
                <button
                  className="flex justify-between items-center w-full py-3 text-left"
                  onClick={() => toggleAccordion("product-info")}
                >
                  <span className="font-medium">Product Information</span>
                  <span>{openAccordion === "product-info" ? "−" : "+"}</span>
                </button>
                {openAccordion === "product-info" && (
                  <div className="pb-3 text-sm text-gray-600">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Materials: Premium quality materials</li>
                      <li>Care: Machine wash cold, tumble dry low</li>
                      <li>Origin: Ethically manufactured</li>
                      <li>SKU: {productId}</li>
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Refund Policy Accordion */}
              <div className="border-b">
                <button
                  className="flex justify-between items-center w-full py-3 text-left"
                  onClick={() => toggleAccordion("refund-policy")}
                >
                  <span className="font-medium">Refund Policy</span>
                  <span>{openAccordion === "refund-policy" ? "−" : "+"}</span>
                </button>
                {openAccordion === "refund-policy" && (
                  <div className="pb-3 text-sm text-gray-600">
                    <p>
                      We offer a 30-day money-back guarantee for all purchases.
                      If you are not satisfied with your purchase, you can return
                      the product in its original condition and packaging for a
                      full refund. Shipping costs are non-refundable.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Description - For desktop view */}
          <div className="hidden md:block space-y-2 md:ml-24 md:mt-4">
            <h3 className="text-sm font-medium text-black">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}