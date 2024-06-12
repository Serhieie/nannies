import { useState } from 'react';
import { useForm } from 'react-hook-form';
import sprite from '../../assets/sprite.svg';
import schema from '../../schemas/authSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../Parts/Button/Button';
import { loginUser } from '../../redux/user/userOperations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  setIsLoginModalOpen,
  setIsRegistrationModalOpen,
} from '../../redux/modals/modalsSlice';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema.validationLoginSchema),
  });
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
      className="xs:min-w-[260px]"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <div className="flex flex-col gap-[18px]">
        <div className="relative">
          <input
            className="placeholder-skin-base focus:ring-skin-background h-[52px] w-full rounded-xl border border-skin-grey border-opacity-10 bg-skin-background-white px-[18px] py-3 font-normal text-skin-base placeholder:font-normal focus:outline-none"
            {...register('email', { required: true })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="font-poppins mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            className="placeholder-skin-base focus:ring-skin-background h-[52px] w-full rounded-xl border border-skin-grey border-opacity-10 bg-skin-background-white px-[18px] py-3 font-normal text-skin-base placeholder:font-normal focus:outline-none"
            {...register('password', {
              required: true,
              minLength: 8,
              maxLength: 32,
            })}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="font-poppins mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
          <button
            onClick={togglePasswordVisibility}
            type="button"
            className="w- absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer"
          >
            {showPassword ? (
              <svg
                className="h-5 w-5 fill-transparent stroke-skin-base-text"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
              >
                <use xlinkHref={`${sprite}#icon-eye`} />
              </svg>
            ) : (
              <svg
                className="fill:none h-5 w-5 fill-transparent stroke-skin-base-text"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
              >
                <use xlinkHref={`${sprite}#icon-eye-c`} />
              </svg>
            )}
          </button>
        </div>
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
        className="mt-10 cursor-pointer rounded-[30px] border border-transparent border-opacity-100 py-4 text-sm font-bold text-skin-inverted transition-all duration-300 hover:border-skin-primary hover:bg-opacity-40"
        type="submit"
        text={'Log In'}
      />
    </form>
  );
};

export default LoginForm;
