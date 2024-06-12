import { nanoid } from '@reduxjs/toolkit';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { PopUpFiltersProps } from './PopUpFilters.types';
import { selectFilter } from '../../../redux/nannies/nanniesSelectors';
import filters from '../filters.json';
import { setFilter } from '../../../redux/filters/filtersSlice';
import { FilterType } from '../../../redux/filters/filters.types';

export const PopUpFilters: React.FC<PopUpFiltersProps> = ({
  isFiltersOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const chosedFilter = useSelector(selectFilter);

  const handleChangeFilter = (filter: FilterType) => {
    dispatch(setFilter(filter));
  };

  return (
    <div
      className={clsx(
        'absolute left-0 top-[112%] z-40 flex h-[244px] w-[226px] flex-col justify-center gap-3 rounded-[14px] bg-skin-background-white px-4 py-[14px] text-sm text-skin-base shadow-lg transition-all duration-300',
        {
          'invisible scale-75 opacity-0': !isFiltersOpen,
          'visible z-40 scale-100 opacity-100': isFiltersOpen,
        }
      )}
    >
      {filters.map((filter) => (
        <span
          key={nanoid()}
          className={`${chosedFilter === filter.title ? 'text-skin-base' : 'text-skin-secondary'} cursor-pointer text-lg font-normal leading-[111%] transition-colors duration-300 ease-in-out hover:text-skin-theme`}
          onClick={() => handleChangeFilter(filter.title as FilterType)}
        >
          {filter.title}
        </span>
      ))}
    </div>
  );
};
