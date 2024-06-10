import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { Nanny } from '../redux/nannies/nannies.types';

interface UseNanniesReturn {
  nannies: Nanny[];
  isLoading: boolean;
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const useNanniesState = (): UseNanniesReturn => {
  const { nannies, isLoading, error, status } = useSelector(
    (state: RootState) => state.nannies
  );

  return { nannies, isLoading, error, status };
};
