import { useMedia } from '../../../../hooks';
import { AdditionalInfoSkeleton } from '../../AdditionalInfoSkeleton/AdditionalInfoSkeleton';
import { FavoriteButtonSkeleton } from '../FavoriteButtonSkeleton/FavoriteButtonSkeleton';

export const CardHeadSkeleton: React.FC = () => {
  const { isDesktop } = useMedia();
  return (
    <div className="flex w-full flex-wrap items-start justify-between gap-2">
      <div className="flex flex-col gap-2">
        <span className="flex flex-col text-skin-secondary">nanny</span>
        <div className="flex flex-wrap gap-1">
          <div className="h-5 w-16 rounded-lg bg-skin-grey opacity-40"></div>
          <div className="h-5 w-36 rounded-lg bg-skin-grey opacity-40"></div>
        </div>
      </div>
      <div className="flex items-center gap-12">
        <AdditionalInfoSkeleton />
        {isDesktop && <FavoriteButtonSkeleton />}
      </div>
    </div>
  );
};
