import { useState } from 'react';
import { useMedia, useUserState } from '@/hooks';
import { Overlay } from 'components/Parts/Overlay/Overlay';
import { UserInfo } from '../UserInfo/UserInfo';
import { AuthButtons } from '../AuthButtons/AuthButtons';
import { MenuButton } from './MenuButton/MenuButton';
import { NavContainer } from './NavContainer/NavContainer';
import { LogoutButton } from './LogoutButton/LogoutButton';
import { logoutUser } from 'users/userOperations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

export const Menu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const { isLoggedIn } = useUserState();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { isTablet, isMobile, isDesktop } = useMedia();

  const toggleNav = () => {
    setIsNavOpen((state) => !state);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div
      className={clsx(`relative flex w-full items-center`, {
        'xs:justify-center md:justify-end':
          isLoggedIn || (!isLoggedIn && isHome),
        'justify-end': !isLoggedIn && !isHome,
      })}
    >
      <div className={clsx(`flex items-center`, { 'items-end': !isLoggedIn })}>
        {!isDesktop && isLoggedIn && <UserInfo />}
        {!isLoggedIn && !isDesktop && isHome && <AuthButtons />}
        {(isTablet || isMobile) && <MenuButton toggleNav={toggleNav} />}
      </div>

      <Overlay isNavOpen={isNavOpen} onClose={toggleNav} />
      <NavContainer isNavOpen={isNavOpen} toggleNav={toggleNav} />
      {isDesktop && isLoggedIn && (
        <LogoutButton className="max-w-[134px]" handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default Menu;
