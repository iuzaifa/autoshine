import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  // State is necessary if you intend to use this click to change content elsewhere (like a tab)
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // In a real application, you might also trigger product filtering here
    console.log(`Active tab set to: ${tabId}`);
  };

  // Consolidated Brand Data (Using your provided URLs)
  const brands = [
    {
      id: "bmw",
      name: "BMW",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    },
    {
      id: "audi",
      name: "Audi",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Audi-Logo.png",
    },
    {
      id: "mercedes",
      name: "Mercedes-Benz",
      logo: "https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png",
    },
    {
      id: "tesla",
      name: "Tesla",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Tesla-Logo.png",
    },
    {
      id: "toyota",
      name: "Toyota",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png",
    },
    {
      id: "honda",
      name: "Honda",
      logo: "https://logos-world.net/wp-content/uploads/2023/01/Honda-Logo.png",
    },
    {
      id: "ford",
      name: "Ford",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Ford-Logo.png",
    },
    {
      id: "porsche",
      name: "Porsche",
      logo: "https://logos-world.net/wp-content/uploads/2020/03/Porsche-Logo.png",
    },
  ];

  // Consolidated Slider Settings
  const settings = {
    dots: false, // Cleaner look for brand logos on mobile
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    rtl: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      // Mobile View (Most Important for Modern UI)
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Keeps 2 logos visible
          arrows: false,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-8 rounded-xl mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:mb-10 mb-6 ">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            We Work with Popular Brands
          </h2>
        </div>

        {/* Correctly rendered Slider component */}
        <Slider {...settings} className="brand-slider">
          {brands.map((brand) => (
            <div key={brand.id} className="px-2">
              <div
                className={`bg-white lg:my-3 my-2 rounded-sm p-4 transition-all duration-300 border ${
                  activeTab === brand.id
                    ? "border-blue-500 shadow-xl scale-[1.03]" // Highlight active brand
                    : "border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:-translate-y-1"
                } cursor-pointer`}
                onClick={() => handleTabClick(brand.id)}
              >
                <div className="flex flex-col items-center justify-center h-24">
                  {" "}
                  {/* Increased height for better mobile tap */}
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    // Increased logo size for better visibility
                    className="h-16 object-contain max-w-full 
                                 filter grayscale hover:grayscale-0 
                                 transition-all duration-300"
                  />
                  {/* Brand Name always visible on mobile for clean UI reference */}
                  <span className="text-xs text-gray-800 mt-2 font-semibold">
                    {brand.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
