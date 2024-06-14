import { useState } from 'react';
import { useUserState } from '../../../hooks/useUserState';
import { Frame } from '../../Parts/Frame/Frame';
import { Modal } from '../../Modal/Modal';
import clsx from 'clsx';

interface UserInfoProps {}

export const UserInfo: React.FC<UserInfoProps> = () => {
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const {
    userState: { name },
  } = useUserState();
  const { isLoggedIn } = useUserState();

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
