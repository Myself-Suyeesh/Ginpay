import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 md:px-28 md:py-8">
        <div className="flex gap-20 items-center">
          <h1 className="text-highlight text-2xl md:text-3xl font-bold">
            Ginpay
          </h1>
          <div className="hidden md:block">
            <ul className="flex w-full gap-10 font-medium list-none text-sm">
              <li className="hover:text-primary cursor-pointer">Products</li>
              <li className="hover:text-primary cursor-pointer">Customer</li>
              <li className="hover:text-primary cursor-pointer">Pricings</li>
              <li className="hover:text-primary cursor-pointer">Learn</li>
            </ul>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <button className="px-5 py-2 border border-gray-300 rounded-xl font-medium cursor-pointer hover:bg-white transition-colors">
            Login
          </button>
          <button className="px-5 py-2 bg-primary text-white text-md rounded-xl font-medium cursor-pointer hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-highlight p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4 font-medium list-none text-base text-center">
              <li className="hover:text-primary cursor-pointer py-2">
                Products
              </li>
              <li className="hover:text-primary cursor-pointer py-2">
                Customer
              </li>
              <li className="hover:text-primary cursor-pointer py-2">
                Pricings
              </li>
              <li className="hover:text-primary cursor-pointer py-2">Learn</li>
              <div className="flex flex-col gap-3 mt-4">
                <button className="w-full px-5 py-3 border border-gray-300 rounded-xl font-medium">
                  Login
                </button>
                <button className="w-full px-5 py-3 bg-primary text-white rounded-xl font-medium">
                  Sign Up
                </button>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBarComponent;
