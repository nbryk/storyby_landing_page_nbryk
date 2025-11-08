// src/components/BenefitCard.tsx
import React from "react";
import type { BenefitItem } from "../data/types";

// Важливо: BenefitItem має містити icon, title, description, altText
interface BenefitCardProps {
  item: BenefitItem;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Іконка (використовуємо <img> для SVG) */}
      <img
        src={item.icon}
        alt={item.altText}
        className="w-12 h-12 mb-4 text-indigo-600"
      />

      {/* Заголовок */}
      <h3 className="text-xl font-semibold mb-2 text-blue-800 text-center">
        {item.title}
      </h3>

      {/* Опис */}
      <p className="text-gray-400 text-center">{item.description}</p>
    </div>
  );
};
