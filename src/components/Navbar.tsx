"use client";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`flex justify-between items-center px-4 sm:px-8 py-4 bg-white transition duration-300`}
      >
        <div className="flex-1">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold text-black">Everything</h1>
            <h1 className="text-sm text-black font-bold ml-1">You get it here</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-2 justify-center">
          <ul
            className="flex space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <li>
              <Link
                href="/"
                className="text-black font-bold hover:text-gray-700 font-medium transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black font-bold hover:text-gray-700 font-medium transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-black font-bold hover:text-gray-700 font-medium transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/gift-card"
                className="text-black font-bold hover:text-gray-700 font-medium transition-colors"
              >
                Gift Card
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-black font-bold hover:text-gray-700 font-medium transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-end items-center space-x-4 sm:space-x-8">
          <div className="relative hidden md:block">
            <label htmlFor="desktop-search" className="sr-only">
              Search
            </label>
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black cursor-pointer h-4 w-4" />
            <input
              id="desktop-search"
              type="search"
              placeholder="Search..."
              className="pl-8 pr-2 py-1 border-b border-gray-900 w-48 font-bold text-black text-sm focus:outline-none focus:border-black bg-transparent placeholder-gray-500"
              aria-label="Search products"
            />
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link href="/account" className="hidden md:block">
              <User
                className="h-5 w-5 text-black hover:text-gray-900 cursor-pointer transition-colors"
                aria-label="Account"
              />
            </Link>
            <Link href="/cart">
              <ShoppingCart
                className="h-5 w-5 text-black hover:text-gray-900 cursor-pointer transition-colors"
                aria-label="Shopping cart"
              />
            </Link>
            <button
              type="button"
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-black rounded"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-5 w-5 text-black hover:text-gray-900 cursor-pointer transition-colors" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center">
            <button
              type="button"
              className="p-2 focus:outline-none focus:ring-2 focus:ring-black rounded"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-black hover:text-gray-900 cursor-pointer transition-colors" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="p-4">
            <div className="relative">
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black cursor-pointer h-4 w-4" />
              <input
                id="mobile-search"
                type="search"
                placeholder="Search..."
                className="w-full pl-8 pr-2 py-2 border-b border-gray-900 font-bold text-black text-sm focus:outline-none focus:border-black bg-transparent placeholder-gray-500"
                aria-label="Search products"
              />
            </div>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col p-4">
              <li className="py-2">
                <Link
                  href="/shop"
                  className="text-black font-bold hover:text-gray-700 font-medium transition-colors block"
                  onClick={toggleMenu}
                >
                  Shop
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/about"
                  className="text-black font-bold hover:text-gray-700 font-medium transition-colors block"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/faq"
                  className="text-black font-bold hover:text-gray-700 font-medium transition-colors block"
                  onClick={toggleMenu}
                >
                  FAQ
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/gift-card"
                  className="text-black font-bold hover:text-gray-700 font-medium transition-colors block"
                  onClick={toggleMenu}
                >
                  Gift Card
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/contact"
                  className="text-black font-bold hover:text-gray-700 font-medium transition-colors block"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/account"
                  className="text-black font-bold hover:text-gray-700 font-medium transition-colors block"
                  onClick={toggleMenu}
                >
                  Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
