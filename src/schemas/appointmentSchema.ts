import * as yup from 'yup';

export const appointmentSchema = yup.object().shape({
  address: yup.string().required('Address is required'),
  tel: yup.string().required('Phone number is required'),
  childAge: yup.string().required('Child age is required'),
  date: yup.date().required('Booking date is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  parentName: yup.string().required("Parent's name is required"),
  comment: yup.string().max(500, 'Comment cannot exceed 500 characters'),
});
