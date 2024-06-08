import { IoCloseSharp } from 'react-icons/io5';
import { NavItem } from '../NavItem/NavItem';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { NavListProps } from './NavList.types';
import { useMedia } from '../../../../hooks/useMedia';

const links = [
  { text: 'Home', to: '/' },
  { text: 'Nannies', to: '/nannies' },
  { text: 'Favorites', to: '/favorites' },
];

export const NavList: React.FC<NavListProps> = ({ onClose }) => {
  const { isDesktop } = useMedia();
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
      <ul className={clsx('flex gap-10', 'xl:flex-row', 'w-full flex-col')}>
        {links.map((link) => (
          <NavItem key={nanoid()} text={link.text} to={link.to} />
        ))}
      </ul>
    </>
  );
};
