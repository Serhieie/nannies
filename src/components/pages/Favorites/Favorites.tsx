import { useNanniesState } from '@/hooks';
import { Nannies } from '../../Nannies/Nannies';
import { NoFavorites } from '../../NoFavorites/NoFavorites';
import { NoFilteredNannies } from '../NanniesPage/NoFilteredNannies';

const Favorites: React.FC = () => {
  const { filteredFavorites, favorites } = useNanniesState();
  const favoritesLength = favorites.length > 0;
  const filteredFavoritesLength = filteredFavorites.length > 0;
  return (
    <>
      {favoritesLength ? (
        <>
          {filteredFavoritesLength ? (
            <Nannies isFavorite={true} nannies={filteredFavorites} />
          ) : (
            <NoFilteredNannies isFavorite={true} title="favorite nannies" />
          )}
        </>
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

export default Favorites;
