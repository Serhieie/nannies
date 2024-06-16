import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { useUserState } from '@/hooks';
import { Input } from 'components/Parts/Input/Input';
import clsx from 'clsx';
import { Button } from 'components/Parts/Button/Button';
import { updateUserProfile } from 'users/userOperations';
import { AppDispatch } from '@/redux/store';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUserSchema } from '@/schemas';
import { useEffect, useState, useMemo } from 'react';
import Upload from '../Upload/Upload';

interface SubmitTypes {
  photoURL: string | File;
  updatedName: string;
}

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

  const onSubmit: SubmitHandler<SubmitTypes> = async (data) => {
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
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(onSubmit as any)}
    >
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
