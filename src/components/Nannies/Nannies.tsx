import { NanniesProps } from './Nannies.types';
import { NanniesList } from './NanniesList/NanniesList';
import { Filter } from '../Filter/Filter';
import { useEffect, useState } from 'react';
import { fetchNannies } from 'nannies/nanniesOperations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { Container } from '../Parts/Container/Container';
import { Button } from '../Parts/Button/Button';
import { Modal } from '../Modal/Modal';
import { useLocation } from 'react-router-dom';
import {
  setIsAppointmentOpen,
  setIsLoginModalOpen,
  setIsLoginPopUpOpen,
} from '@/redux/modals/modalsSlice';
import { useFiltersState, useModalsState, useNanniesState } from '@/hooks';
import { AppointmentModal } from '../AppointmentModal/AppointmentModa';
import clsx from 'clsx';
import { Input } from '../Parts/Input/Input';
import { NoFilteredNannies } from '../pages/NanniesPage/NoFilteredNannies';
import { setSearchedName } from '@/redux/filters/filtersSlice';
import { capitalizedName } from '@/helpers';
import { NanniesListSkeleton } from '../Skelletons/NanniesListSkeleton/NanniesListSkeleton';

export const Nannies: React.FC<NanniesProps> = ({
  nannies,
  isFavorite = false,
}) => {
  const { activeNannie, total, isLoading } = useNanniesState();
  const { searchedName } = useFiltersState();
  const { filter, favoriteFilter } = useFiltersState();
  const [perPage, setPerPage] = useState(3);
  const { isLoginPopUpOpen, isAppointmentOpen } = useModalsState();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const isFavoritesPage = location.pathname === '/favorites';
  const showLoadMore = total > perPage;

  useEffect(() => {
    dispatch(fetchNannies(perPage));
  }, [perPage]);

  const loadMore = () => {
    if (perPage <= nannies.length) {
      setPerPage((state) => state + 3);
    }
  };

  const closeIsLoginPopUpOpen = () => {
    dispatch(setIsLoginPopUpOpen(false));
  };

  const handleLoginClick = () => {
    closeIsLoginPopUpOpen();
    setTimeout(() => {
      dispatch(setIsLoginModalOpen(true));
    }, 300);
  };

  const closeIsAppointmentOpen = () => {
    dispatch(setIsAppointmentOpen(false));
  };

  const findByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchedName(event.target.value.toLowerCase()));
  };

  const filteredNannies = nannies.filter((nanny) =>
    nanny.name.toLowerCase().includes(searchedName)
  );

  const isNannies = filteredNannies.length > 0;
  return (
    <>
      <Container>
        <div className="mb-24 mt-16 min-h-[calc(100dvh-260px)]">
          <div
            className={clsx(
              'flex items-center gap-4 xs:flex-col sm2:flex-row',
              'font-normal'
            )}
          >
            <Filter
              isFavorite={isFavorite}
              filter={isFavorite ? favoriteFilter : filter}
            />
            <Input
              labelClasses="relative min-h-12 max-w-56"
              inputClasses={clsx(
                'max-h-12 max-w-56 mx-auto rounded-[14px] px-[18px] py-[12px]',
                'placeholder:text-skin-secondary'
              )}
              id="filterByName"
              type="text"
              placeholder="Find by name"
              filterByName={true}
              onChange={findByName}
              value={capitalizedName(searchedName)}
            />
          </div>

          {isLoading && !isFavoritesPage ? (
            <NanniesListSkeleton />
          ) : (
            <>
              {isNannies ? (
                <NanniesList nannies={filteredNannies} />
              ) : (
                <NoFilteredNannies isFavorite={isFavorite} title="nannies" />
              )}
              {!isFavoritesPage && showLoadMore && (
                <Button
                  className={clsx(
                    'mx-auto mt-16 max-w-[160px] border border-transparent text-skin-inverted',
                    'hover:border-skin-primary'
                  )}
                  text="Load More"
                  type="button"
                  onClick={loadMore}
                />
              )}
            </>
          )}
        </div>
      </Container>
      <Modal
        title="Hello"
        textClassName="xs:text-lg xl:text-xl w-96"
        text="If you want to use favorites, you should be logged in"
        onClose={closeIsLoginPopUpOpen}
        isOpen={isLoginPopUpOpen}
      >
        <Button
          className="border border-transparent text-skin-inverted hover:border-skin-primary"
          onClick={handleLoginClick}
          type="button"
          text="To Log In"
        />
      </Modal>
      <Modal
        title={'Make an appointment with a babysitter'}
        text="Arranging a meeting with a caregiver for your child is the first
         step to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner."
        isOpen={isAppointmentOpen}
        onClose={closeIsAppointmentOpen}
      >
        <AppointmentModal nanny={activeNannie} />
      </Modal>
    </>
  );
};
