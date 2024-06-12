import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStateModals } from './modalsInitialState';
import { ModalsState } from './modals.types';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: initialStateModals,
  reducers: {
    setIsLoginPopUpOpen(state: ModalsState, action: PayloadAction<boolean>) {
      state.isLoginPopUpOpen = action.payload;
    },
    setIsLoginModalOpen(state: ModalsState, action: PayloadAction<boolean>) {
      state.isLoginModalOpen = action.payload;
    },
    setIsRegistrationModalOpen(
      state: ModalsState,
      action: PayloadAction<boolean>
    ) {
      state.isRegistrationModalOpen = action.payload;
    },
    setIsAppointmentOpen(state: ModalsState, action: PayloadAction<boolean>) {
      state.isAppointmentOpen = action.payload;
    },
  },
});

export const {
  setIsLoginPopUpOpen,
  setIsLoginModalOpen,
  setIsRegistrationModalOpen,
  setIsAppointmentOpen,
} = modalsSlice.actions;

export default modalsSlice.reducer;
