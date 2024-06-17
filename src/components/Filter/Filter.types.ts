import { FilterType } from '@/redux/filters/filters.types';

export interface FilterProps {
  filter: FilterType;
  isFavorite: boolean;
}
