import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface UploadProps {
  register?: UseFormRegister<FieldValues>;
  handleAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  previewPhotoURL: string;
  photoURL: string;
  clearAva: () => void;
}
