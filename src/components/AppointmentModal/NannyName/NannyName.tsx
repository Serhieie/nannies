import { Frame } from '../../Parts/Frame/Frame';
import { NannyNameProps } from './NannyNameProps.types';

export const NannyName: React.FC<NannyNameProps> = ({ nanny }) => {
  return (
    <div className="mb-10 flex gap-[14px]">
      <div className="flex flex-shrink-0 items-center justify-center rounded-[30px]">
        <Frame
          width="44px"
          imageSrc={nanny.avatar_url}
          avaClass="rounded-[15px] "
        />
      </div>
      <div>
        <span className="text-xs text-skin-secondary">Your nanny</span>
        <h3 className="text-base">{nanny.name}</h3>
      </div>
    </div>
  );
};
