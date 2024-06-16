import { useRef, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { PopUpFilters } from './PopUpFilters/PopUpFilters';
import { useSelector } from 'react-redux';
import { selectFilter } from 'nannies/nanniesSelectors';
import clsx from 'clsx';

export const Filter: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const filter = useSelector(selectFilter);
  const filterRef = useRef<HTMLDivElement>(null);
  const toggleOpenFilters = () => {
    setIsFiltersOpen((state) => !state);
  };
  return (
    <div ref={filterRef} className={clsx('relative w-56 select-none')}>
      <span
        onClick={toggleOpenFilters}
        className={clsx(
          'flex h-12 w-56 cursor-pointer items-center justify-between rounded-[14px]',
          'bg-skin-background px-[18px] py-[12px] font-normal text-skin-inverted',
          'transition-all duration-300 hover:bg-opacity-95'
        )}
      >
        {filter}
        <RiArrowDownSLine
          className={`${isFiltersOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}
          size={24}
        />
      </span>
      <PopUpFilters
        filterRef={filterRef}
        toggleOpenFilters={toggleOpenFilters}
        isFiltersOpen={isFiltersOpen}
      />
    </div>
  );
};
