import AboutSection from "@/components/AboutSection ";
import ContactSection from "@/components/ContactSection";
import EnquirySection from "@/components/EnquirySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurClients from "@/components/OurClients ";

import ProductSection from "@/components/products/ProductSection";
import QualityControlSection from "@/components/QualityControlSection ";
import TeamSection from "@/components/TeamSection";
import USP from "@/components/usp";
// import TeamSection from "@/components/TeamSection ";

import VisionMissionCommitment from "@/components/VisionMission ";
import WhatsAppButton from "@/components/WhatsAppButton";
import React from "react";

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <USP />
      <VisionMissionCommitment />
      <OurClients />
      <FAQSection />
      {/* <WhatsAppButton /> */}
      {/* <ProductSection />
      <QualityControlSection />
      <ContactSection />
      <EnquirySection /> */}
      {/* <TeamSection/> */}
      {/* <Footer /> */}
    </>
  );
};

export default page;
