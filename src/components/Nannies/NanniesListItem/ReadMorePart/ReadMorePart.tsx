import { Button } from '../../../Parts/Button/Button';
import { ReviewsList } from '../ReviewsList/RevievsList';
import { ReadMorePartProps } from './ReadMorePart.types';

export const ReadMorePart: React.FC<ReadMorePartProps> = ({
  nanny,
  toggleIsAppointmentOpen,
}) => {
  return (
    <div>
      <ReviewsList reviews={nanny.reviews} />
      <Button
        className="mt-12 max-w-[215px] text-skin-inverted"
        type="button"
        text="Make an appointment"
        onClick={toggleIsAppointmentOpen}
      />
    </div>
  );
};
