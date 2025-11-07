// src/templates/LandingStructure.tsx

import React from "react";
import type { LandingPageData } from "../data/types";
import { BannerTemplate } from "./BannerTemplate";
// ... інші імпорти

interface LandingStructureProps {
  data: LandingPageData;
}

const LandingStructure: React.FC<LandingStructureProps> = ({ data }) => {
  return (
    <div className="landing-wrapper min-h-screen font-sans">
      <BannerTemplate
        data={data.heroSection}
        pixelIdentifier={data.pixelIdentifier}
      />

      {/* ... інші шаблони секцій ... */}

      {/* Секція переваг */}
      {/* Секція відгуків */}
      {/* <FooterTemplate data={data.footer} /> */}

      {/* Цей елемент потрібен для нашого якоря '#lead-form' */}
      <div id="lead-form" className="h-4"></div>
    </div>
  );
};

export default LandingStructure;
