
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Shield,
  Truck,
  Clock,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "Services", href: "/service" },
    { name: "Contact", href: "/contact" },
    { name: "Our Team", href: "/ourteam" },
  ];

  const products = [
    { name: "Brake Systems", href: "/brakes" },
    { name: "Engine Parts", href: "/engine" },
    { name: "Suspension", href: "/suspension" },
    { name: "Lighting", href: "/lighting" },
    { name: "Accessories", href: "/accessories" },
    { name: "Performance", href: "/performance" },
  ];

  const services = [
    { name: "Installation", href: "/installation" },
    { name: "Maintenance", href: "/maintenance" },
    { name: "Repair", href: "/repair" },
    { name: "Customization", href: "/customization" },
    { name: "Warranty", href: "/warranty" },
  ];

  const socialMedia = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
  ];

  const contactInfo = {
    email: "info@autoshine.com",
    phone1: "+1 (555) 123-4567",
    phone2: "+1 (555) 123-4568",
    address: "123 Auto Parts Street, Motor City, MC 12345",
  };

  return (
    <footer className="bg-black/95 text-gray-300">
      {/* Trust Badges */}
      <div className="bg-black/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
            <div className="flex items-center justify-center py-6 px-4">
              <div className="flex items-center space-x-3">
                <Truck className="text-blue-400" size={24} />
                <div>
                  <h3 className="font-semibold lg:text-sm text-xs text-white">
                    Free Shipping
                  </h3>
                  <p className="text-gray-400 lg:text-sm text-xs">
                    On orders over ₹ 1999
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-6 px-4">
              <div className="flex items-center space-x-3">
                <Shield className="text-green-400" size={24} />
                <div>
                  <h3 className="font-semibold lg:text-sm text-xs text-white">
                    2-Year Warranty
                  </h3>
                  <p className="text-gray-400 lg:text-sm text-xs">
                    On all auto parts
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-6 px-4">
              <div className="flex items-center space-x-3">
                <Clock className="text-yellow-400" size={24} />
                <div>
                  <h3 className="font-semibold lg:text-sm text-xs text-white">
                    Expert Support
                  </h3>
                  <p className="text-gray-400 lg:text-sm text-xs">
                    24/7 customer service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ">
          {/* Company Info & Social */}
          <div className="lg:col-span-1 ">
            <img src="/logo/logo.png" className="h-16 w-full" alt="" />
            <div className="mb-6 ">
              <p className="text-gray-400 text-xs py-3 leading-relaxed mb-4">
                Your trusted partner for premium auto parts and accessories.
                Quality you can rely on, service you deserve.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialMedia.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${item.color}`}
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {menus.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-slate-600 h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${contactInfo.phone1}`}
                    className="hover:text-white transition-colors block text-xs"
                  >
                    {contactInfo.phone1}
                  </a>
                  <span className="text-gray-500 text-xs">Sales</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-slate-600 h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${contactInfo.phone2}`}
                    className="hover:text-white  text-xs transition-colors block"
                  >
                    {contactInfo.phone2}
                  </a>
                  <span className="text-gray-500 text-xs">Support</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-slate-600 h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white text-xs transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-slate-600 h-4 w-4mt-0.5 flex-shrink-0" />
                <span className="text-xs">{contactInfo.address}</span>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-black/80 rounded-lg">
              <h5 className="text-white font-semibold text-sm mb-2">
                Business Hours
              </h5>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-gray-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-gray-400">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-white font-semibold">Auto Shine</span>.
                All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <a
                href="/privacy"
                className="hover:text-white transition-colors text-gray-400"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-white transition-colors text-gray-400"
              >
                Terms of Service
              </a>
              <a
                href="/shipping"
                className="hover:text-white transition-colors text-gray-400"
              >
                Shipping Policy
              </a>
              <a
                href="/returns"
                className="hover:text-white transition-colors text-gray-400"
              >
                Returns & Refunds
              </a>
            </div>

            <div className="text-gray-400 text-sm">
              <span className="flex items-center space-x-1">
                <Shield size={14} />
                <span>Secure Payment</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
