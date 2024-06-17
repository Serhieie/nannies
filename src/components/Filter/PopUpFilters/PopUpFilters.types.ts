import { FilterType } from '@/redux/filters/filters.types';
import { RefObject } from 'react';

export interface PopUpFiltersProps {
  isFiltersOpen: boolean;
  toggleOpenFilters: () => void;
  filterRef: RefObject<HTMLDivElement>;
  chosenFilter: FilterType;
  isFavorite: boolean;
}
