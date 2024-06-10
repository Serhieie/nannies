import { useState } from 'react';
import { Button } from '../../Parts/Button/Button';
import { useLocation } from 'react-router-dom';
import { Modal } from '../../Modal/Modal';
import RegisterForm from '../../AuthModals/RegistrationModal';
import LoginForm from '../../AuthModals/LoginModal';

export const AuthButtons: React.FC = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleIsRegistrationOpen = () => {
    setIsRegistrationOpen((state) => !state);
  };
  const toggleIsLoginOpen = () => {
    setIsLoginOpen((state) => !state);
  };

  return (
    <>
      <div
        className={`md2:flex-row flex h-full w-full max-w-96 items-center gap-2 xs:flex-col xl:ml-10`}
      >
        {isHomePage && (
          <>
            <Button
              text={'Log in'}
              type="button"
              onClick={toggleIsLoginOpen}
              primary={false}
              className="max-h-[48px] w-[124px] py-1 text-lg md:py-2"
            />{' '}
            <Button
              text={'Registration'}
              type="button"
              onClick={toggleIsRegistrationOpen}
              primary={true}
              className={`max-h-[48px] w-[168px] px-12 py-1 text-lg md:px-10 md:py-2`}
            />
          </>
        )}
      </div>
      <Modal
        title="Log In"
        text="Welcome back! Please enter your credentials to access your account and continue your babysitter search."
        onClose={toggleIsLoginOpen}
        isOpen={isLoginOpen}
      >
        <LoginForm />
      </Modal>
      <Modal
        title="Registration"
        text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
        onClose={toggleIsRegistrationOpen}
        isOpen={isRegistrationOpen}
      >
        <RegisterForm />
      </Modal>
    </>
  );
};
