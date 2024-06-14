import { useState } from 'react';
import { useMedia } from '../../../hooks/useMedia';
import { Overlay } from '../../Parts/Overlay/Overlay';
import { UserInfo } from '../UserInfo/UserInfo';
import { AuthButtons } from '../AuthButtons/AuthButtons';
import { MenuButton } from './MenuButton/MenuButton';
import { NavContainer } from './NavContainer/NavContainer';
import { LogoutButton } from './LogoutButton/LogoutButton';
import { logoutUser } from '../../../redux/user/userOperations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useUserState } from '../../../hooks/useUserState';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

export const Menu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const { isLoggedIn } = useUserState();
  const dispatch = useDispatch<AppDispatch>();
  const { isTablet, isMobile, isDesktop } = useMedia();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleNav = () => {
    setIsNavOpen((state) => !state);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div
      className={clsx(`relative flex w-full items-center xs:justify-center`, {
        'md:justify-end': isHome,
        'sm:justify-end': !isHome,
      })}
    >
      <div className={`flex items-center`}>
        {!isDesktop && isLoggedIn && <UserInfo />}
        {!isLoggedIn && !isDesktop && <AuthButtons />}
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
