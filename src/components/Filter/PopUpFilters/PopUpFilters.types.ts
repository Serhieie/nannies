import { RefObject } from 'react';

export interface PopUpFiltersProps {
  isFiltersOpen: boolean;
  toggleOpenFilters: () => void;
  filterRef: RefObject<HTMLDivElement>;
}
