import { Navigate } from 'react-router-dom';
import { RedirectProps } from './Redirect.type';
import { useUserState } from '../../hooks/useUserState';

const PrivateRoute: React.FC<RedirectProps> = ({
  children,
  redirectTo = '/',
}) => {
  const { token, isLoggedIn, isLoading } = useUserState();

  const shouldRedirect = !isLoading && !isLoggedIn && !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{children}</>;
};

export default PrivateRoute;
