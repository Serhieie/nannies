import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { Button } from '../Parts/Button/Button';
import { AppDispatch } from '../../redux/store';
import { selectFilter } from '../../redux/nannies/nanniesSelectors';
import clsx from 'clsx';

export const NoFilteredFavorites: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector(selectFilter);
  const resetFilters = () => {
    dispatch(setFilter('Show all'));
  };
  return (
    <div className="flex h-[80dvh] w-full items-center justify-center xs:px-2 sm:px-4">
      <div
        className={clsx(
          'flex max-w-[700px] flex-col gap-6 rounded-[30px] p-12',
          'border border-skin-primary border-opacity-40 text-center'
        )}
      >
        <h2>
          No favorites with{' '}
          <span className="text-skin-theme underline">{`"${filter}"`}</span>{' '}
          sort parameter
        </h2>
        <p>Try to chose different sorter parameters</p>
        <Button
          text="Reset sorter"
          type="button"
          onClick={resetFilters}
          className={clsx(
            `mx-auto flex max-w-[240px] items-center justify-center transition-all`,
            'rounded-[30px] border border-transparent bg-skin-background px-6',
            'h-[52px] text-skin-inverted duration-300 hover:border-skin-primary',
            'hover:bg-skin-background-white hover:text-skin-theme'
          )}
        />
      </div>
    </div>
  );
};
