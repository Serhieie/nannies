import { useState } from 'react';
import { getNannyInfo } from '../../../helpers/getNannyInfo';
import { Frame } from '../../Parts/Frame/Frame';
import { LabelList } from './LabelList/LabelList';
import { NanniesListItemProps } from './NanniesListItem.types';
import { CardHead } from './CardHead/CardHead';
import { CardBottomPart } from './CardBottomPart/CardBottomPart';
import { ReadMorePart } from './ReadMorePart/ReadMorePart';
import { setIsAppointmentOpen } from '../../../redux/modals/modalsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useMedia } from '../../../hooks/useMedia';
import { FavoriteButton } from './FavoriteButton/FavoriteButton';

export const NanniesListItem: React.FC<NanniesListItemProps> = ({ nanny }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const { isDesktop } = useMedia();
  const dispatch = useDispatch<AppDispatch>();
  const labels = getNannyInfo(nanny);

  const openReadMore = () => {
    setIsReadMoreOpen(true);
  };

  const openIsAppointmentOpen = () => {
    dispatch(setIsAppointmentOpen(true));
  };

  return (
    <>
      <li className="relative flex flex-col gap-6 rounded-[30px] bg-skin-background-fullWhite p-6 xl:flex-row">
        <div className="flex gap-4 xs:flex-col sm:flex-row">
          <div className="flex h-[120px] w-[120px] flex-shrink-0 items-center justify-center rounded-[30px] border-2 border-skin-primary border-opacity-20 p-3">
            <Frame
              width="96px"
              imageSrc={nanny.avatar_url}
              avaClass="rounded-[15px] "
            />
          </div>
          {!isDesktop && <CardHead nanny={nanny} />}
          {!isDesktop && <FavoriteButton nanny={nanny} />}
        </div>

        <div className="flex flex-col gap-6">
          {isDesktop && <CardHead nanny={nanny} />}
          <LabelList labels={labels} />
          <CardBottomPart
            isReadMoreOpen={isReadMoreOpen}
            handleClick={openReadMore}
            about={nanny.about}
          />
          {isReadMoreOpen && (
            <ReadMorePart
              openIsAppointmentOpen={openIsAppointmentOpen}
              nanny={nanny}
            />
          )}
        </div>
      </li>
    </>
  );
};
