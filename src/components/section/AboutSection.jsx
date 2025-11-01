
import React from "react";
import { CheckCheck, Award, Users, Clock, Shield } from "lucide-react";

const AboutSection = () => {
  const keyPoints = [
    "10+ Years in Auto Accessories Industry",
    "Premium Quality Parts",
    "Trusted by 2000+ Customers",
    "Fast & Reliable Service",
  ];

  const stats = [
    { icon: Clock, number: "10+", label: "Years Experience" },
    { icon: Users, number: "2000+", label: "Happy Customers" },
    { icon: Award, number: "300+", label: "Products" },
    { icon: Shield, number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="relativ bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate/10 border border-slate-500/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-teal-500/80" />
            <span className="text-black/80 text-sm font-medium">
              Trusted Since 2013
            </span>
          </div>
          <h1 className="text-3xl font-bold text-black/80 mb-6">
            Driving <span className="text-teal-500">Excellence</span> in Auto
            Care
          </h1>
          <p className="lg:text-sm text-xs text-black/80 max-w-3xl mx-auto leading-relaxed font-light">
            Premium auto parts and lighting solutions that transform your
            driving experience with unmatched quality and performance.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-slate-100 border border-slate-200 backdrop-blur-sm rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-balck/80 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-teal-500">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Premium car headlights and auto parts"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-balck/80 font-semibold">
                    Quality Guaranteed
                  </div>
                  <div className="text-teal-400 text-sm">Since 2013</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-balck/80">
                Your Trusted Partner in{" "}
                <span className="text-teal-500">Auto Excellence</span>
              </h2>

              <div className="space-y-4">
                <p className="lg:text-sm text-xs text-black/80 leading-relaxed">
                  At{" "}
                  <span className="text-balck/80 font-semibold">
                    Auto Shine Lights
                  </span>
                  , we blend decades of automotive expertise with cutting-edge
                  innovation to deliver exceptional auto parts and lighting
                  solutions that tealefine driving standards.
                </p>

                <p className="lg:text-sm text-xs text-black/80 leading-relaxed">
                  Specializing in high-performance lighting systems and premium
                  accessories, we enhance both vehicle safety and aesthetics
                  while ensuring every product exceeds industry quality
                  standards.
                </p>

                <p className="lg:text-sm text-xs text-black/80 leading-relaxed">
                  Trusted by automotive enthusiasts and professionals worldwide,
                  we continue to push innovation boundaries while maintaining
                  our core values of reliability, excellence, and customer
                  satisfaction.
                </p>
              </div>
            </div>

            {/* Key Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-1 bg-white/5 rounded-xs border border-slate-200/60 hover:border-teal-500/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xs flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-balck/80 text-xs">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-black/80 text-sm hover:bg-black/90 text-white py-2 px-4 rounded-xs transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2">
                Explore Our Products
              </button>

              <button className="border-2 border-black/80 hover:border-black/90 hover:bg-black/10 text-balck/80  py-2 px-4 rounded-xs text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Border */}
        {/* <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-balck/80">ISO 9001</div>
              <div className="text-sm">Quality Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-balck/80">2-Year</div>
              <div className="text-sm">Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-balck/80">Free</div>
              <div className="text-sm">Shipping Over $99</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
