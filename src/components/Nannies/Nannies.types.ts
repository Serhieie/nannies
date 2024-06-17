import { Nanny } from 'nannies/nannies.types';

export interface NanniesProps {
  nannies: Nanny[];
  isFavorite?: boolean;
}
