import { useNanniesState } from '../../../hooks/useNannieState';
import { Nannies } from '../../Nannies/Nannies';
import { NoFavorites } from '../../NoFavorites/NoFavorites';
import { NoFilteredFavorites } from '../../NoFavorites/NoFilteredFavorites';

const Favorites: React.FC = () => {
  const { filteredFavorites, favorites } = useNanniesState();
  const favoritesLength = favorites.length > 0;
  const filteredFavoritesLength = filteredFavorites.length > 0;
  return (
    <>
      {favoritesLength ? (
        <>
          {filteredFavoritesLength ? (
            <Nannies nannies={filteredFavorites} />
          ) : (
            <NoFilteredFavorites />
          )}
        </>
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

export default Favorites;
