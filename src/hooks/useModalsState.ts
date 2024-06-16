import { useSelector } from 'react-redux';
import {
  getIsAppointmentOpen,
  getIsLoginModalOpen,
  getIsLoginPopUpOpen,
  getIsRegistrationModalOpen,
} from 'modalsState/modalsSelectors';

export interface useModalsReturn {
  isLoginPopUpOpen: boolean;
  isLoginModalOpen: boolean;
  isRegistrationModalOpen: boolean;
  isAppointmentOpen: boolean;
}

export const useModalsState = (): useModalsReturn => {
  const isLoginPopUpOpen: boolean = useSelector(getIsLoginPopUpOpen);
  const isLoginModalOpen: boolean = useSelector(getIsLoginModalOpen);
  const isRegistrationModalOpen: boolean = useSelector(
    getIsRegistrationModalOpen
  );
  const isAppointmentOpen: boolean = useSelector(getIsAppointmentOpen);

  return {
    isLoginPopUpOpen,
    isLoginModalOpen,
    isRegistrationModalOpen,
    isAppointmentOpen,
  };
};
