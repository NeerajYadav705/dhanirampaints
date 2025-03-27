import About from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurClients from "@/components/OurClients ";

import ProductSection from "@/components/products/ProductSection";
import QualityControlSection from "@/components/QualityControlSection ";
import TeamSection from "@/components/TeamSection";
// import TeamSection from "@/components/TeamSection ";

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
      <QualityControlSection />
      <ContactSection />
      <EnquirySection />
      {/* <TeamSection/> */}
      <Footer />
    </>
  );
};

export default page;
