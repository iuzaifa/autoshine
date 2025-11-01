import React from "react";
import { MessageSquareText } from "lucide-react";

const WhatsAppButton = ({ phoneNumber, message }) => {
  // IMPORTANT: Replace this with your actual phone number (include country code, no symbols)
  // Example: '919876543210' for an Indian number
  const defaultPhoneNumber = phoneNumber || "919876543210";

  // Optional: Pre-filled message text
  // URL-encode the message to ensure spaces and special characters work correctly
  const defaultMessage =
    message ||
    "Hi Auto Shine Lights, I'm interested in your luxury finishing works!";
  const encodedMessage = encodeURIComponent(defaultMessage);

  // WhatsApp API link structure
  const whatsappLink = `https://wa.me/${defaultPhoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      // Tailwind classes for fixed, bottom-right positioning and styling
      className="fixed bottom-6 right-6 z-50 
                 text-white 
                 lg:p-2 p-0
                  rounded-full shadow-gray-200xl  
                 transition duration-300 ease-in-out 
                 transform hover:scale-110 lg:m-5"
      aria-label="Message us on WhatsApp"
    >
      <img src="logo/whatsaap.png" alt="whatsaap" className="lg:h-14 lg:w-14 w-10 h-10" />
    </a>
  );
};

export default WhatsAppButton;
