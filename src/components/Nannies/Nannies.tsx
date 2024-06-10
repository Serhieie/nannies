import { NanniesProps } from './Nannies.types';
import { NanniesList } from './NanniesList/NanniesList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchNannies } from '../../redux/nannies/nanniesOperations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useNanniesState } from '../../hooks/useNannieState';

export const Nannies: React.FC<NanniesProps> = () => {
  const { nannies } = useNanniesState();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchNannies());
  }, []);

  return (
    <div>
      <Filter />
      <NanniesList nannies={nannies} />
    </div>
  );
};
