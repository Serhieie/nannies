import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../schemas/authSchemas';
import { Button } from '../../Parts/Button/Button';
import { registerUser } from '../../../redux/user/userOperations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../../redux/store';
import { setIsRegistrationModalOpen } from '../../../redux/modals/modalsSlice';
import { RegistrationFormInputs } from './RegistrationModal.types';
import { registrationInputsConfig } from './registrationInputsConfig';
import { Input } from '../../Parts/Input/Input';
import clsx from 'clsx';

const RegisterForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema.validationRegisterSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: RegistrationFormInputs) => {
    dispatch(registerUser(data));
    reset();
    navigate('/nannies');
    dispatch(setIsRegistrationModalOpen(false));
  };

  return (
    <form
      className="mt-2.5 flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      {registrationInputsConfig.map(({ id, type, placeholder, required }) => (
        <Input
          key={id}
          required={required}
          register={register}
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
        text={'Sign Up'}
      />
    </form>
  );
};

export default RegisterForm;
