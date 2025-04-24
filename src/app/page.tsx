import Image from "next/image";
import Link from "next/link";
import { products } from "@/utils/mockData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href={`/product/${product.id}`}
              className="relative aspect-square overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute transition-colors duration-300 z-10" />
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 4}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-black z-20">
                <h3 className="text-base sm:text-lg font-bold mb-0.5 sm:mb-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm opacity-90">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
