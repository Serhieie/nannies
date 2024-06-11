import { ReviewsListItem } from '../ReviewsListItem/ReviewsListItem';
import { ReviewsListProps } from './ReviewsList.type';

export const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <ul className="flex flex-col gap-[25px]">
      {reviews.map((review) => (
        <ReviewsListItem key={review.reviewer} review={review} />
      ))}
    </ul>
  );
};
