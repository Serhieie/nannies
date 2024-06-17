import { useState } from 'react';
import { Resolver, UseFormRegister, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationRegisterSchema } from '@/schemas';
import { Button } from 'components/Parts/Button/Button';
import { registerUser } from 'users/userOperations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setIsRegistrationModalOpen } from 'modalsState/modalsSlice';
import { RegistrationFormInputs } from './RegistrationModal.types';
import { registrationInputsConfig } from './registrationInputsConfig';
import { Input } from 'components/Parts/Input/Input';
import { clsx } from 'clsx';
import { useUserState } from '@/hooks';

const RegisterForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      validationRegisterSchema
    ) as Resolver<RegistrationFormInputs>,
  });
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading } = useUserState();
  const dispatch = useDispatch<AppDispatch>();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: RegistrationFormInputs) => {
    await dispatch(registerUser(data));
    reset();
    dispatch(setIsRegistrationModalOpen(false));
  };

  return (
    <form
      className="mt-2.5 flex flex-col gap-5 custom-scrollbar"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      {registrationInputsConfig.map(({ id, type, placeholder, required }) => (
        <Input
          key={id}
          required={required}
          register={register as UseFormRegister<RegistrationFormInputs>}
          errors={errors}
          id={id}
          type={id === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      ))}
      <Button
        className={clsx(
          'mt-10 cursor-pointer rounded-[30px] border border-transparent py-4 text-sm',
          'font-bold text-skin-inverted transition-colors duration-300',
          'hover:border-skin-primary hover:bg-opacity-40'
        )}
        type="submit"
        text={`${isLoading ? 'Loading...' : 'Sign Up'}`}
      />
    </form>
  );
};

export default RegisterForm;
