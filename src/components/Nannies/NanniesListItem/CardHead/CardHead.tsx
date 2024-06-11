import { getNannyAdditionalInfo } from '../../../../helpers/getNannyInfo';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';

export const CardHead = ({ nanny }) => {
  const additionalInfo = getNannyAdditionalInfo(nanny);
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-2">
        <span className="flex flex-col text-skin-secondary">nanny</span>
        <h2>{nanny.name}</h2>
      </div>
      <div className="flex items-center gap-12">
        <AdditionalInfo labels={additionalInfo} />
        <FavoriteButton nanny={nanny} />
      </div>
    </div>
  );
};
