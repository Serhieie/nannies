import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputProps {
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  required?: boolean;
  id: string;
  type: string;
  placeholder: string;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
  labelClasses?: string;
  inputClasses?: string;
  errorClasses?: string;
  templateArea?: string;
}
