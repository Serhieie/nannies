import { useMedia } from '../../hooks/useMedia';
import { Button } from '../Parts/Button/Button';
import { Container } from '../Parts/Container/Container';
import { Logo } from './Logo/Logo';
import { Navigation } from './Menu/Menu';
import { ThemeSelector } from './ThemeSelector/ThemeSelector';
import { UserInfo } from './UserInfo/UserInfo';

export const Header: React.FC = () => {
  const { isDesktop } = useMedia();
  const handleLogout = () => {
    console.log('logout');
  };
  return (
    <header className="flex min-h-[88px] items-center bg-skin-background text-skin-inverted transition-colors duration-300 xs:px-2 sm:py-0">
      <Container className="flex h-full w-full items-center justify-between">
        <Logo />
        {isDesktop && <Navigation />}
        <div className="flex items-center gap-4">
          <UserInfo />
          {!isDesktop && <Navigation />}
          {isDesktop && <ThemeSelector />}
          {isDesktop && (
            <Button
              text={'Log out'}
              type="button"
              onClick={handleLogout}
              className="px-6 py-3"
            />
          )}
        </div>
      </Container>
    </header>
  );
};
