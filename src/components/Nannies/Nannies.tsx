import { NanniesProps } from './Nannies.types';
import { NanniesList } from './NanniesList/NanniesList';
import { Filter } from './Filter/Filter';
import { useEffect, useState } from 'react';
import { fetchNannies } from '../../redux/nannies/nanniesOperations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useNanniesState } from '../../hooks/useNannieState';
import { Container } from '../Parts/Container/Container';

export const Nannies: React.FC<NanniesProps> = () => {
  const [perPage, setPerPage] = useState(3);
  const { nannies } = useNanniesState();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNannies(perPage));
  }, [perPage]);

  const loadMore = () => {
    setPerPage((state) => state + 3);
  };

  return (
    <Container>
      <Filter />
      <NanniesList nannies={nannies} />
      <button type="button" onClick={loadMore}>
        Load More
      </button>
    </Container>
  );
};
