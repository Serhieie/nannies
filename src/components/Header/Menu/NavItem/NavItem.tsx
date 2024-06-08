import { NavLink } from 'react-router-dom';
import { NavItemProps } from './NavItem.types';
import { useMedia } from '../../../../hooks/useMedia';

export const NavItem: React.FC<NavItemProps> = ({ text, to }) => {
  const { isMobile, isTablet } = useMedia();
  return (
    <li className="relative">
      <NavLink
        className={({ isActive }) =>
          `${
            isMobile || isTablet
              ? 'flex rounded-full border-r border-skin-primary px-12 py-4 text-xl hover:border-skin-inverted active:outline-double'
              : 'py-8 text-base'
          } px-2 font-normal leading-[125%] transition-all duration-300 focus:outline-white ${
            isActive
              ? `${isMobile || isTablet ? `custom-after-right` : `xl:custom-after-bottom`} `
              : ''
          }`
        }
        to={to}
      >
        {text}
      </NavLink>
    </li>
  );
};
