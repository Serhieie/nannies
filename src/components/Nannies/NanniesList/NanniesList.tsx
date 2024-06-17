import { nanoid } from '@reduxjs/toolkit';
import { NanniesListItem } from '../NanniesListItem/NanniesListItem';
import { NanniesListProps } from './NanniesList.types';

export const NanniesList: React.FC<NanniesListProps> = ({ nannies }) => {
  return (
    <ul className="mt-10 flex min-h-[600px] w-full flex-col gap-8">
      {nannies?.map((nanny) => (
        <NanniesListItem key={nanoid()} nanny={nanny} />
      ))}
    </ul>
  );
};
