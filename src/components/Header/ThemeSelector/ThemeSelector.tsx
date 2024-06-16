import { useRef, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { PopUpThemes } from './PopUpThemes/PopUpThemes';
import { useMedia } from '@/hooks';
import clsx from 'clsx';

export const ThemeSelector: React.FC = () => {
  const [isThemePopUpOpen, setIsThemePopUpOpen] = useState(false);
  const { isMobile, isTablet } = useMedia();
  const themeSelectorRef = useRef<HTMLDivElement>(null);

  const toggleOpenTheme = async () => {
    setIsThemePopUpOpen((state) => !state);
  };

  return (
    <div
      ref={themeSelectorRef}
      onClick={toggleOpenTheme}
      className={`z-1 relative w-full cursor-pointer xl:max-w-[128px] xl:px-0`}
    >
      <span
        className={clsx(
          'flex min-h-[48px] w-full transform select-none items-center justify-between',
          'gap-1 rounded-full border border-skin-inverted border-opacity-40',
          'bg-transparent px-16 py-3.5 text-lg font-medium text-skin-inverted',
          'transition-all duration-300 hover:bg-skin-background-white',
          'hover:text-skin-theme xl:mb-0 xl:px-6 xl:py-2.5 xl:text-base'
        )}
      >
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
      <PopUpThemes
        themeSelectorRef={themeSelectorRef}
        toggleOpenTheme={toggleOpenTheme}
        isThemePopUpOpen={isThemePopUpOpen}
      />
    </div>
  );
};
