import { Button } from 'components/Parts/Button/Button';
import { LogoutButtonProps } from './LogoButton.types';

export const LogoutButton: React.FC<LogoutButtonProps> = ({
  handleLogout,
  className,
}) => {
  return (
    <Button
      text={'Log out'}
      type="button"
      onClick={handleLogout}
      primary={false}
      className={`${className} max-h-[48px] w-[200px] px-6 xs:text-lg xl:mt-0 xl:text-[16px]`}
    />
  );
};
