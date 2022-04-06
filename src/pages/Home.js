import React from "react";
import HeaderSection from "../components/HeaderSection";
import HomeSection from "../components/HomeSection";
import FooterSection from "../components/FooterSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
import UsageSection from "../components/UsageSection";
import ReviewSection from "../components/ReviewSection";
import PricingSection from "../components/PricingSection";
import "../css/style.css";
import ContactSection from "../components/ContactSection";
function Home() {
  return (
    <div>
      <HeaderSection />
      <HomeSection />
      <FeaturesSection />
      <AboutSection />
      <UsageSection />
      <ReviewSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Home;
