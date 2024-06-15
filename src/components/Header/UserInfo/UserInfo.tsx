import { useState } from 'react';
import { useUserState } from '../../../hooks/useUserState';
import { Frame } from '../../Parts/Frame/Frame';
import { Modal } from '../../Modal/Modal';
import clsx from 'clsx';
import { UserInfoForm } from './UserInfoForm/UserInfoForm';

interface UserInfoProps {}

export const UserInfo: React.FC<UserInfoProps> = () => {
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const { name, photoURL, isLoggedIn } = useUserState();

  const toggleUserInfoModal = () => {
    setIsUserInfoOpen((state) => !state);
  };

  const closeEditForm = () => {
    setIsUserInfoOpen(false);
  };

  return (
    isLoggedIn && (
      <>
        <div
          onClick={toggleUserInfoModal}
          className={clsx(
            'user-select-none relative flex max-w-52 cursor-pointer',
            'items-center gap-3 xs:mx-0 xl:mx-10'
          )}
        >
          <Frame
            imageSrc={photoURL && photoURL}
            border="rounded-[6px] overflow-hidden"
            avaClass="w-10 h-10 object-cover object-center"
          />

          <p className="flex-shrink-0 text-base font-semibold leading-[111%] text-skin-inverted md:text-[18px]">
            {name}
          </p>
        </div>
        <Modal
          title="Update user profile"
          text="Set your avatar or change name here"
          isOpen={isUserInfoOpen}
          onClose={closeEditForm}
        >
          <UserInfoForm />
        </Modal>
      </>
    )
  );
};
