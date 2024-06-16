import { InputProps } from 'components/Parts/Input/Input.types';

export const registrationInputsConfig: InputProps[] = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Enter your name',
    required: true,
  },
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
