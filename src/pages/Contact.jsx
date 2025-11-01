import React, { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      pincode: "",
      message: "",
    });
  };

  return (
    <section className="lg:py-16 py-5 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black/80 mb-4">
            Get In Touch
          </h2>
          <p className="lg:text-sm text-xs text-gray-600 max-w-2x">
            Have questions about auto parts? We're here to help. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-50 rounded-sm lg:p-6 p-4  border border-gray-100">
              <h3 className="text-xl font-semibold text-black/80 mb-6">
                Contact Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs lg:text-sm text-black/80">
                      Phone
                    </h4>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs lg:text-sm text-black/80">
                      Email
                    </h4>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      support@autoparts.com
                    </p>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      sales@autoparts.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs lg:text-sm text-black/80">
                      Address
                    </h4>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      123 Auto Parts Street
                      <br />
                      Motor City, MC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-black/80 ">
              <h3 className="text-xs lg:lg:text-sm text-xs mb-3">
                Business Hours
              </h3>
              <div className="space-y-2 text-black/80">
                <div className="flex justify-between text-xs lg:text-sm">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-xs lg:text-sm">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-xs lg:text-sm">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-lg border border-slate-100  p-6 md:p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-3  max-w-3xl mx-auto"
              >
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block lg:text-sm text-xs text-gray-700 mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-1 border border-gray-300 rounded-xs text-gray-700 
        focus:ring-1 focus:ring-black/80 focus:border-black/80 
        focus:outline-none transition-all hover:border-gray-400 placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block lg:text-sm text-xs text-gray-700 mb-1"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-1 border border-gray-300 rounded-xs text-gray-700 
        focus:ring-1 focus:ring-black/80 focus:border-black/80 
        focus:outline-none transition-all hover:border-gray-400 placeholder-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block lg:text-sm text-xs text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-1 border border-gray-300 rounded-xs text-gray-700 
      focus:ring-1 focus:ring-black/80 focus:border-black/80 
      focus:outline-none transition-all hover:border-gray-400 placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Address & Pincode */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="address"
                      className="block lg:text-sm text-xs text-gray-700 mb-1"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-1 border border-gray-300 rounded-xs text-gray-700 
        focus:ring-1 focus:ring-black/80 focus:border-black/80 
        focus:outline-none transition-all hover:border-gray-400 placeholder-gray-400"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pincode"
                      className="block lg:text-sm text-xs text-gray-700 mb-1"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-4 py-1 border border-gray-300 rounded-xs text-gray-700 
        focus:ring-1 focus:ring-black/80 focus:border-black/80 
        focus:outline-none transition-all hover:border-gray-400 placeholder-gray-400"
                      placeholder="Enter pincode"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block lg:text-sm text-xs text-gray-700 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-1 border border-gray-300 rounded-xs text-gray-700 
      focus:ring-1 focus:ring-black/80 focus:border-black/80 
      focus:outline-none transition-all hover:border-gray-400 placeholder-gray-400 resize-none"
                    placeholder="Tell us about your auto parts needs or any questions you have..."
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="w-full md:w-1/3 py-1 px-4 rounded-xs lg:text-sm text-xs border border-gray-300
      focus:ring-1 focus:outline-black/50 focus:ring-black/80 focus:border-black/80 
      transition-colors hover:bg-gray-100 font-medium text-gray-700"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="w-full md:w-2/3 bg-black/80 hover:bg-black/90 text-white 
      py-1 px-4 rounded-xs lg:text-sm text-xs  transition-all duration-300 
      transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
