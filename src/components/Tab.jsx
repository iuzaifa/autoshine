

import React, { useState } from "react";
import { IndianRupee } from "lucide-react";

// Tabs Component
const Tab = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Fixed tab data structure - removed duplicate product arrays
  const tabData = [
    {
      id: "all",
      label: "ALL",
      products: [
        {
          name: "BMW X5",
          description:
            "Luxury SUV with premium features and exceptional performance",
          fakePrice: "65,000",
          price: "59,999",
          image:
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        },
        {
          name: "Audi A4",
          description: "Elegant sedan with advanced technology and comfort",
          fakePrice: "45,000",
          price: "41,999",
          image:
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=300&fit=crop",
        },
        {
          name: "Mercedes C-Class",
          description: "Sophisticated luxury with cutting-edge features",
          fakePrice: "48,000",
          price: "44,500",
          image:
            "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=400&h=300&fit=crop",
        },
        {
          name: "Tesla Model 3",
          description: "Electric vehicle with autopilot and premium interior",
          fakePrice: "52,000",
          price: "48,999",
          image:
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
        },
        {
          name: "Toyota Camry",
          description: "Reliable sedan with excellent fuel efficiency",
          fakePrice: "32,000",
          price: "29,999",
          image:
            "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
        },
        {
          name: "BMW i8",
          description: "Hybrid sports car with futuristic design",
          fakePrice: "150,000",
          price: "139,999",
          image:
            "https://images.unsplash.com/photo-1617814076660-32d9c093f5e5?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "bmw",
      label: "BMW",
      products: [
        {
          name: "BMW X5",
          description:
            "Luxury SUV with premium features and exceptional performance",
          fakePrice: "65,000",
          price: "59,999",
          image:
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        },
        {
          name: "BMW 3 Series",
          description: "Sporty sedan with dynamic handling and luxury features",
          fakePrice: "45,000",
          price: "42,500",
          image:
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        },
        {
          name: "BMW i8",
          description: "Hybrid sports car with futuristic design",
          fakePrice: "150,000",
          price: "139,999",
          image:
            "https://images.unsplash.com/photo-1617814076660-32d9c093f5e5?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "audi",
      label: "Audi",
      products: [
        {
          name: "Audi A4",
          description: "Elegant sedan with advanced technology and comfort",
          fakePrice: "45,000",
          price: "41,999",
          image:
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=300&fit=crop",
        },
        {
          name: "Audi Q7",
          description: "Spacious SUV with quattro all-wheel drive",
          fakePrice: "68,000",
          price: "64,500",
          image:
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "mercedes",
      label: "Mercedes-Benz",
     
      products: [
        {
          name: "Mercedes C-Class",
          description: "Sophisticated luxury with cutting-edge features",
          fakePrice: "48,000",
          price: "44,500",
          image:
            "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=400&h=300&fit=crop",
        },
        {
          name: "Mercedes GLE",
          description: "Premium SUV with exceptional comfort and technology",
          fakePrice: "72,000",
          price: "68,999",
          image:
            "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "tesla",
      label: "Tesla",
      
      products: [
        {
          name: "Tesla Model 3",
          description: "Electric vehicle with autopilot and premium interior",
          fakePrice: "52,000",
          price: "48,999",
          image:
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
        },
        {
          name: "Tesla Model S",
          description: "High-performance electric sedan with long range",
          fakePrice: "95,000",
          price: "89,999",
          image:
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "toyota",
      label: "Toyota",
      products: [
        {
          name: "Toyota Camry",
          description: "Reliable sedan with excellent fuel efficiency",
          fakePrice: "32,000",
          price: "29,999",
          image:
            "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
        },
        {
          name: "Toyota RAV4",
          description: "Compact SUV with hybrid options and great versatility",
          fakePrice: "35,000",
          price: "32,500",
          image:
            "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
        },
        {
          name: "Toyota Camry",
          description: "Reliable sedan with excellent fuel efficiency",
          fakePrice: "32,000",
          price: "29,999",
          image:
            "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
        },
        {
          name: "Toyota RAV4",
          description: "Compact SUV with hybrid options and great versatility",
          fakePrice: "35,000",
          price: "32,500",
          image:
            "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
        },
      ],
    },
  ];

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="rounded-sm  hover:shadow-xl transition-all duration-300 overflow-hidden border bg-white border-slate-950/10 hover:border-slate-950/20 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="lg:text-md text-sm font-semibold text-slate-950/80 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-800/90 text-xs mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 line-through lg:text-sm text-xs flex items-center justify-center">
              <IndianRupee size={14} />
              {product.fakePrice}
            </span>
            <span className="lg:text-sm text-xs  font-bold text-slate-800 flex items-center justify-center">
              <IndianRupee size={15} />
              {product.price}
            </span>
          </div>
        </div>

        <button className="w-full hover:text-white  hover:bg-black/90 text-black/70 border border-black/80 py-2 px-4 text-xs rounded-xs font-semibold transition-colors duration-200 transform hover:-translate-y-0.5">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <section className="lg:my-10 my-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="tabs">
        <div className="block">
          <div className="overflow-x-auto overflow-y-hidden pb-1 ">
            <ul
              className="flex min-w-max space-x-1 sm:space-x-1 transition-all duration-300 -mb-px px-4 sm:px-0 border-b border-slate-950/50"
              role="tablist"
            >
              {tabData.map((tab) => (
                <li key={tab.id} className="flex-shrink-0">
                  <button
                    className={`inline-block py-1 px-6 sm:px-3 border-b-2 lg:text-sm text-xs whitespace-nowrap transition-all duration-200 ${
                      activeTab === tab.id
                        ? "border-slaet-800 text-slate-950/80 bg-slate-100"
                        : "border-transparent text-slate-700 hover:text-slate-700 hover:border-gray-300 bg-white"
                    }`}
                    onClick={() => handleTabClick(tab.id)}
                    role="tab"
                    aria-selected={activeTab === tab.id ? "true" : "false"}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {tabData.map((tab) => (
            <div
              key={tab.id}
              id={`tabs-with-underline-${tab.id}`}
              role="tabpanel"
              className={`tabcontent ${activeTab !== tab.id ? "hidden" : ""}`}
            >
              {/* Brand Description */}
              {/* <div className="mb-8 text-center">
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  <span className="font-semibold text-gray-800 text-xl">
                    {tab.label}:
                  </span>{" "}
                  {tab.content}
                </p>
              </div> */}

              {/* Products Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tab.products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>

              {/* No Products Message */}
              {tab.products.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🚗</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No vehicles available
                  </h3>
                  <p className="text-gray-500">
                    Check back later for new {tab.label} models.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tab;
