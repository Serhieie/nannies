import clsx from 'clsx';
import { ThemeSelector } from '../../ThemeSelector/ThemeSelector';
import { NavList } from '../NavList/NavList';
import { AuthButtons } from '../../AuthButtons/AuthButtons';
import { Button } from '../../../Parts/Button/Button';
import { UserInfo } from '../../UserInfo/UserInfo';
import { useMedia } from '../../../../hooks/useMedia';
import { useLocation } from 'react-router-dom';
import { NavContainerProps } from './NavContainer.types';

export const NavContainer: React.FC<NavContainerProps> = ({
  isNavOpen,
  handleLogout,
  toggleNav,
}) => {
  const location = useLocation();
  const isLogoutShow =
    location.pathname === '/nannies' || location.pathname === '/favorites';
  const isHome = location.pathname === '/';
  const { isTablet, isMobile, isDesktop } = useMedia();
  return (
    <div
      className={clsx(
        'z-50 flex flex-col items-center justify-center gap-10 transition-all duration-500',
        'fixed xl:static',
        {
          'bottom-0 right-0 top-0 bg-skin-background px-12 text-skin-inverted md:w-96':
            isNavOpen && (isTablet || isMobile),
          '-right-96 bottom-0 top-0 w-72': !isNavOpen && (isTablet || isMobile),
        }
      )}
    >
      <div
        className={`${!isHome ? 'gap-10' : 'gap-2 xl:gap-1'} flex w-full flex-col items-center xl:flex-row`}
      >
        {!isDesktop && <ThemeSelector />}
        <NavList isNavOpen={isNavOpen} onClose={toggleNav} />
        {isDesktop && isHome && <AuthButtons />}
        {!isDesktop && isLogoutShow && (
          <Button
            text={'Log out'}
            type="button"
            onClick={handleLogout}
            primary={false}
            className="w-[200px] px-6 py-4 text-lg xl:mt-0"
          />
        )}
        {isDesktop && <UserInfo />}
        {isDesktop && <ThemeSelector />}
      </div>
    </div>
  );
};
