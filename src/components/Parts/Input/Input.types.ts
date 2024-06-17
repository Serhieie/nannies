import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface InputProps {
  register?: UseFormRegister<any>;
  errors?: FieldErrors | string;
  required?: boolean;
  id: string;
  type: string;
  placeholder: string;
  showPassword?: boolean;
  filterByName?: boolean;
  value?: string;
  togglePasswordVisibility?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelClasses?: string;
  inputClasses?: string;
  errorClasses?: string;
  templateArea?: string;
}
