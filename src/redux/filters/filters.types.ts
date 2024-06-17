export type FilterType =
  | 'A to Z'
  | 'Z to A'
  | 'Less than 10$'
  | 'Greater than 10$'
  | 'Popular'
  | 'Not popular'
  | 'Show all';

export interface FiltersState {
  filter: FilterType;
  favoriteFilter: FilterType;
  searchedName: string;
}
