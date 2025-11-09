import type { ReviewItem } from "../data/types";

export interface ReviewCardProps {
  item: ReviewItem;
}

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const fullStars = "⭐".repeat(Math.round(rating));
  return <div className="mb-2 text-yellow-400 text-2xl">{fullStars}</div>;
};

const ReviewAuthor: React.FC<ReviewCardProps> = ({ item }) => (
  <div className="mt-auto pt-2 border-t border-gray-100 flex items-center">
    <img
      src={item.avatar}
      alt={item.altText}
      className="w-10 h-10 rounded-full mr-3 object-cover bg-gray-200"
    />
    <div>
      <p className="font-semibold text-gray-800">{item.name}</p>
      <p className="text-sm text-gray-500">{item.date}</p>
    </div>
  </div>
);

export const ReviewCard: React.FC<ReviewCardProps> = ({ item }) => {
  return (
    <div
      className="flex flex-col p-6
       bg-white rounded-xl shadow-md 
       border border-gray-100"
    >
      <StarRating rating={item.rating} />

      <p className="text-gray-700 italic mb-4 grow">"{item.reviewText}"</p>

      <ReviewAuthor item={item} />
    </div>
  );
};
