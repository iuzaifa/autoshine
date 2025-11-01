import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import OurTeam from "../pages/OurTeam";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/product" element={<Product />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/our-team" element={<OurTeam />} />
    </Routes>
  );
};

export default AppRoutes;
