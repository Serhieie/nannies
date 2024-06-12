import { Nanny } from '../../../../redux/nannies/nannies.types';

export interface ReadMorePartProps {
  nanny: Nanny;
  openIsAppointmentOpen: () => void;
}
