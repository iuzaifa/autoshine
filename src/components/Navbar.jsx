import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");

  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Array of navigation links
  const navItems = ["Home", "Product", "Service", "Contact", "Our Team"];

  return (
    <header className="bg-white sticky top-0 z-50  borde-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Row */}
        <div className="flex justify-between items-center h-16">
          {/* 1. Logo (Left Side) */}
          <div className="flex-shrink-0">
            <a href="/" className="h-fit w-full">
              <img src="logo/logo.png" alt="" className="h-12 w-auto" />
            </a>
          </div>
          {/* 2. Desktop Navigation and Call to Action (Right Group) */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* Desktop Navigation (Hidden on Mobile) */}
            <nav className="hidden sm:flex space-x-2 lg:space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setActiveNav(item)}
                  className={` hover:text-black/90 border-b-2 border-white hover:border-black/70 px-3 py-2 text-sm font-medium transition duration-150
                    `}
                >
                  {item}
                </a>
              ))}
            </nav>
           

            {/* 3. Call Us Button (Visible on All Devices) */}
            <a
              href="tel:+YOUR_PHONE_NUMBER" // Replace with your actual number
              className="bg-green-500 flex items-center justify-center gap-1 lg:gap-2 lg:border-2 lg:border-slate-50 text-slate-50 px-2 py-1 lg:px-3 lg:py-1.5 text-xs transition duration-200 ease-in-out whitespace-nowrap border rounded-md shadow hover:shadow-2xl"
            >
              <Phone className="lg:w-4 lg:h-4 h-3 w-3" />
              <span>Call Us</span>
            </a>

            {/* 4. Mobile Menu Button (Hamburger) - Placed after the Call Us button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon (Open) */}
                {/* X Icon (Close) */}
                <Menu
                  className={`${
                    isOpen ? "hidden" : "block"
                  } h-7 w-7 bg-slate-100 text-slate-600 p-1 rounded-xs border-slate-200 border shadow-sm`}
                />

                <X
                  className={`${
                    isOpen ? "block" : "hidden"
                  }  h-7 w-7 bg-red-50 text-red-500 p-1 rounded-xs border-red-400 border shadow-2xs `}
                />
              </button>
            </div>
          </div>{" "}
          {/* End of Desktop Navigation and Call to Action Group */}
        </div>
      </div>

      {/* 5. Mobile Menu (Visible when isOpen is true) */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 lg:text-sm text-xs border-b border-slate-100 font-medium transition duration-150"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
