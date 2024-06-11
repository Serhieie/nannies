import { useDispatch } from 'react-redux';
import sprite from '../../../../assets/sprite.svg';
import { useNanniesState } from '../../../../hooks/useNannieState';
import { FavoriteButtonProps } from './Favorite.types';
import {
  addFavorite,
  removeFavorite,
} from '../../../../redux/nannies/nanniesSlice';
import { AppDispatch } from '../../../../redux/store';

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ nanny }) => {
  const { favorites } = useNanniesState();
  const isFavorite = favorites.some((favorite) => nanny.id === favorite.id);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddFavorite = (id: string) => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else dispatch(addFavorite(id));
  };

  return (
    <button onClick={() => handleAddFavorite(nanny.id)} type="button">
      <svg
        className={`${isFavorite ? 'fill-skin-primary stroke-skin-primary' : 'fill-transparent stroke-skin-base-text'}`}
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
      >
        <use xlinkHref={`${sprite}#icon-hearth`} />
      </svg>
    </button>
  );
};
