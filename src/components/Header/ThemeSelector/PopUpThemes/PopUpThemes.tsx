import { nanoid } from '@reduxjs/toolkit';
import clsx from 'clsx';
import { PopUpThemesProps } from './PopUpThemes.types';

const themes = ['Red', 'Blue', 'Green'];

export const PopUpThemes: React.FC<PopUpThemesProps> = ({
  isThemePopUpOpen,
}) => {
  const handleChangeTheme = async (theme: string) => {
    console.log(`${theme} theme changed!`);
  };

  return (
    <div
      className={clsx(
        'border-skin-primary absolute left-4 top-10 z-50 flex h-32 w-28 flex-col justify-center gap-1.5 rounded-md border p-4 text-sm shadow-lg',
        {
          'invisible opacity-0': !isThemePopUpOpen,
          'visible opacity-100': isThemePopUpOpen,
        }
      )}
    >
      {themes.map((theme) => (
        <span
          key={nanoid()}
          className="hover:text-skin-theme cursor-pointer py-1 transition-colors duration-300 ease-in-out"
          onClick={() => handleChangeTheme(theme)}
        >
          {theme}
        </span>
      ))}
    </div>
  );
};
