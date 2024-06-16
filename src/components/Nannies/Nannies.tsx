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
import { useLocation, useNavigate } from 'react-router-dom';
import {
  setIsAppointmentOpen,
  setIsLoginModalOpen,
  setIsLoginPopUpOpen,
} from '../../redux/modals/modalsSlice';
import { useModalsState, useNanniesState } from '../../hooks';
import { AppointmentModal } from '../AppointmentModal/AppointmentModa';
import clsx from 'clsx';

export const Nannies: React.FC<NanniesProps> = ({ nannies }) => {
  const { activeNannie, total } = useNanniesState();
  const [perPage, setPerPage] = useState(3);
  const { isLoginPopUpOpen, isAppointmentOpen } = useModalsState();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
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
    navigate('/');
    setTimeout(() => {
      dispatch(setIsLoginModalOpen(true));
    }, 300);
  };

  const closeIsAppointmentOpen = () => {
    dispatch(setIsAppointmentOpen(false));
  };

  return (
    <>
      <Container>
        <div className="mb-24 mt-16 min-h-[calc(100dvh-260px)]">
          <Filter />
          <NanniesList nannies={nannies} />
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
