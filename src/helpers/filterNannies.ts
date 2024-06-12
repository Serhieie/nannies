import { FilterType } from '../redux/filters/filters.types';
import { Nanny } from '../redux/nannies/nannies.types';

export const filterNannies = (
  nannies: Nanny[],
  filter: FilterType
): Nanny[] => {
  switch (filter) {
    case 'A to Z':
      return [...nannies].sort((a, b) => a.name.localeCompare(b.name));
    case 'Z to A':
      return [...nannies].sort((a, b) => b.name.localeCompare(a.name));
    case 'Less than 10$':
      return nannies
        .filter((nanny) => nanny.price_per_hour < 10)
        .sort((a, b) => a.price_per_hour - b.price_per_hour);
    case 'Greater than 10$':
      return nannies
        .filter((nanny) => nanny.price_per_hour > 10)
        .sort((a, b) => b.price_per_hour - a.price_per_hour);
    case 'Popular':
      return nannies
        .filter((nanny) => nanny.rating)
        .sort((a, b) => b.rating - a.rating);
    case 'Not popular':
      return nannies
        .filter((nanny) => nanny.rating)
        .sort((a, b) => a.rating - b.rating);
    case 'Show all':
    default:
      return nannies;
  }
};
