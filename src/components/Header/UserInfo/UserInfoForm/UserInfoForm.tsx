import { useDispatch } from 'react-redux';
import { useForm, useWatch } from 'react-hook-form';
import { useUserState } from '../../../../hooks/useUserState';
import { Input } from '../../../Parts/Input/Input';
import clsx from 'clsx';
import { Button } from '../../../Parts/Button/Button';
import { updateUserProfile } from '../../../../redux/user/userOperations';
import { AppDispatch } from '../../../../redux/store';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUserSchema } from '../../../../schemas/userInfoSchema';
import { useEffect, useState, useMemo } from 'react';
import Upload from '../Upload/Upload';

export const UserInfoForm = () => {
  const { name, photoURL, isLoading } = useUserState();
  const [previewPhotoURL, setPreviewPhotoURL] = useState<string | undefined>(
    photoURL
  );
  const dispatch = useDispatch<AppDispatch>();

  const defaultValues = useMemo(
    () => ({
      updatedName: name,
      photoURL: photoURL,
    }),
    [name, photoURL]
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
    resolver: yupResolver(updateUserSchema),
  });

  const watchedValues = useWatch({ control });

  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const hasChanged =
      watchedValues.updatedName !== defaultValues.updatedName ||
      (typeof watchedValues.photoURL === 'string' &&
        watchedValues.photoURL !== defaultValues.photoURL) ||
      watchedValues.photoURL instanceof File;
    setIsFormChanged(hasChanged);
  }, [watchedValues, defaultValues]);

  const onSubmit = async (data: {
    photoURL: File | string;
    updatedName: string;
  }) => {
    const { updatedName, photoURL } = data;
    try {
      await dispatch(updateUserProfile({ updatedName, photoURL }));
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewPhotoURL(previewUrl);
      setValue('photoURL', file);
    } else {
      setPreviewPhotoURL(photoURL);
    }
  };

  const clearAva = () => {
    setPreviewPhotoURL('');
    setValue('photoURL', 'delete');
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <Upload
        handleAvatarChange={handleAvatarChange}
        register={register}
        previewPhotoURL={previewPhotoURL}
        photoURL={photoURL}
        clearAva={clearAva}
      />{' '}
      {errors?.photoURL && (
        <p className="inline-block h-2 text-center text-red-500">
          {errors.photoURL.message}
        </p>
      )}
      <Input
        key={'updatedName'}
        required={false}
        register={register}
        errors={errors}
        id={'updatedName'}
        type={'text'}
        placeholder={name ? name : 'Update your name'}
      />
      <Button
        className={clsx(
          'border border-transparent text-skin-inverted hover:border-opacity-40',
          'mx-auto w-64 hover:border-skin-primary'
        )}
        disabled={isLoading || !isFormChanged}
        text={`${isLoading ? 'Loading...' : 'Send'}`}
        type="submit"
      />
    </form>
  );
};
