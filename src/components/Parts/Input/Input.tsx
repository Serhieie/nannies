import clsx from 'clsx';
import { PasswordVisibilityBtn } from '../PasswordVisiblityBtn/PasswordVisibilityBtn';
import { IoSearchSharp } from 'react-icons/io5';
import { InputProps } from './Input.types';
import { FieldError } from 'react-hook-form';

export const Input: React.FC<InputProps> = ({
  register = null,
  required = false,
  errors,
  showPassword = false,
  togglePasswordVisibility = null,
  onChange,
  id,
  type,
  placeholder,
  filterByName = false,
  value = null,
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
        onChange={onChange ? onChange : null}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value && value}
        {...(register ? register(id, { required }) : {})}
      />
      {filterByName && (
        <IoSearchSharp
          size={24}
          className={clsx(
            'absolute right-4 top-1/2 -translate-y-1/2',
            'text-skin-theme opacity-40'
          )}
        />
      )}
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
