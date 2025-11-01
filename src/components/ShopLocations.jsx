import React, { useState } from "react";
import {
  Building,
  MapPin,
  Phone,
  Clock,
  Users,
  ArrowRight,
  Car,
  Wifi,
  Coffee,
  ParkingCircle,
  ShoppingBag,
  Star,
  Navigation,
} from "lucide-react";

function ShopLocations() {

  const shopLocations = [
    {
      id: 1,
      name: "Downtown Flagship Store",
      type: "Flagship",
      address: "123 Main Street, Downtown, City Center",
      phone: "+1 (555) 123-4567",
      hours: {
        weekdays: "9:00 AM - 9:00 PM",
        weekends: "10:00 AM - 8:00 PM",
        special: "Open all holidays",
      },
      manager: "Sarah Johnson",
      staff: "15 Team Members",
      size: "5,000 sq ft",
      established: "2018",
      icon: Building,
      color: "blue",
      features: [
        { icon: ShoppingBag, text: "Full Product Range" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Coffee, text: "Coffee Bar" },
        { icon: ParkingCircle, text: "Valet Parking" },
        { icon: Car, text: "Drive-through Pickup" },
      ],
      services: [
        "Personal Shopping",
        "Gift Wrapping",
        "Product Demos",
        "Repair Services",
      ],
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      coordinates: { lat: 40.7128, lng: -74.006 },
    },
    {
      id: 2,
      name: "Westside Mall Location",
      type: "Mall Store",
      address: "456 Oak Avenue, Westside Shopping Mall",
      phone: "+1 (555) 234-5678",
      hours: {
        weekdays: "10:00 AM - 9:00 PM",
        weekends: "11:00 AM - 7:00 PM",
        special: "Extended holiday hours",
      },
      manager: "Michael Chen",
      staff: "12 Team Members",
      size: "3,500 sq ft",
      established: "2020",
      icon: MapPin,
      color: "green",
      features: [
        { icon: ShoppingBag, text: "Latest Collections" },
        { icon: ParkingCircle, text: "Mall Parking" },
        { icon: Coffee, text: "Food Court Nearby" },
        { icon: Car, text: "Curbside Pickup" },
        { icon: Wifi, text: "Free Mall WiFi" },
      ],
      services: [
        "Style Consultations",
        "Alterations",
        "Loyalty Program",
        "Mobile Payments",
      ],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      coordinates: { lat: 40.7589, lng: -73.9851 },
    },
    {
      id: 3,
      name: "Northpoint Express",
      type: "Boutique",
      address: "789 Pine Road, Northpoint Heights",
      phone: "+1 (555) 345-6789",
      hours: {
        weekdays: "8:00 AM - 10:00 PM",
        weekends: "8:00 AM - 10:00 PM",
        special: "24/7 Online Order Pickup",
      },
      manager: "Emily Rodriguez",
      staff: "8 Team Members",
      size: "2,000 sq ft",
      established: "2022",
      icon: Users,
      color: "purple",
      features: [
        { icon: ShoppingBag, text: "Curated Selection" },
        { icon: Coffee, text: "Complimentary Coffee" },
        { icon: ParkingCircle, text: "Free Parking" },
        { icon: Car, text: "Quick Pickup" },
        { icon: Wifi, text: "High-speed WiFi" },
      ],
      services: [
        "Express Checkout",
        "Local Delivery",
        "Gift Cards",
        "Product Workshops",
      ],
      image:
        "https://images.unsplash.com/photo-1556740772-1a741babac2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      coordinates: { lat: 40.7549, lng: -73.984 },
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-100 text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      border: "border-blue-200",
      text: "text-blue-600",
    },
    green: {
      bg: "bg-green-50",
      icon: "bg-green-100 text-green-600",
      button: "bg-green-600 hover:bg-green-700 text-white",
      border: "border-green-200",
      text: "text-green-600",
    },
    purple: {
      bg: "bg-purple-50",
      icon: "bg-purple-100 text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700 text-white",
      border: "border-purple-200",
      text: "text-purple-600",
    },
  };


  return (
    <div className="py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-black/80">
        Compare Auto Shine Lights Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shopLocations.map((shop) => {
          const colors = colorClasses[shop.color];
          return (
            <div
              key={shop.id}
              className={`border bg-gray-50 border-black/10 rounded-xs p-6 transition-all duration-300 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colors.icon}`}>
                  <shop.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold lg:text-sm text-xs text-gray-900">
                    {shop.name}
                  </h3>
                  <p className="text-xs text-gray-600">{shop.type}</p>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-gray-800 flex items-center gap-2">
                  <MapPin className="w-4 h-4 " />
                  {shop.address.split(",")[0]}
                </p>
                <p className="text-gray-800 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {shop.hours.weekdays}
                </p>
                <p className="text-gray-800 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {shop.manager}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopLocations;
