// src/templates/BenefitsTemplate.tsx
import React from "react";
import type { BenefitsSectionData } from "../data/types";
import { BenefitCard } from "../components/BenefitCard";

interface BenefitsTemplateProps {
  data: BenefitsSectionData;
}

export const BenefitsTemplate: React.FC<BenefitsTemplateProps> = ({ data }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секції */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {data.title}
        </h2>

        {/* Сітка для карток (адаптивна ґратка) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
