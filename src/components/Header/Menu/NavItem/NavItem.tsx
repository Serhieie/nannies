import { NavLink } from 'react-router-dom';
import { NavItemProps } from './NavItem.types';
import { useMedia } from '@/hooks';

export const NavItem: React.FC<NavItemProps> = ({ text, to }) => {
  const { isMobile, isTablet } = useMedia();
  return (
    <li className="relative flex w-full items-center">
      <NavLink
        className={({ isActive }) =>
          ` ${
            isMobile || isTablet
              ? 'flex w-full items-center rounded-full border-skin-primary px-12 py-4 text-xl hover:border-skin-inverted active:outline-double'
              : 'py-6 text-base'
          } px-2 font-normal leading-[125%] transition-all duration-300 hover:opacity-100 focus:outline-white ${
            isActive
              ? ` ${isMobile || isTablet ? `custom-after-right` : `flex items-center xl:custom-after-bottom`} opacity-100`
              : 'opacity-60 hover:scale-105'
          } `
        }
        to={to}
      >
        {text}
      </NavLink>
    </li>
  );
};
