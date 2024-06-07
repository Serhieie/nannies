import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { PopUpThemes } from './PopUpThemes/PopUpThemes';
import { useUserState } from '../../../hooks/useUserState';

export const ThemeSelector = () => {
  const [isThemePopUpOpen, setIsThemePopUpOpen] = useState(false);
  const { theme } = useUserState();
  const titleTheme =
    theme === 'red' ? 'Red' : theme === 'blue' ? 'Blue' : 'Green';

  const toggleOpenTheme = async () => {
    setIsThemePopUpOpen((state) => !state);
  };

  return (
    <div onClick={toggleOpenTheme} className="relative mr-14 cursor-pointer">
      <span className="border-skin-inverted hover:bg-skin-background-white hover:text-skin-theme flex w-36 transform select-none items-center justify-between gap-4 rounded-3xl border bg-transparent px-3 py-1 text-sm font-medium text-skin-inverted transition-all duration-300">
        {titleTheme}{' '}
        <RiArrowDownSLine
          size={18}
          className="transition-stroke transition-transform"
        />
      </span>
      <PopUpThemes isThemePopUpOpen={isThemePopUpOpen} />
    </div>
  );
};
