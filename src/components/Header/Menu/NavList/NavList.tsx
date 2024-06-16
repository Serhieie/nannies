import { IoCloseSharp } from 'react-icons/io5';
import { NavItem } from '../NavItem/NavItem';
import clsx from 'clsx';
import { NavListProps } from './NavList.types';
import { useMedia, useUserState } from '@/hooks';

const links = [
  { text: 'Home', to: '/' },
  { text: 'Nannies', to: '/nannies' },
  { text: 'Favorites', to: '/favorites' },
];

export const NavList: React.FC<NavListProps> = ({ onClose }) => {
  const { isDesktop } = useMedia();
  const { token, isLoggedIn } = useUserState();
  const isFavoritesAvailable = token && isLoggedIn;

  return (
    <>
      {!isDesktop && (
        <button
          className="absolute left-4 top-4 px-2 py-2 transition-all duration-300 hover:scale-110"
          onClick={onClose}
          type="button"
        >
          <IoCloseSharp className="pointer-events-none" size={32} />
        </button>
      )}
      <ul
        className={clsx(
          'flex items-center justify-center gap-10 xs:w-[194px]',
          'flex-col xl:flex-row'
        )}
      >
        {links.map((link) =>
          link.text === 'Favorites' ? (
            isFavoritesAvailable && (
              <NavItem key={link.to} text={link.text} to={link.to} />
            )
          ) : (
            <NavItem key={link.to} text={link.text} to={link.to} />
          )
        )}
      </ul>
    </>
  );
};
