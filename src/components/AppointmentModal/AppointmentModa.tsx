import { useMedia } from '../../hooks/useMedia';
import { AppointmentModalProps } from './AppointmentModalPtops.types';
import { FormPart } from './FormPart/FormPart';
import { NannyName } from './NannyName/NannyName';

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  nanny,
}) => {
  const { isMobile } = useMedia();
  return (
    <div>
      {!isMobile && <NannyName nanny={nanny} />}
      <FormPart />
    </div>
  );
};
