// src/components/ReviewCard.tsx

import type { ReviewItem } from "../data/types";

export interface ReviewCardProps {
  item: ReviewItem;
}

interface StarRatingProps {
  rating: number;
}
// Функція для відображення зірочок (можна спростити, використовуючи іконку)
const StarRating = ({ rating }: StarRatingProps) => {
  // Тут ми просто створюємо рядок із зірочок для ілюстрації
  const fullStars = "⭐".repeat(Math.round(rating));
  return <div className="mb-2 text-yellow-400 text-2xl">{fullStars}</div>;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl shadow-md border border-gray-100">
      {/* 1. Рейтинг у зірочках */}
      <StarRating rating={item.rating} />

      {/* 2. Текст відгуку */}
      <p className="text-gray-700 italic mb-4 grow">"{item.reviewText}"</p>

      {/* 3. Автор та Дата */}
      <div className="mt-auto pt-2 border-t border-gray-100">
        <p className="font-semibold text-gray-800">{item.name}</p>
        <p className="text-sm text-gray-500">{item.date}</p>
      </div>
    </div>
  );
};
