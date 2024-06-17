import { useState } from 'react';
import { Resolver, UseFormRegister, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationLoginSchema } from '@/schemas';
import { Button } from 'components/Parts/Button/Button';
import { loginUser } from 'users/userOperations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import {
  setIsLoginModalOpen,
  setIsRegistrationModalOpen,
} from '@/redux/modals/modalsSlice';
import { Input } from 'components/Parts/Input/Input';
import { LoginFormInputs } from './LoginModal.types';
import { loginInputsConfig } from './loginInputsConfig';
import { clsx } from 'clsx';
import { useUserState } from '@/hooks';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLoginSchema) as Resolver<LoginFormInputs>,
  });
  const { isLoading } = useUserState();
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: LoginFormInputs) => {
    dispatch(loginUser(data));
    reset();
    dispatch(setIsLoginModalOpen(false));
  };

  const handleRegistrateClick = () => {
    dispatch(setIsLoginModalOpen(false));
    dispatch(setIsRegistrationModalOpen(true));
  };

  return (
    <form
      className="custom-scrollbar xs:min-w-[260px]"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <div className="flex flex-col gap-[18px]">
        {loginInputsConfig.map(({ id, type, placeholder, required }) => (
          <Input
            key={id}
            required={required}
            register={register as UseFormRegister<LoginFormInputs>}
            errors={errors}
            id={id}
            type={id === 'password' && showPassword ? 'text' : type}
            placeholder={placeholder}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        ))}
      </div>
      <div className="mt-2 flex gap-4">
        Have no account?{' '}
        <button
          onClick={handleRegistrateClick}
          type="button"
          className="text-skin-theme"
        >
          Registrate
        </button>
      </div>
      <Button
        className={clsx(
          'mt-10 cursor-pointer rounded-[30px] border border-transparent border-opacity-100',
          'py-4 text-sm font-bold text-skin-inverted transition-all duration-300',
          'hover:border-skin-primary hover:bg-opacity-40'
        )}
        type="submit"
        text={`${isLoading ? 'Loading...' : 'Log In'}`}
      />
    </form>
  );
};
