"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white py-12"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
        {/* Grid Section */}
        <nav
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto"
          aria-label="Footer navigation"
        >
          {/* Policies Section */}
          <section className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4" id="footer-policies">
              Policies
            </h3>
            <ul className="space-y-2" aria-labelledby="footer-policies">
              <li>
                <Link
                  href="/shipping-returns"
                  className="hover:text-gray-300"
                  aria-label="Shipping and returns policy"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/store-policy"
                  className="hover:text-gray-300"
                  aria-label="Store policy"
                >
                  Store Policy
                </Link>
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4" id="footer-contact">
              Contact
            </h3>
            <ul className="space-y-2" aria-labelledby="footer-contact">
              <li>
                <a
                  href="tel:1234567890"
                  className="hover:text-gray-300"
                  aria-label="Call us at 1234567890"
                >
                  Tel: 1234567890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nimbus.com"
                  className="hover:text-gray-300"
                  aria-label="Email us at yourstore@nimbus.com"
                >
                  yourstore@nimbus.com
                </a>
              </li>
            </ul>
          </section>

          {/* Social Media Section */}
          <section className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4" id="footer-social">
              Follow Us
            </h3>
            <ul className="space-y-2" aria-labelledby="footer-social">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  aria-label="Follow us on Facebook"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  aria-label="Follow us on Instagram"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </section>
        </nav>

        {/* Newsletter Section */}
        <section
          className="mt-16 w-full max-w-4xl mx-auto"
          aria-label="Newsletter subscription"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Join our mailing list and never miss an update
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription form"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full sm:w-auto px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                  required
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors whitespace-nowrap"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Copyright Section */}
        <section
          className="mt-16 w-full max-w-4xl mx-auto text-center text-sm text-gray-400"
          aria-label="Copyright information"
        >
          <p>
            &copy; {new Date().getFullYear()} Your Store Name. All rights
            reserved. Powered and secured by Nimbus
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
