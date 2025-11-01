import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      {/* <WhatsAppButton
        phoneNumber="919876543210"
        message="Hello, I'm interested in detailing services from your website."
      /> */}
    </>
  );
}

export default App;
