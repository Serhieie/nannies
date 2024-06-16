import { Button } from 'components/Parts/Button/Button';
import { useLocation } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import RegisterForm from 'components/AuthModals/RegistationModal/RegistrationModal';
import { LoginForm } from 'components/AuthModals/LoginModal/LoginModal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import {
  setIsLoginModalOpen,
  setIsRegistrationModalOpen,
} from 'modalsState/modalsSlice';
import { useModalsState } from '@/hooks';

export const AuthButtons: React.FC = () => {
  const { isLoginModalOpen, isRegistrationModalOpen } = useModalsState();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const isRegistrationOpen = () => {
    dispatch(setIsRegistrationModalOpen(true));
  };
  const isRegistrationClose = () => {
    dispatch(setIsRegistrationModalOpen(false));
  };

  const isLoginOpen = () => {
    dispatch(setIsLoginModalOpen(true));
  };
  const isLoginClose = () => {
    dispatch(setIsLoginModalOpen(false));
  };

  return (
    <>
      <div
        className={`flex h-full w-full max-w-96 items-center gap-2 xs:flex-col md2:flex-row xl:ml-10`}
      >
        {isHomePage && (
          <>
            <Button
              text={'Log in'}
              type="button"
              onClick={isLoginOpen}
              primary={false}
              className="max-h-[48px] w-[124px] py-1 text-lg md:py-2"
            />{' '}
            <Button
              text={'Registration'}
              type="button"
              onClick={isRegistrationOpen}
              primary={true}
              className={`max-h-[48px] w-[168px] px-12 py-1 text-lg md:px-10 md:py-2`}
            />
          </>
        )}
      </div>
      <Modal
        title="Log In"
        text="Welcome back! Please enter your credentials to access your account and continue your babysitter search."
        onClose={isLoginClose}
        isOpen={isLoginModalOpen}
      >
        <LoginForm />
      </Modal>
      <Modal
        title="Registration"
        text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
        onClose={isRegistrationClose}
        isOpen={isRegistrationModalOpen}
      >
        <RegisterForm />
      </Modal>
    </>
  );
};
