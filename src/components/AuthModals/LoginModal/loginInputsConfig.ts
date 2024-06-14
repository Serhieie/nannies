import { InputProps } from '../../Parts/Input/Input.types';

export const loginInputsConfig: InputProps[] = [
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  },
];
