import clsx from 'clsx';
import { ThemeSelector } from '../../ThemeSelector/ThemeSelector';
import { NavList } from '../NavList/NavList';
import { AuthButtons } from '../../AuthButtons/AuthButtons';
import { UserInfo } from '../../UserInfo/UserInfo';
import { useMedia, useUserState } from '@/hooks';
import { useLocation } from 'react-router-dom';
import { NavContainerProps } from './NavContainer.types';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/redux/user/userOperations';
import { LogoutButton } from '../LogoutButton/LogoutButton';

export const NavContainer: React.FC<NavContainerProps> = ({
  isNavOpen,
  toggleNav,
}) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useUserState();
  const { isTablet, isMobile, isDesktop } = useMedia();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div
      className={clsx(
        'xl:space-between z-50 flex items-center gap-10 transition-all duration-500',
        'fixed xs:flex-col xs:justify-center xl:static xl:w-full xl:flex-row',
        {
          'bottom-0 right-0 top-0 bg-skin-background px-12 text-skin-inverted md:w-96':
            isNavOpen && (isTablet || isMobile),
          '-right-96 bottom-0 top-0 w-72': !isNavOpen && (isTablet || isMobile),
        }
      )}
    >
      {isDesktop && <NavList isNavOpen={isNavOpen} onClose={toggleNav} />}
      <div
        className={clsx(
          'flex w-full flex-col items-center justify-end xs:max-w-[240px] xs:gap-10',
          'xl:mr-4 xl:max-w-none xl:flex-row xl:gap-2'
        )}
      >
        {!isDesktop && <ThemeSelector />}
        {isDesktop && isHome && !isLoggedIn && <AuthButtons />}
        {!isDesktop && <NavList isNavOpen={isNavOpen} onClose={toggleNav} />}
        {!isDesktop && isLoggedIn && (
          <LogoutButton className="min-h-[58px]" handleLogout={handleLogout} />
        )}
        {isDesktop && <UserInfo />}
        {isDesktop && <ThemeSelector />}
      </div>
    </div>
  );
};
