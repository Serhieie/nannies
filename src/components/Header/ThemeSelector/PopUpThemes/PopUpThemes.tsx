import { nanoid } from '@reduxjs/toolkit';
import clsx from 'clsx';
import { PopUpThemesProps } from './PopUpThemes.types';
import { useEffect, useRef } from 'react';
import { changeUserTheme } from 'users/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { useUserState } from '@/hooks';

const themes = ['Red', 'Blue', 'Green'];

export const PopUpThemes: React.FC<PopUpThemesProps> = ({
  isThemePopUpOpen,
  toggleOpenTheme,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const themeRef = useRef<HTMLDivElement>(null);
  const { theme } = useUserState();

  const handleChangeTheme = (theme: string) => {
    const themeToSet = theme.toLowerCase();
    dispatch(changeUserTheme(themeToSet));
  };

  //change theme
  useEffect(() => {
    if (theme) {
      document.body.classList.remove('theme-blue', 'theme-green');
      document.body.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  //close by click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeRef.current &&
        !themeRef.current.contains(event.target as Node)
      ) {
        toggleOpenTheme();
      }
    };
    if (isThemePopUpOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isThemePopUpOpen, toggleOpenTheme]);

  return (
    <div
      ref={themeRef}
      className={clsx(
        'absolute right-0 top-20 z-40 flex h-32 w-28 flex-col justify-center p-4',
        'gap-1.5 rounded-md border border-skin-primary bg-skin-background-white',
        'text-sm text-skin-base shadow-lg transition-all duration-300 xl:left-1 xl:top-14',
        {
          'invisible scale-75 opacity-0': !isThemePopUpOpen,
          'visible z-40 scale-100 opacity-100': isThemePopUpOpen,
        }
      )}
    >
      {themes.map((theme) => (
        <span
          key={nanoid()}
          className={clsx(
            'cursor-pointer py-1 transition-colors duration-300',
            'ease-in-out hover:text-skin-theme'
          )}
          onClick={() => handleChangeTheme(theme)}
        >
          {theme}
        </span>
      ))}
    </div>
  );
};
