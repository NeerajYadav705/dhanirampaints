import About from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurClients from "@/components/OurClients ";

import ProductSection from "@/components/products/ProductSection";

import VisionMissionCommitment from "@/components/VisionMissionCommitment ";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionMissionCommitment />
      <OurClients />
      <ProductSection />
      <Footer />
    </>
  );
};

export default page;
