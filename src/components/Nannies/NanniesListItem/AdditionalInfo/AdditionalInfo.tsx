import { AdditionalInfoProps } from './AdditionalInfo.type';
import sprite from '../../../../assets/sprite.svg';

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ labels }) => {
  return (
    <ul className="flex flex-wrap gap-1">
      {labels.map((item, index) => (
        <li className="flex gap-1 xs:flex-col md:flex-row" key={item.title}>
          <span className="flex items-center gap-1 leading-[150%] xs:text-sm md:text-base">
            {item.title !== 'Price / 1 hour:' && (
              <svg
                className={`mb-1 flex-shrink-0 transition-colors duration-300 ${item.title === 'Rating:' ? 'fill-skin-rating' : 'fill-transparent stroke-skin-base-text'}`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <use xlinkHref={`${sprite}#icon-${item.icon}`} />
              </svg>
            )}
            {item.title !== 'Location' && item.title}
            <span
              className={`${item.title === 'Price / 1 hour:' ? 'text-skin-salary' : 'text-skin-base xs:text-sm md:text-base'}`}
            >
              {' '}
              {` ${item.value}`}
            </span>
          </span>
          {(index === 0 || index === 1) && (
            <div
              className={`mx-4 bg-skin-grey opacity-20 xs:h-[1px] xs:w-[100%] md:h-[94%] md:w-[1px]`}
            ></div>
          )}
        </li>
      ))}
    </ul>
  );
};
