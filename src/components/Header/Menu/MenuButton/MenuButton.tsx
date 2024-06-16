import { GiHamburgerMenu } from 'react-icons/gi';
import { useMedia } from '@/hooks';
import clsx from 'clsx';
import { MenuButtonProps } from './MenuButton.types';
import { useLocation } from 'react-router-dom';

export const MenuButton: React.FC<MenuButtonProps> = ({ toggleNav }) => {
  const { isTablet, isDesktop } = useMedia();
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <button
      className={clsx(
        'ml-12 transition-colors duration-300',
        'hover:text-opacity-70 md:px-2 md:py-2',
        {
          'hover:text-skin-theme': isHome,
          'hover:text-skin-inverted': !isHome,
        }
      )}
      onClick={toggleNav}
      type="button"
    >
      <GiHamburgerMenu
        className="pointer-events-none"
        size={isDesktop || isTablet ? 40 : 32}
      />
    </button>
  );
};
