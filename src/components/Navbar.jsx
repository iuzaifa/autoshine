// import React, { useState } from "react";
// import { X, Menu, Link } from "lucide-react";
// import { Phone } from "lucide-react";

// const Navbar = () => {
//   const [activeNav, setActiveNav] = useState("Home");

//   // State to manage the visibility of the mobile menu
//   const [isOpen, setIsOpen] = useState(false);

//   // Array of navigation links
//   const navItems = ["Home", "Product", "Service", "Contact", "Our Team"];

//   return (
//     <header className="bg-white sticky top-0 z-50  borde-b border-slate-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Content Row */}
//         <div className="flex justify-between items-center h-16">
//           {/* 1. Logo (Left Side) */}
//           <div className="flex-shrink-0">
//             <a href="/" className="h-fit w-full">
//               <img src="logo/logo.png" alt="" className="h-12 w-auto" />
//             </a>
//           </div>
//           {/* 2. Desktop Navigation and Call to Action (Right Group) */}
//           <div className="flex items-center space-x-4 lg:space-x-8">
//             {/* Desktop Navigation (Hidden on Mobile) */}
//             {/* <nav className="hidden sm:flex space-x-2 lg:space-x-4">
//               {navItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   href={`${item.toLowerCase().replace(" ", "-")}`}
//                   onClick={() => setActiveNav(item)}
//                   className={` hover:text-black/90 border-b-2 text-black border-white hover:border-black/70 px-3 py-2 text-sm font-medium transition duration-150
//                     `}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav> */}
//             <nav className="hidden sm:flex space-x-2 lg:space-x-4">
//               {navItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   href={`${item.toLowerCase().replace(" ", "-")}`}
//                   onClick={() => setActiveNav(item)}
//                   // 🚨 Corrected className logic below
//                   className={`
//         px-3 py-2 text-sm font-medium transition duration-150

//         ${
//           activeNav === item
//             ? "text-black border-b-2 border-black" // 👈 ACTIVE state classes
//             : "text-gray-500 border-b-2 border-transparent hover:text-black/90 hover:border-black/70" // 👈 INACTIVE state classes
//         }
//       `}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>

//             {/* 3. Call Us Button (Visible on All Devices) */}
//             <a
//               href="tel:+YOUR_PHONE_NUMBER" // Replace with your actual number
//               className="bg-green-500 flex items-center justify-center gap-1 lg:gap-2 lg:border-2 lg:border-slate-50 text-slate-50 px-2 py-1 lg:px-3 lg:py-1.5 text-xs transition duration-200 ease-in-out whitespace-nowrap border rounded-md shadow hover:shadow-2xl"
//             >
//               <Phone className="lg:w-4 lg:h-4 h-3 w-3" />
//               <span>Call Us</span>
//             </a>

//             {/* 4. Mobile Menu Button (Hamburger) - Placed after the Call Us button */}
//             <div className="sm:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {/* Hamburger Icon (Open) */}
//                 {/* X Icon (Close) */}
//                 <Menu
//                   className={`${
//                     isOpen ? "hidden" : "block"
//                   } h-7 w-7 bg-slate-100 text-slate-600 p-1 rounded-xs border-slate-200 border shadow-sm`}
//                 />

//                 <X
//                   className={`${
//                     isOpen ? "block" : "hidden"
//                   }  h-7 w-7 bg-red-50 text-red-500 p-1 rounded-xs border-red-400 border shadow-2xs `}
//                 />
//               </button>
//             </div>
//           </div>{" "}
//           {/* End of Desktop Navigation and Call to Action Group */}
//         </div>
//       </div>

//       {/* 5. Mobile Menu (Visible when isOpen is true) */}
//       <div
//         className={`${isOpen ? "block" : "hidden"} sm:hidden`}
//         id="mobile-menu"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={`${item.toLowerCase().replace(" ", "-")}`}
//               onClick={() => setIsOpen(false)}
//               className="block text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 lg:text-sm text-xs border-b border-slate-100 font-medium transition duration-150"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
// FIX 1: Removed unused 'Link' (lucide-react icon) and cleaned up other icons.
import { X, Menu, Phone } from "lucide-react";

// Assuming this component is in a React/Vite/Create-React-App environment.
// If you are using a framework like Next.js or React Router, replace 'a' with their Link component.
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");

  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Array of navigation links
  const navItems = ["Home", "Product", "Service", "Contact", "Our Team"];

  // Helper function to handle link clicks (closing mobile menu and setting active link)
  const handleNavLinkClick = (item) => {
    setActiveNav(item);
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    // FIX 3: Removed typo 'borde-b' and corrected to 'border-b'
    <header className="bg-white sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Row */}
        <div className="flex justify-between items-center h-16">
          {/* 1. Logo (Left Side) */}
          <div className="flex-shrink-0">
            <a href="/" className="h-fit w-full">
              {/* NOTE: Consider using 'width' and 'height' attributes for images */}
              <img
                src="logo/logo.png"
                alt="Company Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>
          {/* 2. Desktop Navigation and Call to Action (Right Group) */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* Desktop Navigation (Hidden on Mobile) */}
            <nav className="hidden sm:flex space-x-2 lg:space-x-4">
              {navItems.map((item, index) => (
                // FIX 1: Used standard HTML 'a' tag for a proper link
                <a
                  key={index}
                  href={`${item.toLowerCase().replace(" ", "-")}`} // Using hash links as a common practice for SPA navigation
                  onClick={() => setActiveNav(item)}
                  className={`
                    px-3 py-2 text-sm font-medium transition duration-150 whitespace-nowrap
                    ${
                      activeNav === item
                        ? "text-black border-b-2 border-black" // ACTIVE state classes
                        : "text-gray-500 border-b-2 border-transparent hover:text-black/90 hover:border-black/70" // INACTIVE state classes
                    }
                  `}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* 3. Call Us Button (Visible on All Devices) */}
            <a
              href="tel:+YOUR_PHONE_NUMBER" // Replace with your actual number
              className="bg-green-500 flex items-center justify-center gap-1 lg:gap-2 text-white px-3 py-1.5 text-xs transition duration-200 ease-in-out whitespace-nowrap rounded-md shadow hover:bg-green-600 hover:shadow-lg"
            >
              <Phone className="lg:w-4 lg:h-4 h-3 w-3" />
              <span>Call Us</span>
            </a>

            {/* 4. Mobile Menu Button (Hamburger) */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon (Open) / X Icon (Close) */}
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>{" "}
          {/* End of Desktop Navigation and Call to Action Group */}
        </div>
      </div>

      {/* 5. Mobile Menu (Visible when isOpen is true) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden border-t border-slate-200`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase().replace(" ", "-")}`} // Using hash links
              onClick={() => handleNavLinkClick(item)} // Use the new helper function
              // FIX 2: Added conditional styling for active link in mobile menu
              className={`block w-full text-left rounded-md px-3 py-2 lg:text-sm text-sm font-medium transition duration-150
                ${
                  activeNav === item
                    ? "bg-green-50 text-green-700" // ACTIVE state for mobile
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900" // INACTIVE state for mobile
                }
              `}
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
