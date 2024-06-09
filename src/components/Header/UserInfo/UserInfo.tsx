import { useState } from 'react';
import { useUserState } from '../../../hooks/useUserState';
import { Frame } from '../../Parts/Frame/Frame';
import { Modal } from '../../Modal/Modal';
import { useLocation } from 'react-router-dom';

interface UserInfoProps {}

export const UserInfo: React.FC<UserInfoProps> = () => {
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const {
    userState: { name },
  } = useUserState();
  const location = useLocation();
  const isUserInfoShow =
    location.pathname === '/nannies' || location.pathname === '/favorites';

  const toggleUserInfoModal = () => {
    setIsUserInfoOpen((state) => !state);
  };

  const closeEditForm = () => {
    setIsUserInfoOpen(false);
  };

  return (
    isUserInfoShow && (
      <>
        <div
          onClick={toggleUserInfoModal}
          className="user-select-none relative flex cursor-pointer items-center gap-3"
        >
          <Frame width="w-10" border="rounded-[30px]" />
          <p className="text-base font-semibold leading-[111%] text-skin-inverted md:text-[18px]">
            {name}Ilona
          </p>
        </div>
        <Modal
          title="sad"
          text="string"
          isOpen={isUserInfoOpen}
          onClose={closeEditForm}
        />
      </>
    )
  );
};
