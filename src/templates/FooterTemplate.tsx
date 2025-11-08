import { Logo } from "../components/Logo";
import type { FooterData } from "../data/types";

//src/templates/FooterTemplate.tsx
interface FooterTemplateProps {
  data: FooterData;
}

export const FooterTemplate: React.FC<FooterTemplateProps> = ({ data }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Копірайт */}

        <Logo path={data.logoUrl} altText={data.altText} size="sm" />
        <p className="text-sm mb-4">{data.address}</p>

        <p className="text-sm mb-4">{data.email}</p>

        <p className="text-sm mb-4">{data.phoneNumber}</p>

        {/* Додаткові посилання (якщо є) */}
        {/* data.links.map((link) => (...) ) */}

        {/* Назва компанії або продукту */}
        <p className="text-xs text-gray-400">Created to {data.altText}</p>
      </div>
    </footer>
  );
};
