import { useDispatch } from 'react-redux';
import sprite from '../../../../assets/sprite.svg';
import { useNanniesState } from '../../../../hooks/useNannieState';
import { FavoriteButtonProps } from './Favorite.types';
import {
  addFavorite,
  removeFavorite,
} from '../../../../redux/nannies/nanniesSlice';
import { AppDispatch } from '../../../../redux/store';
import { useUserState } from '../../../../hooks/useUserState';
import { setIsLoginPopUpOpen } from '../../../../redux/modals/modalsSlice';

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ nanny }) => {
  const { favorites } = useNanniesState();
  const { isLoggedIn } = useUserState();
  const isFavorite = favorites.some((favorite) => nanny.id === favorite.id);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddFavorite = (id: string) => {
    if (isFavorite) {
      if (!isLoggedIn) dispatch(setIsLoginPopUpOpen(true));
      else dispatch(removeFavorite(id));
    } else if (isLoggedIn) dispatch(addFavorite(id));
    else dispatch(setIsLoginPopUpOpen(true));
  };

  return (
    <button
      className="self-start xs:absolute xs:right-5 xs:top-5 sm:relative sm:right-0 sm:top-0"
      onClick={() => handleAddFavorite(nanny.id)}
      type="button"
    >
      <svg
        className={`${isFavorite && isLoggedIn ? 'fill-skin-primary stroke-skin-primary' : 'fill-transparent stroke-skin-base-text'} transition-colors duration-300`}
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
      >
        <use xlinkHref={`${sprite}#icon-hearth`} />
      </svg>
    </button>
  );
};
