import { useNanniesState } from '@/hooks';
import { Nannies } from 'components/Nannies/Nannies';

const NanniesPage: React.FC = () => {
  const { filteredNannies } = useNanniesState();
  return (
    <>
      <Nannies nannies={filteredNannies} />
    </>
  );
};

export default NanniesPage;
