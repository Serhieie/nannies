import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { Nanny } from '../redux/nannies/nannies.types';
import {
  selectFilteredFavorites,
  selectFilteredNannies,
} from '../redux/nannies/nanniesSelectors';

interface UseNanniesReturn {
  nannies: Nanny[];
  favorites: Nanny[];
  filteredFavorites: Nanny[];
  filteredNannies: Nanny[];
  activeNannie: Nanny;
  isLoading: boolean;
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const useNanniesState = (): UseNanniesReturn => {
  const { nannies, isLoading, error, status, activeNannie, favorites } =
    useSelector((state: RootState) => state.nannies);
  const filteredFavorites: Nanny[] = useSelector(selectFilteredFavorites);
  const filteredNannies: Nanny[] = useSelector(selectFilteredNannies);

  return {
    nannies,
    isLoading,
    error,
    status,
    activeNannie,
    favorites,
    filteredFavorites,
    filteredNannies,
  };
};
