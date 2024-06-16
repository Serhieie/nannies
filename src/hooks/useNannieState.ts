import { useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducer';
import { Nanny } from 'nannies/nannies.types';
import {
  selectFilteredFavorites,
  selectFilteredNannies,
} from 'nannies/nanniesSelectors';

interface UseNanniesReturn {
  nannies: Nanny[];
  favorites: Nanny[];
  filteredFavorites: Nanny[];
  filteredNannies: Nanny[];
  activeNannie: Nanny | null;
  isLoading: boolean;
  error: string | null;
  page: number;
  total: number;
}

export const useNanniesState = (): UseNanniesReturn => {
  const { nannies, isLoading, error, activeNannie, favorites, page, total } =
    useSelector((state: RootState) => state.nannies);
  const filteredFavorites: Nanny[] = useSelector(selectFilteredFavorites);
  const filteredNannies: Nanny[] = useSelector(selectFilteredNannies);

  return {
    nannies,
    isLoading,
    error,
    activeNannie,
    favorites,
    filteredFavorites,
    filteredNannies,
    page,
    total,
  };
};
