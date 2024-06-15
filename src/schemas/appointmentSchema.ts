import * as yup from 'yup';

export const appointmentSchema = yup.object().shape({
  address: yup.string().required('Address is required'),
  tel: yup.string().required('Phone number is required'),
  childAge: yup.string().required('Child age is required'),
  date: yup.date().required('Booking date is required'),
  email: yup
    .string()
    .test(
      'has-one-at-symbol',
      'Email must contain exactly one "@" symbol',
      (value) => (value.match(/@/g) || []).length === 1
    )
    .test(
      'has-dot-after-at-symbol',
      'Email must contain a dot after the "@" symbol',
      (value) => {
        const atIndex = value.indexOf('@');
        const dotIndex = value.indexOf('.', atIndex);
        return dotIndex > atIndex;
      }
    )
    .matches(
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Invalid email format'
    ),
  parentName: yup
    .string()
    .required("Parent's name is required")
    .matches(
      /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ0-9\s!@#$%^&*()_+-=`~[\]{}|\\:;"'<>,.?/]+$/,
      'Invalid characters in name'
    )
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name cannot exceed 16 characters'),
  comment: yup.string().max(500, 'Comment cannot exceed 500 characters'),
});
