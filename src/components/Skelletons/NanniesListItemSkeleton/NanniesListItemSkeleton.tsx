import sprite from 'assets/sprite.svg';
import { CardBottomPartSkeleton } from './CardBottomPartSkeleton/CardBottomPartSkelleton';
import { useMedia } from '../../../hooks';
import clsx from 'clsx';
import { FavoriteButtonSkeleton } from './FavoriteButtonSkeleton/FavoriteButtonSkeleton';
import { CardHeadSkeleton } from './CardHeadSkeleton/CardHeadSkeleton';
import { LabelListSkeleton } from './LabelListSkeleton/LabelListSkeleton';

export const NanniesListItemSkeleton: React.FC = () => {
  const { isDesktop } = useMedia();

  return (
    <>
      <li
        className={clsx(
          'relative flex flex-col gap-6 bg-skin-background-fullWhite',
          'rounded-[30px] xs:p-4 sm:p-6 xl:flex-row'
        )}
      >
        <div className="flex gap-4 xs:flex-col sm:flex-row">
          <div
            className={clsx(
              'flex h-[120px] w-[120px] flex-shrink-0 items-center',
              'justify-center rounded-[30px] border-2 border-skin-primary',
              'border-opacity-20 p-3'
            )}
          >
            <svg
              className={clsx(
                `mx-auto h-32 w-32 fill-skin-primary opacity-60 transition-colors duration-300`
              )}
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
            >
              <use xlinkHref={`${sprite}#icon-image`} />
            </svg>
          </div>
          {!isDesktop && <CardHeadSkeleton />}
          {!isDesktop && <FavoriteButtonSkeleton />}
        </div>

        <div className="flex flex-col gap-6">
          {isDesktop && <CardHeadSkeleton />}
          <LabelListSkeleton />
          <CardBottomPartSkeleton />
        </div>
      </li>
    </>
  );
};
