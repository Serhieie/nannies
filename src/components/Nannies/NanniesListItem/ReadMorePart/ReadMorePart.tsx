import clsx from 'clsx';
import { Button } from '../../../Parts/Button/Button';
import { ReviewsList } from '../ReviewsList/RevievsList';
import { ReadMorePartProps } from './ReadMorePart.types';

export const ReadMorePart: React.FC<ReadMorePartProps> = ({
  nanny,
  openIsAppointmentOpen,
}) => {
  return (
    <div>
      <ReviewsList reviews={nanny.reviews} />
      <Button
        className={clsx(
          'mt-12 max-w-[215px] border border-transparent text-skin-inverted',
          'hover:border-skin-primary hover:border-opacity-40'
        )}
        type="button"
        text="Make an appointment"
        onClick={openIsAppointmentOpen}
      />
    </div>
  );
};
