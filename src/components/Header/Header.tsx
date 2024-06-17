import { useLocation } from 'react-router-dom';
import { Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';
import clsx from 'clsx';
import { useUserState } from '@/hooks';

export const Header: React.FC = () => {
  const { isLoggedIn } = useUserState();
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header
      className={clsx(
        'flex min-h-[88px] items-center bg-skin-background text-skin-inverted',
        'px-10 transition-colors duration-300 sm:py-0',
        {
          'absolute left-0 right-0 bg-transparent xl:pl-24 xl:pr-4': isHome,
          'top-0 z-50 border-b border-skin-inverted border-opacity-40': isHome,
          'bg-skin-background xs:px-2 md:px-12 xl:px-24': !isHome,
        }
      )}
    >
      <div
        className={clsx(
          'absolute left-0 right-0 top-0 h-full w-full md:backdrop-blur-none',
          {
            'xs:backdrop-blur-sm': isHome,
            hidden: !isHome,
          }
        )}
      ></div>
      <div
        className={clsx(
          'flex h-full w-full items-center justify-between xs:py-2 md2:py-0 xl:gap-24',
          {
            'xs:flex-col md:flex-row': isLoggedIn || isHome,
            'flex-row': !isLoggedIn,
          }
        )}
      >
        <Logo />
        {isHome && (
          <hr
            className={clsx(
              'z-50 mb-4 h-[1px] w-full border-skin-primary md:hidden',
              'bg-skin-background text-skin-theme xs:block'
            )}
          />
        )}
        <Menu />
      </div>
    </header>
  );
};
