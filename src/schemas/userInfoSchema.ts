import * as yup from 'yup';

export const updateUserSchema = yup.object().shape({
  updatedName: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ0-9\s!@#$%^&*()_+-=`~[\]{}|\\:;"'<>,.?/]+$/,
      'Invalid characters in name'
    )
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name cannot exceed 16 characters')
    .nullable(),
  photoURL: yup.mixed().nullable(),
});
