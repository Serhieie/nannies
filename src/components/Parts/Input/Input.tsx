import clsx from 'clsx';
import { PasswordVisibilityBtn } from '../PasswordVisiblityBtn/PasswordVisibilityBtn';
import { InputProps } from './Input.types';
import { FieldError } from 'react-hook-form';

export const Input: React.FC<InputProps> = ({
  register = null,
  required = false,
  errors,
  showPassword = false,
  togglePasswordVisibility = null,
  id,
  type,
  placeholder,
  labelClasses = '',
  inputClasses = '',
  errorClasses = '',
  templateArea = '',
}) => {
  const errorMessage =
    errors && errors[id] && 'message' in errors[id]
      ? (errors[id] as FieldError).message
      : null;

  return (
    <label
      style={{ gridArea: templateArea }}
      className={`relative w-full ${labelClasses}`}
      htmlFor={id}
    >
      <input
        className={clsx(
          `w-full rounded-[12px] focus:outline-skin-primary active:outline-skin-primary`,
          `border border-skin-grey border-opacity-20 px-[18px] py-[15px] leading-[125%]`,
          `placeholder:font-normal placeholder:text-skin-base hover:border-skin-primary`,
          `bg-skin-background-white focus:border-skin-primary active:border-skin-primary`,
          ` ${inputClasses}`
        )}
        id={id}
        placeholder={placeholder}
        type={type}
        {...(register ? register(id, { required }) : {})}
      />
      {errorMessage && (
        <p
          className={`absolute text-center text-sm text-red-500 ${errorClasses}`}
        >
          {errorMessage}
        </p>
      )}
      {id === 'password' && (
        <PasswordVisibilityBtn
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      )}
    </label>
  );
};
