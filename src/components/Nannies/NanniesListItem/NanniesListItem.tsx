import { NanniesListItemProps } from './NanniesListItem.types';

export const NanniesListItem: React.FC<NanniesListItemProps> = ({ nanny }) => {
  return <li>{nanny.name}</li>;
};
