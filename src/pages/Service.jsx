

import React, { useState } from "react";
import {
  IndianRupee,
  Star,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  Wrench,
  Sparkles,
  Zap,
  Lightbulb,
  Settings,
  Music,
  List,
  Award,
  Users,
  Phone,
} from "lucide-react";

// Tabs Component with Vertical Layout
const Service = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Service data structure with Lucide icons
  const serviceData = [
    {
      id: "all",
      label: "ALL SERVICES",
      icon: List,
      services: [
        {
          name: "Premium Car Detailing",
          description:
            "Complete interior and exterior detailing with ceramic coating protection",
          duration: "4-6 hours",
          price: "8,999",
          originalPrice: "12,000",
          rating: 4.8,
          features: [
            "Ceramic Coating",
            "Paint Protection",
            "Interior Deep Clean",
          ],
          image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
        },
        {
          name: "Engine Tuning & Optimization",
          description:
            "Professional engine tuning for enhanced performance and fuel efficiency",
          duration: "3-4 hours",
          price: "12,500",
          originalPrice: "15,000",
          rating: 4.9,
          features: ["ECU Remapping", "Performance Boost", "Fuel Optimization"],
          image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
        },
        {
          name: "Advanced Lighting Upgrade",
          description:
            "LED and HID headlight upgrades with professional installation",
          duration: "2-3 hours",
          price: "6,499",
          originalPrice: "8,500",
          rating: 4.7,
          features: ["LED Conversion", "HID Installation", "Alignment Service"],
          image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
        },
        {
          name: "Brake System Service",
          description:
            "Complete brake inspection, pad replacement, and fluid flush",
          duration: "2-3 hours",
          price: "5,999",
          originalPrice: "7,200",
          rating: 4.8,
          features: [
            "Brake Pad Replacement",
            "Rotor Resurfacing",
            "Fluid Flush",
          ],
          image:
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop",
        },
        {
          name: "Suspension Upgrade",
          description:
            "Performance suspension installation and alignment service",
          duration: "4-5 hours",
          price: "15,999",
          originalPrice: "19,500",
          rating: 4.6,
          features: [
            "Coilover Installation",
            "Alignment",
            "Ride Height Adjustment",
          ],
          image:
            "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=400&h=300&fit=crop",
        },
        {
          name: "Audio System Installation",
          description:
            "Premium audio system upgrade with professional sound tuning",
          duration: "3-4 hours",
          price: "9,999",
          originalPrice: "13,000",
          rating: 4.7,
          features: [
            "Speaker Upgrade",
            "Amplifier Installation",
            "Sound Tuning",
          ],
          image:
            "https://images.unsplash.com/photo-1603712610496-5362a5d0c60c?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "detailing",
      label: "DETAILING",
      icon: Sparkles,
      services: [
        {
          name: "Premium Car Detailing",
          description:
            "Complete interior and exterior detailing with ceramic coating protection",
          duration: "4-6 hours",
          price: "8,999",
          originalPrice: "12,000",
          rating: 4.8,
          features: [
            "Ceramic Coating",
            "Paint Protection",
            "Interior Deep Clean",
          ],
          image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
        },
        {
          name: "Interior Deep Cleaning",
          description:
            "Comprehensive interior cleaning with stain removal and odor elimination",
          duration: "3-4 hours",
          price: "4,999",
          originalPrice: "6,500",
          rating: 4.7,
          features: [
            "Stain Removal",
            "Odor Elimination",
            "Leather Conditioning",
          ],
          image:
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
        },
        {
          name: "Paint Correction",
          description:
            "Professional paint correction to remove swirl marks and scratches",
          duration: "5-7 hours",
          price: "12,999",
          originalPrice: "16,000",
          rating: 4.9,
          features: ["Swirl Removal", "Scratch Repair", "Gloss Enhancement"],
          image:
            "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "performance",
      label: "PERFORMANCE",
      icon: Zap,
      services: [
        {
          name: "Engine Tuning & Optimization",
          description:
            "Professional engine tuning for enhanced performance and fuel efficiency",
          duration: "3-4 hours",
          price: "12,500",
          originalPrice: "15,000",
          rating: 4.9,
          features: ["ECU Remapping", "Performance Boost", "Fuel Optimization"],
          image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
        },
        {
          name: "Suspension Upgrade",
          description:
            "Performance suspension installation and alignment service",
          duration: "4-5 hours",
          price: "15,999",
          originalPrice: "19,500",
          rating: 4.6,
          features: [
            "Coilover Installation",
            "Alignment",
            "Ride Height Adjustment",
          ],
          image:
            "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=400&h=300&fit=crop",
        },
        {
          name: "Exhaust System Upgrade",
          description:
            "Performance exhaust system installation for better sound and power",
          duration: "2-3 hours",
          price: "8,499",
          originalPrice: "10,500",
          rating: 4.7,
          features: ["Cat-Back System", "Sound Tuning", "Performance Gain"],
          image:
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "lighting",
      label: "LIGHTING",
      icon: Lightbulb,
      services: [
        {
          name: "Advanced Lighting Upgrade",
          description:
            "LED and HID headlight upgrades with professional installation",
          duration: "2-3 hours",
          price: "6,499",
          originalPrice: "8,500",
          rating: 4.7,
          features: ["LED Conversion", "HID Installation", "Alignment Service"],
          image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
        },
        {
          name: "Custom LED Installation",
          description:
            "Custom LED lighting for interior and exterior with remote control",
          duration: "3-4 hours",
          price: "7,999",
          originalPrice: "9,800",
          rating: 4.6,
          features: ["RGB Lighting", "Remote Control", "Professional Wiring"],
          image:
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "maintenance",
      label: "MAINTENANCE",
      icon: Settings,
      services: [
        {
          name: "Brake System Service",
          description:
            "Complete brake inspection, pad replacement, and fluid flush",
          duration: "2-3 hours",
          price: "5,999",
          originalPrice: "7,200",
          rating: 4.8,
          features: [
            "Brake Pad Replacement",
            "Rotor Resurfacing",
            "Fluid Flush",
          ],
          image:
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
        },
        {
          name: "Oil Change Service",
          description: "Premium synthetic oil change with filter replacement",
          duration: "1 hour",
          price: "2,499",
          originalPrice: "3,200",
          rating: 4.5,
          features: [
            "Synthetic Oil",
            "Filter Replacement",
            "Multi-point Inspection",
          ],
          image:
            "https://images.unsplash.com/photo-1603712610496-5362a5d0c60c?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "audio",
      label: "AUDIO",
      icon: Music,
      services: [
        {
          name: "Audio System Installation",
          description:
            "Premium audio system upgrade with professional sound tuning",
          duration: "3-4 hours",
          price: "9,999",
          originalPrice: "13,000",
          rating: 4.7,
          features: [
            "Speaker Upgrade",
            "Amplifier Installation",
            "Sound Tuning",
          ],
          image:
            "https://images.unsplash.com/photo-1603712610496-5362a5d0c60c?w=400&h=300&fit=crop",
        },
        {
          name: "Soundproofing Service",
          description:
            "Professional soundproofing for reduced road noise and better audio",
          duration: "4-5 hours",
          price: "6,999",
          originalPrice: "8,500",
          rating: 4.6,
          features: ["Door Insulation", "Floor Damping", "Custom Fit"],
          image:
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
        },
      ],
    },
  ];

  // Service Card Component
  const ServiceCard = ({ service }) => (
    <div className="rounded-xs hover:shadow-md transition-all duration-300 overflow-hidden border bg-white border-gray-200 hover:border-teal-500/30 group">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {service.duration}
        </div>
        <div className="absolute top-3 right-3 bg-white backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <span className="text-xs">{service.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-black/80 transition-colors">
          {service.name}
        </h3>
        <p className="text-gray-600 text-xs mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-xs text-gray-700"
            >
              <CheckCircle className="w-3 h-3 text-green-500" />
              {feature}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 line-through text-sm flex items-center">
              <IndianRupee size={14} />
              {service.originalPrice}
            </span>
            <span className="text-xl font-bold text-gray-900 flex items-center">
              <IndianRupee size={18} />
              {service.price}
            </span>
          </div>
        </div>

        <button className="w-full bg-black/80 hover:bg-black/90 text-white py-3 px-4 rounded-xs text-xs transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2">
          <Wrench className="w-4 h-4" />
          Book Service
        </button>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:max-w-2xl mx-auto">
        
          <h1 className="text-3xl font-bold text-black/80 mb-4">
            Our <span className="text-black/80">Premium Services</span>
          </h1>
          <p className="lgtext-sm text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional auto services with guaranteed quality and customer
            satisfaction. Experience the best in car care and performance
            upgrades.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-gray-700">
              Quality Guarantee
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
            <Truck className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">
              Free Pickup & Drop
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
            <Clock className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">
              Same Day Service
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
            <Award className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">
              Certified Experts
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Vertical Tabs */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xs  border border-gray-200 p-3 sticky top-6">
              <div className="space-y-2">
                {serviceData.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`w-full flex items-center gap-3 py-2 px-4 rounded-xs transition-all duration-200 text-left ${
                        activeTab === tab.id
                          ? "bg-black/10 border border-black/20 text-black/90 font-semibold"
                          : "text-gray-700 hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      <IconComponent
                        className={`w-3 h-3 ${
                          activeTab === tab.id
                            ? "text-black/80"
                            : "text-gray-500"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{tab.label}</div>
                        <div className="text-xs text-gray-500">
                          {tab.services.length} services
                        </div>
                      </div>
                      {activeTab === tab.id && (
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services Content */}
          <div className="w-full lg:w-3/4">
            <div className="p-6 bg-slate-50 border border-slate-200">
              {/* Active Tab Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  {(() => {
                    const IconComponent = serviceData.find(
                      (tab) => tab.id === activeTab
                    )?.icon;
                    return IconComponent ? (
                      <IconComponent className="w-4 h-4 text-black/80" />
                    ) : null;
                  })()}
                  <div>
                    <h2 className="text-sm font-bold text-gray-900">
                      {serviceData.find((tab) => tab.id === activeTab)?.label}
                    </h2>
                    <p className="text-gray-600 text-xs">
                      Professional{" "}
                      {serviceData
                        .find((tab) => tab.id === activeTab)
                        ?.label.toLowerCase()}{" "}
                      with guaranteed results
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className=" text-xs font-bold text-black/80 flex items-center gap-1">
                    <Users className="w-3 h-3 text-gray-500" />
                    {
                      serviceData.find((tab) => tab.id === activeTab)?.services
                        .length
                    }{" "}
                    Services
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {serviceData
                  .find((tab) => tab.id === activeTab)
                  ?.services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                  ))}
              </div>

              {/* No Services Message */}
              {serviceData.find((tab) => tab.id === activeTab)?.services
                .length === 0 && (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-4">
                    <Wrench className="w-16 h-16 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No services available
                  </h3>
                  <p className="text-gray-500">
                    Check back later for new service offerings.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-slate-100 rounded-xs p-8 text-black/80 border-slate-300 border">
            <h3 className="text-2xl font-bold mb-4">Need Custom Service?</h3>
            <p className="lg:text-sm text-xs mb-6 opacity-90">
              Contact our experts for personalized service solutions
            </p>
            <button className="bg-white text-black/80 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 mx-auto">
              <Phone className="w-4 h-4" />
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;