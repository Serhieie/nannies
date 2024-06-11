import { ReviewsListItemProps } from './ReviewsListItem.types';
import sprite from '../../../../assets/sprite.svg';

export const ReviewsListItem: React.FC<ReviewsListItemProps> = ({ review }) => {
  const firstLetter = review.reviewer[0].toUpperCase();
  return (
    <li className="flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-skin-background bg-opacity-60">
          <span className="mt-0.5 text-skin-theme">{firstLetter}</span>
        </div>
        <div>
          <h3 className="text-skin-base">{review.reviewer}</h3>
          <span className="flex gap-2 font-normal">
            <svg
              className="fill-skin-rating"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            {review.rating.toFixed(1)}
          </span>
        </div>
      </div>
      <p className="text-base font-normal text-skin-secondary">
        {review.comment}
      </p>
    </li>
  );
};
