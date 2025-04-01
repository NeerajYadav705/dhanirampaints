import AboutSection from "@/components/AboutSection ";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients ";
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
      <FAQSection />
    </>
  );
};

export default page;
