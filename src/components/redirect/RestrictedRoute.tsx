import { Navigate } from 'react-router-dom';
import { RedirectProps } from './Redirect.type';
import { useUserState } from '@/hooks';

const RestrictedRoute: React.FC<RedirectProps> = ({
  children,
  redirectTo = '/',
}) => {
  const { token, isLoggedIn } = useUserState();
  const shouldRedirect = isLoggedIn && token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{children}</>;
};

export default RestrictedRoute;
