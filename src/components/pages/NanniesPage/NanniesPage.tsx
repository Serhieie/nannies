import { useNanniesState } from '../../../hooks/useNannieState';
import { Nannies } from '../../Nannies/Nannies';

const NanniesPage: React.FC = () => {
  const { filteredNannies } = useNanniesState();
  return (
    <>
      <Nannies nannies={filteredNannies} />
    </>
  );
};

export default NanniesPage;
