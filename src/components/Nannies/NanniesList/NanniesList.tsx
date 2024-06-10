import { nanoid } from '@reduxjs/toolkit';
import { NanniesListItem } from '../NanniesListItem/NanniesListItem';
import { NanniesListProps } from './NanniesList.types';

export const NanniesList: React.FC<NanniesListProps> = ({ nannies }) => {
  return (
    <ul>
      {nannies.map((nanny) => (
        <NanniesListItem key={nanoid()} nanny={nanny} />
      ))}
    </ul>
  );
};
