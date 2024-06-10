import { useSelector } from 'react-redux';
import {
  getError,
  getIsLoadingUser,
  getToken,
  getLogedIn,
  getTheme,
  getAvatar,
  getUserState,
} from '../redux/user/userSelectors';
import { UserState } from '../redux/user/initialStateUser.types';

export interface useAuthReturn {
  userState: UserState;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: null | string;
  token: string | null;
  avatar: string;
  theme: string;
}

export const useUserState = (): useAuthReturn => {
  const isLoggedIn: boolean = useSelector(getLogedIn);
  const isLoading: boolean = useSelector(getIsLoadingUser);
  const error: null | string = useSelector(getError);
  const token: string | null = useSelector(getToken);
  const avatar: string = useSelector(getAvatar);
  const theme: string = useSelector(getTheme);
  const userState: UserState = useSelector(getUserState);

  return {
    theme,
    isLoggedIn,
    isLoading,
    token,
    error,
    avatar,
    userState,
  };
};
