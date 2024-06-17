import { useSelector } from 'react-redux';
import { FilterType } from '@/redux/filters/filters.types';
import {
  selectFavoriteFilter,
  selectFilter,
  selectSearchedName,
} from '@/redux/filters/filtersSelectors';

export interface useModalsReturn {
  filter: FilterType;
  favoriteFilter: FilterType;
  searchedName: string;
}

export const useFiltersState = (): useModalsReturn => {
  const filter: FilterType = useSelector(selectFilter);
  const favoriteFilter: FilterType = useSelector(selectFavoriteFilter);
  const searchedName: string = useSelector(selectSearchedName);

  return {
    filter,
    favoriteFilter,
    searchedName,
  };
};
