import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { PopUpThemes } from './PopUpThemes/PopUpThemes';
// import { useUserState } from '../../../hooks/useUserState';
import { useMedia } from '../../../hooks/useMedia';
import { useLocation } from 'react-router-dom';

export const ThemeSelector = () => {
  const [isThemePopUpOpen, setIsThemePopUpOpen] = useState(false);
  const { isMobile, isTablet } = useMedia();
  const location = useLocation();
  const isHome = location.pathname === '/';
  // const { theme } = useUserState();
  // const titleTheme =
  //   theme === 'red' ? 'Red' : theme === 'blue' ? 'Blue' : 'Green';

  const toggleOpenTheme = async () => {
    setIsThemePopUpOpen((state) => !state);
  };

  return (
    <div
      onClick={toggleOpenTheme}
      className={`${isHome ? 'xs:mb-16 xl:mb-0' : 'mb-0'} z-1 relative w-full cursor-pointer`}
    >
      <span className="flex w-full transform select-none items-center justify-between gap-1 rounded-full border border-skin-inverted border-opacity-40 bg-transparent px-12 py-3.5 text-lg font-medium text-skin-inverted transition-all duration-300 hover:bg-skin-background-white hover:text-skin-theme xl:mb-0 xl:px-6 xl:py-2.5 xl:text-base">
        Theme
        <RiArrowDownSLine
          size={18}
          className={`${
            isThemePopUpOpen
              ? isMobile || isTablet
                ? 'rotate-0'
                : 'rotate-0'
              : '-rotate-90'
          } transition-stroke transition-transform`}
        />
      </span>
      <PopUpThemes isThemePopUpOpen={isThemePopUpOpen} />
    </div>
  );
};
