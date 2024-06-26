import ReactModal from 'react-modal';
import sprite from 'assets/sprite.svg';
import { ModalProps } from './Modal.types';
import { useMedia } from '@/hooks';
import clsx from 'clsx';

ReactModal.setAppElement('#root-modal');

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  text,
  textClassName,
}) => {
  const { isHeight, isHeightLow } = useMedia();
  const regOrLog =
    title === 'Log In' ||
    title === 'Registration' ||
    title === 'Hello' ||
    title === 'Update user profile';

  const overlayClasses = clsx(
    'fixed top-0 left-0 right-0 bottom-0 bg-skin-overlay bg-opacity-40 flex ',
    'justify-center items-center z-50 overflow-hidden overflow-y-auto'
  );

  const modalClasses = clsx(
    'absolute flex flex-col gap-10 transition-all duration-500 rounded-[30px]',
    ' bg-skin-background-white xs:p-2 xs:pt-12 sm:p-8 lg:p-16 shadow-lg w-[96%]',
    'max-w-[600px]',
    {
      'scale-100': isOpen,
      'scale-75': !isOpen,
      'max-w-[565px]': regOrLog,
      'top-2 bottom-2 overflow-hidden lg:pr-8':
        (isHeight && !regOrLog) || (isHeightLow && regOrLog),
      'top-1/2 transform -translate-y-1/2':
        (!isHeight && !regOrLog) || (!isHeightLow && regOrLog),
    }
  );

  const contentClasses = clsx('flex flex-col gap-10', {
    'custom-scrollbar overflow-hidden overflow-y-auto': isHeight,
    'pr-6': isHeight && !regOrLog,
  });

  const textClasses = clsx(
    'font-normal leading-[125%] text-skin-secondary',
    textClassName ? textClassName : 'xs:text-sm xl:text-base'
  );

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={100}
      overlayClassName={overlayClasses}
      className={modalClasses}
    >
      <div className={contentClasses}>
        <button
          onClick={onClose}
          className="absolute right-5 top-1 h-8 w-8"
          type="button"
        >
          <svg
            className="absolute h-8 w-8 fill-transparent stroke-skin-base-text"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <use xlinkHref={`${sprite}#icon-close`} />
          </svg>
        </button>
        <div className="w-full xl:max-w-[500px]">
          <h2 className="mb-5 xs:text-2xl sm:text-3xl xl:text-4xl">{title}</h2>
          <p className={textClasses}>{text}</p>
        </div>
        {children}
      </div>
    </ReactModal>
  );
};
