import { useState } from 'react';
import { useUserState } from '@/hooks';
import { Frame } from 'components/Parts/Frame/Frame';
import { Modal } from 'components/Modal/Modal';
import clsx from 'clsx';
import { UserInfoForm } from './UserInfoForm/UserInfoForm';

export const UserInfo: React.FC = () => {
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
            'user-select-none max-w-92 relative flex cursor-pointer',
            'flex-shrink-0 items-center gap-3 xs:mx-0 xl:mx-10',
            'border border-transparent px-4 py-1 hover:border-skin-inverted',
            'rounded-xl transition-all duration-300 hover:border-opacity-60'
          )}
        >
          <Frame
            imageSrc={photoURL && photoURL}
            border="rounded-[6px] overflow-hidden"
            avaClass="w-10 h-10 object-cover object-center flex-shrink-0"
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
