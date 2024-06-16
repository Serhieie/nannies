import { RefObject } from 'react';

export interface PopUpThemesProps {
  isThemePopUpOpen: boolean;
  toggleOpenTheme: () => void;
  themeSelectorRef?: RefObject<HTMLDivElement>;
}
