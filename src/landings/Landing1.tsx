// src/landings/Landing1.tsx
import React from "react";
import { landingPageData } from "../data/landings/landing-1-data";
import LandingStructure from "../templates/LandingStructure";

const Landing1: React.FC = () => {
  // Встановлення title (це має відбутися до повернення JSX)
  document.title = landingPageData.metaTitle;

  return <LandingStructure data={landingPageData} />;
};

export default Landing1;
