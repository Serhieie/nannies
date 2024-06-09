// components/Menu/Menu.tsx
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMedia } from '../../../hooks/useMedia';
import { Overlay } from '../../Parts/Overlay/Overlay';
import { UserInfo } from '../UserInfo/UserInfo';
import { AuthButtons } from '../AuthButtons/AuthButtons';
import { MenuButton } from './MenuButton/MenuButton';
import { NavContainer } from './NavContainer/NavContainer';

export const Menu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const { isTablet, isMobile, isDesktop } = useMedia();
  const location = useLocation();
  const isLogoutShow =
    location.pathname === '/nannies' || location.pathname === '/favorites';

  const toggleNav = () => {
    setIsNavOpen((state) => !state);
  };

  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <div className="relative flex items-center">
      <div
        className={` ${!isLogoutShow ? 'flex-row-reverse' : ''} flex items-center`}
      >
        {!isDesktop && <UserInfo />}
        {(isTablet || isMobile) && <MenuButton toggleNav={toggleNav} />}
        {!isDesktop && <AuthButtons />}
      </div>

      <Overlay isNavOpen={isNavOpen} onClose={toggleNav} />

      <NavContainer
        isNavOpen={isNavOpen}
        handleLogout={handleLogout}
        toggleNav={toggleNav}
      />
    </div>
  );
};

export default Menu;
