import { useState } from 'react';
import { getNannyInfo } from '../../../helpers/getNannyInfo';
import { Frame } from '../../Parts/Frame/Frame';
import { LabelList } from './LabelList/LabelList';
import { NanniesListItemProps } from './NanniesListItem.types';
import { CardHead } from './CardHead/CardHead';
import { CardBottomPart } from './CardBottomPart/CardBottomPart';
import { ReadMorePart } from './ReadMorePart/ReadMorePart';
import { Modal } from '../../Modal/Modal';

export const NanniesListItem: React.FC<NanniesListItemProps> = ({ nanny }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const labels = getNannyInfo(nanny);

  const openReadMore = () => {
    setIsReadMoreOpen(true);
  };

  const toggleIsAppointmentOpen = () => {
    setIsAppointmentOpen((state) => !state);
  };

  return (
    <>
      <li className="bg-skin-background-fullWhite flex gap-6 rounded-[30px] p-6">
        <div className="flex h-[120px] w-[120px] flex-shrink-0 items-center justify-center rounded-[30px] border-2 border-skin-primary border-opacity-20 p-3">
          <Frame
            width="96px"
            imageSrc={nanny.avatar_url}
            avaClass="rounded-[15px] "
          />
        </div>

        <div className="flex flex-col gap-6">
          <CardHead nanny={nanny} />
          <LabelList labels={labels} />
          <CardBottomPart
            isReadMoreOpen={isReadMoreOpen}
            handleClick={openReadMore}
            about={nanny.about}
          />
          {isReadMoreOpen && (
            <ReadMorePart
              toggleIsAppointmentOpen={toggleIsAppointmentOpen}
              nanny={nanny}
            />
          )}
        </div>
      </li>
      <Modal
        title={'Make an appointment with a babysitter'}
        text="Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."
        isOpen={isAppointmentOpen}
        onClose={toggleIsAppointmentOpen}
      />
    </>
  );
};
