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
    <section
      className={`
      h-[80vh] flex flex-col items-center justify-center
      relative overflow-hidden 
      px-4 sm:px-6 bg-blue-950
    `}
    >
      <HeroTitle title={data.title} subtitle={data.subtitle} />

      <div className="mt-8">
        <CtaButton
          text={data.callToActionButtonText}
          link={data.callToActionLink}
          title={pixelIdentifier}
        />
      </div>
    </section>
  );
};
