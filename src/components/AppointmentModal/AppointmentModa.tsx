import { useMedia } from '@/hooks/useMedia';
import { AppointmentModalProps } from './AppointmentModalPtops.types';
import { AppointmentForm } from './AppointmentForm/AppointmentForm';
import { NannyName } from './NannyName/NannyName';

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  nanny,
}) => {
  const { isMobile } = useMedia();
  return (
    <div>
      {!isMobile && <NannyName nanny={nanny} />}
      <AppointmentForm />
    </div>
  );
};
