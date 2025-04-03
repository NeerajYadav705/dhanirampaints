import AboutSection from "@/components/AboutSection ";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients ";
import { ScrollToProductsButton } from "@/components/ScrollToProductsButton";
import Tagline from "@/components/Tagline";
// import ScrollToProductsButton from "@/components/ScrollToProductsButton";
import USP from "@/components/usp";
import VisionMissionCommitment from "@/components/VisionMission ";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <USP />
      <VisionMissionCommitment />
      <OurClients />
      <ScrollToProductsButton />
      <FAQSection />
      <Tagline />
    </>
  );
};

export default page;
