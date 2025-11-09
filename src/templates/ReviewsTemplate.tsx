import React from "react";
import type { ReviewsSectionData } from "../data/types";
import { ReviewCard } from "../components/ReviewCard";

interface ReviewsTemplateProps {
  data: ReviewsSectionData;
}

export const ReviewsTemplate: React.FC<ReviewsTemplateProps> = ({ data }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {data.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.reviews.map((item) => (
            <ReviewCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
