import { useLocation } from 'react-router-dom';
import { Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header
      className={`${
        isHome
          ? 'absolute left-0 right-0 top-0 z-50 border-b border-skin-inverted border-opacity-40 bg-transparent px-10 xl:pl-24 xl:pr-4'
          : 'bg-skin-background px-10 xs:px-2 md:px-12 xl:px-24'
      } flex min-h-[88px] items-center bg-skin-background text-skin-inverted transition-colors duration-300 sm:py-0`}
    >
      <div
        className={`${isHome ? 'xs:backdrop-blur-sm' : ''} absolute left-0 right-0 top-0 h-full w-full md:backdrop-blur-none`}
      ></div>
      <div
        className={`${isHome ? 'md:flex-row' : 'sm:flex-row'} md2:py-0 flex h-full w-full items-center justify-between xs:flex-col xs:py-2 xl:gap-24`}
      >
        <Logo />
        {isHome && (
          <hr className="z-50 mb-4 h-[1px] w-full border-skin-primary bg-skin-background text-skin-theme xs:block md:hidden" />
        )}
        <Menu />
      </div>
    </header>
  );
};
