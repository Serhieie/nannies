import { GiHamburgerMenu } from 'react-icons/gi';
import { useMedia } from '../../../../hooks/useMedia';
import clsx from 'clsx';

interface MenuButtonProps {
  toggleNav: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ toggleNav }) => {
  const { isTablet, isDesktop } = useMedia();
  return (
    <button
      className={clsx(
        'ml-12 transition-colors duration-300 hover:text-skin-theme',
        'hover:text-opacity-70 md:px-2 md:py-2'
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
