import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Truck,
  Shield,
  Zap,
} from "lucide-react";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Premium Auto Parts & Accessories",
      description:
        "Get genuine car parts with 3 Year warranty. Free shipping on orders above ₹4999. Expert support 24/7.",
      image: "/image/slider1.jpg",
    },
    {
      id: 2,
      title: "Expert Car Repair Services",
      description:
        "Professional mechanics ready to service your vehicle. Book online and get 20% off your first service.",
      image: "/image/slider2.jpg",
    },
    {
      id: 3,
      title: "Quality Brake Systems",
      description:
        "Upgrade your vehicle's braking performance with our premium brake rotors and pads. Safety first.",
      image: "/image/slider3.jpg",
    },
  ];

  return (
    <>
      <section className="relative bg-gray-900">
        {/* Main Slider */}
        <div className="slider-container relative">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="relative">
                {/* Background Image Container */}
                <div className="h-[50vh] min-h-[400px] relative overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/50"></div>

                  {/* Centered Content */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70">
                    <div className="text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
                      {/* Centered Heading */}
                      <h1 className="lg:text-3xl text-xl font-bold mb-6 leading-tight">
                        {slide.title}
                      </h1>

                      {/* Centered Paragraph */}
                      <p className="lg:text-sm text-xs text-gray-200 mb-8 max-w-2xl mx-auto">
                        {slide.description}
                      </p>

                      {/* Centered CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* Centered Call & WhatsApp Buttons */}
                        <div className="flex gap-4 justify-center">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xs font-medium lg:text-sm text-xs transition-all duration-300 flex items-center justify-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>Call Now</span>
                          </button>

                          <button className="bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-2 rounded-xs font-medium lg:text-sm text-xs transition-all duration-300 flex items-center justify-center space-x-2">
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Dots Position */}
          <style jsx>{`
            .slick-dots {
              bottom: 30px !important;
            }
            .slick-dots li button:before {
              color: white !important;
              opacity: 0.5;
              font-size: 12px;
            }
            .slick-dots li.slick-active button:before {
              opacity: 1;
              color: #3b82f6 !important;
            }
            .slick-prev,
            .slick-next {
              z-index: 10;
            }
            .slick-prev {
              left: 25px;
            }
            .slick-next {
              right: 25px;
            }
            .slick-prev:before,
            .slick-next:before {
              font-size: 28px;
              opacity: 0.8;
            }
          `}</style>
        </div>

        {/* Floating Action Buttons for Mobile */}
        {/* <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
          <button className="bg-[#25D366] hover:bg-[#20b858] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
            <MessageCircle size={24} />
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
            <Phone size={24} />
          </button>
        </div> */}
      </section>

      {/* Centered Quick Info Bar */}
      <div className=" text-black/80 py-2 my-0">
        <div className="max-w-7xl">
          <div className="flex items-center justify-between px-3 text-center">
            <div className="flex justify-center items-center gap-4">
              <span className="flex items-center justify-center space-x-2 text-xs">
                <Truck className="h-5 w-5 text-blue-600 " />
                <span>Free Shipping Over ₹1999</span>
              </span>
              <span className="flex items-center justify-center space-x-2 text-xs">
                <Shield className="h-5 w-5 text-green-600" />
                <span>2-Year Warranty</span>
              </span>
              <span className="flex items-center justify-center space-x-2 text-xs">
                <Zap className="h-5 w-5 text-yellow-600" />
                <span>Within 5 Day Shipping</span>
              </span>
            </div>

            {/* Centered Desktop Contact Buttons */}
            <div className="hidden md:flex items-center justify-center space-x-6 mt-2">
              <span className="text-black/80 text-xs">
                Need help? Contact us:
              </span>
              <button className="flex text-xs items-center space-x-2 text-black/80 transition-colors">
                <Phone className="h-4 w-4 text-green-600" />
                <span>+1 (555) 123-4567</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
