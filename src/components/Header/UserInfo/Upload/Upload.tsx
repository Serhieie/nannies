import React from 'react';
import clsx from 'clsx';
import { Frame } from 'components/Parts/Frame/Frame';
import { FaPlus } from 'react-icons/fa';
import { UploadProps } from './Upload.types';
import { FiMinusSquare } from 'react-icons/fi';

const Upload: React.FC<UploadProps> = ({
  register,
  handleAvatarChange,
  previewPhotoURL,
  photoURL,
  clearAva,
}) => {
  return (
    <label
      className={clsx(
        'flex w-44 items-center justify-center rounded-xl border-2',
        'relative mx-auto h-36 cursor-pointer border-transparent',
        'transition-all hover:border-skin-primary hover:border-opacity-40',
        'duration-300',
        {
          'bg-skin-background': !photoURL,
          'bg-transparent': photoURL,
        }
      )}
      htmlFor="photoURL"
    >
      <button
        className="absolute -right-6 -top-6 z-20 mx-auto inline-block h-7 w-7"
        onClick={clearAva}
        type="button"
      >
        <FiMinusSquare size={20} />
      </button>
      <input
        id="photoURL"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        {...register?.('photoURL')}
        name="photoURL"
        onChange={handleAvatarChange}
      />
      <Frame
        avaClass="w-32 h-32 mx-auto  cursor-pointer rounded-[10px] hover:border-skin-primary object-cover"
        imageSrc={previewPhotoURL}
        userModal={true}
      />
      <span
        className={clsx(
          'absolute bottom-[-24px] rounded-[4px] bg-skin-background p-2',
          'border border-transparent object-center text-skin-inverted'
        )}
      >
        <FaPlus />
      </span>
    </label>
  );
};

export default Upload;
