import React from "react";
import type { BenefitItem } from "../data/types";

interface BenefitCardProps {
  item: BenefitItem;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={item.icon}
        alt={item.altText}
        className="w-12 h-12 mb-4 text-indigo-600"
      />

      <h3 className="text-xl font-semibold mb-2 text-blue-800 text-center">
        {item.title}
      </h3>

      <p className="text-gray-400 text-center">{item.description}</p>
    </div>
  );
};
