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
      <header>
        <BannerTemplate
          data={data.heroSection}
          pixelIdentifier={data.pixelIdentifier}
        />
      </header>

      <main>
        <ScrollReveal>
          <BenefitsTemplate data={data.benefitsSection} />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <ReviewsTemplate data={data.reviewSection} />
        </ScrollReveal>

        {/* This element is needed for our '#lead-form' anchor */}
        <div id="lead-form" className="h-4"></div>
      </main>

      <ScrollReveal>
        <FooterTemplate data={data.footer} />
      </ScrollReveal>
    </div>
  );
};

export default LandingStructure;
