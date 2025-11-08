// src/templates/LandingStructure.tsx

import React from "react";
import type { LandingPageData } from "../data/types";
import { BannerTemplate } from "./BannerTemplate";
import { BenefitsTemplate } from "./BenefitsTemplate";
import { ReviewsTemplate } from "./ReviewsTemplate";
import { FooterTemplate } from "./FooterTemplate";

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
      <BenefitsTemplate data={data.benefitsSection} />
      {/* Секція відгуків */}
      <ReviewsTemplate data={data.reviewSection} />

      {/* Цей елемент потрібен для нашого якоря '#lead-form' */}
      <div id="lead-form" className="h-4"></div>

      <FooterTemplate data={data.footer} />
    </div>
  );
};

export default LandingStructure;
