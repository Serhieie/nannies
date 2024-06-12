import { useState } from 'react';
import { FilterProps } from './Filter.types';
import { RiArrowDownSLine } from 'react-icons/ri';
import { PopUpFilters } from './PopUpFilters/PopUpFilters';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/nannies/nanniesSelectors';

export const Filter: React.FC<FilterProps> = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const filter = useSelector(selectFilter);
  const toggleOpenFilters = () => {
    setIsFiltersOpen((state) => !state);
  };
  return (
    <div className="relative w-56 select-none">
      <span
        onClick={toggleOpenFilters}
        className="flex h-12 w-56 cursor-pointer items-center justify-between rounded-[14px] bg-skin-background px-[18px] py-[12px] font-normal text-skin-inverted"
      >
        {filter}
        <RiArrowDownSLine
          className={`${isFiltersOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}
          size={24}
        />
      </span>
      <PopUpFilters isFiltersOpen={isFiltersOpen} />
    </div>
  );
};
