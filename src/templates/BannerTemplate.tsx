//src/templates/BannerTemplate.tsx
import { CtaButton } from "../components/CtaButton";
import { HeroTitle } from "../components/HeroTitle";
import type { HeroSectionData } from "../data/types";

interface BannerTemplateProps {
  data: HeroSectionData;
  pixelIdentifier: string;
}

export const BannerTemplate: React.FC<BannerTemplateProps> = ({
  data,
  pixelIdentifier,
}) => {
  return (
    <section>
      <HeroTitle title={data.title} subtitle={data.subtitle} />
      <CtaButton
        text={data.callToActionButtonText}
        link={data.callToActionLink}
        title={pixelIdentifier}
      />
    </section>
  );
};
