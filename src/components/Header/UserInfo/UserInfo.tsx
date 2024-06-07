import { useState } from 'react';
import { useUserState } from '../../../hooks/useUserState';
import { Frame } from '../../Parts/Frame/Frame';
import { Modal } from '../../Modal/Modal';

interface UserInfoProps {}

export const UserInfo: React.FC<UserInfoProps> = () => {
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const {
    userState: { name },
  } = useUserState();

  const toggleUserInfoModal = () => {
    setIsUserInfoOpen((state) => !state);
  };

  const closeEditForm = () => {
    setIsUserInfoOpen(false);
  };

  return (
    <>
      <div
        onClick={toggleUserInfoModal}
        className="user-select-none relative flex cursor-pointer items-center gap-3"
      >
        <Frame width="w-8" border="rounded-[30px]" />
        <p className="text-[18px] text-base font-semibold leading-[111%] text-skin-inverted">
          {name}Ilona
        </p>
      </div>
      <Modal isOpen={isUserInfoOpen} onClose={closeEditForm} />
    </>
  );
};
