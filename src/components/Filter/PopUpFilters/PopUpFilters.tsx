import React, { useEffect, useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { PopUpFiltersProps } from './PopUpFilters.types';
import filters from '../filters.json';
import { setFavoriteFilter, setFilter } from 'filters/filtersSlice';
import { FilterType } from 'filters/filters.types';

export const PopUpFilters: React.FC<PopUpFiltersProps> = ({
  isFiltersOpen,
  toggleOpenFilters,
  filterRef,
  chosenFilter,
  isFavorite,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const popUpRef = useRef<HTMLDivElement>(null);

  //close by click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popUpRef.current &&
        !popUpRef.current.contains(event.target as Node) &&
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        toggleOpenFilters();
      }
    };

    if (isFiltersOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFiltersOpen, toggleOpenFilters, filterRef]);

  const handleChangeFilter = (filter: FilterType) => {
    if (isFavorite) {
      dispatch(setFavoriteFilter(filter));
    } else dispatch(setFilter(filter));
  };

  return (
    <div
      ref={popUpRef}
      className={clsx(
        'absolute left-0 top-[112%] z-40 flex h-[244px] w-[226px] flex-col',
        'justify-center gap-3 rounded-[14px] bg-skin-background-white px-4',
        'py-[14px] text-sm text-skin-base shadow-lg transition-all duration-300',
        'select-none',

        {
          'invisible scale-75 opacity-0': !isFiltersOpen,
          'visible z-40 scale-100 select-none opacity-100': isFiltersOpen,
        }
      )}
    >
      {filters.map((filter) => (
        <span
          key={nanoid()}
          className={clsx(
            'cursor-pointer text-lg font-normal leading-[111%]',
            'transition-colors duration-300 ease-in-out hover:text-skin-theme',
            'select-none',
            {
              'text-skin-base': chosenFilter === filter.title,
              'text-skin-secondary': chosenFilter !== filter.title,
            }
          )}
          onClick={() => handleChangeFilter(filter.title as FilterType)}
        >
          {filter.title}
        </span>
      ))}
    </div>
  );
};
