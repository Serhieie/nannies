import { nanoid } from '@reduxjs/toolkit';
import { NanniesListItem } from '../NanniesListItem/NanniesListItem';
import { NanniesListProps } from './NanniesList.types';

export const NanniesList: React.FC<NanniesListProps> = ({ nannies }) => {
  return (
    <ul className="mt-10 flex flex-col gap-8">
      {nannies?.map((nanny) => (
        <NanniesListItem key={nanoid()} nanny={nanny} />
      ))}
    </ul>
  );
};
