import { nanoid } from '@reduxjs/toolkit';
import { NanniesListItemSkeleton } from '../NanniesListItemSkeleton/NanniesListItemSkeleton';

export const NanniesListSkeleton: React.FC = () => {
  const arr = [1, 2, 3];
  return (
    <ul className="mt-10 flex min-h-[600px] w-full flex-col gap-8">
      {arr?.map(() => <NanniesListItemSkeleton key={nanoid()} />)}
    </ul>
  );
};
