import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import clsx from 'clsx';
import { useMedia } from '../../../hooks/useMedia';
import { NavList } from './NavList/NavList';
import { Overlay } from '../../Parts/Overlay/Overlay';
import { Button } from '../../Parts/Button/Button';
import { ThemeSelector } from '../ThemeSelector/ThemeSelector';

export const Navigation: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const { isTablet, isMobile, isDesktop } = useMedia();

  const toggleNav = () => {
    setIsNavOpen((state) => !state);
  };
  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <div className="relative flex items-center md:px-10">
      {(isTablet || isMobile) && (
        <button className="md:px-2 md:py-2" onClick={toggleNav} type="button">
          <GiHamburgerMenu
            className="pointer-events-none"
            size={isDesktop || isTablet ? 40 : 32}
          />
        </button>
      )}

      {<Overlay isNavOpen={isNavOpen} onClose={toggleNav} />}
      <div
        className={clsx(
          'z-50 flex flex-col items-center justify-center gap-10 transition-all duration-500',
          'fixed xl:static',
          {
            'bottom-0 right-0 top-0 bg-skin-background px-12 text-skin-inverted md:w-96':
              isNavOpen && (isTablet || isMobile),
            '-right-96 bottom-0 top-0 w-72':
              !isNavOpen && (isTablet || isMobile),
          }
        )}
      >
        <div className="flex w-full flex-col items-center gap-10">
          {!isDesktop && <ThemeSelector />}
          <NavList isNavOpen={isNavOpen} onClose={toggleNav} />
          {!isDesktop && (
            <Button
              text={'Log out'}
              type="button"
              onClick={handleLogout}
              primary={false}
              className="mt-24 w-[200px] px-6 py-4 text-lg xl:w-28"
            />
          )}
        </div>
      </div>
    </div>
  );
};
