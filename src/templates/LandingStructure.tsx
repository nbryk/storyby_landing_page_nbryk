// src/templates/LandingStructure.tsx

import React from "react";
import type { LandingPageData } from "../data/types";
import { BannerTemplate } from "./BannerTemplate";
import { BenefitsTemplate } from "./BenefitsTemplate";
import { ReviewsTemplate } from "./ReviewsTemplate";
import { FooterTemplate } from "./FooterTemplate";
import { ScrollReveal } from "../components/ScrollReveal";

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

      {/* Секція переваг */}
      <ScrollReveal>
        <BenefitsTemplate data={data.benefitsSection} />
      </ScrollReveal>

      {/* Секція відгуків */}
      <ScrollReveal delay={150}>
        <ReviewsTemplate data={data.reviewSection} />
      </ScrollReveal>

      {/* Цей елемент потрібен для нашого якоря '#lead-form' */}
      <div id="lead-form" className="h-4"></div>

      <ScrollReveal>
        <FooterTemplate data={data.footer} />
      </ScrollReveal>
    </div>
  );
};

export default LandingStructure;
