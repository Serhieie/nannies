import { RootState } from '../rootReducer';

export const getIsLoginPopUpOpen = (state: RootState): boolean =>
  state.modals.isLoginPopUpOpen;
export const getIsLoginModalOpen = (state: RootState): boolean =>
  state.modals.isLoginModalOpen;
export const getIsRegistrationModalOpen = (state: RootState): boolean =>
  state.modals.isRegistrationModalOpen;
export const getIsAppointmentOpen = (state: RootState): boolean =>
  state.modals.isAppointmentOpen;
