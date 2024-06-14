import { InputProps } from '../Parts/Input/Input.types';
import { AppointmentFormData } from './AppointmentForm/AppointmentForm.types';

export const appointmentDefaultValues: AppointmentFormData = {
  address: '',
  tel: '',
  childAge: '',
  date: null,
  email: '',
  parentName: '',
  comment: '',
};

export const appointmentInputsConfig: InputProps[] = [
  {
    id: 'address',
    type: 'text',
    placeholder: 'Address',
    required: true,
    templateArea: 'address',
  },
  {
    id: 'tel',
    type: 'tel',
    placeholder: '+380',
    required: true,
    templateArea: 'tel',
  },
  {
    id: 'childAge',
    type: 'text',
    placeholder: "Child's age",
    required: true,
    templateArea: 'childAge',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
    templateArea: 'email',
  },
  {
    id: 'parentName',
    type: 'text',
    placeholder: "Father's or mother's name",
    required: true,
    templateArea: 'parentName',
  },
];
