import { getNannyAdditionalInfo } from '../../../../helpers';
import { useMedia } from '../../../../hooks';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { CardHeadProps } from './CardHead.types';

export const CardHead: React.FC<CardHeadProps> = ({ nanny }) => {
  const additionalInfo = getNannyAdditionalInfo(nanny);
  const { isDesktop } = useMedia();
  return (
    <div className="flex w-full flex-wrap items-start justify-between gap-2">
      <div className="flex flex-col gap-2">
        <span className="flex flex-col text-skin-secondary">nanny</span>
        <h2>{nanny.name}</h2>
      </div>
      <div className="flex items-center gap-12">
        <AdditionalInfo labels={additionalInfo} />
        {isDesktop && <FavoriteButton nanny={nanny} />}
      </div>
    </div>
  );
};
