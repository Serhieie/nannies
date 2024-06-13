import ReactModal from 'react-modal';
import sprite from '../../assets/sprite.svg';
import { ModalProps } from './Modal.types';

ReactModal.setAppElement('#root-modal');

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  text,
  textClassName,
}) => {
  const overlayStyles = `fixed top-0 left-0 right-0 bottom-0 bg-skin-overlay
   bg-opacity-40 flex justify-center items-center z-50`;
  const modalStyles = `${isOpen ? 'scale-100' : 'scale-75'}
   absolute flex flex-col gap-10 transition-all duration-500 rounded-[30px]
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  xs:p-6 sm:p-8
    lg:p-16 shadow-lg xs:min-w-[312px] sm:min-w-[356px]   `;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={100}
      overlayClassName={overlayStyles}
      className={modalStyles}
    >
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
        {' '}
        <h2 className="mb-5 xs:text-2xl sm:text-3xl xl:text-4xl">{title}</h2>
        <p
          className={`font-normal leading-[125%] text-skin-secondary ${
            textClassName ? `${textClassName}` : 'xs:text-sm xl:text-base'
          }`}
        >
          {text}
        </p>
      </div>

      {children}
    </ReactModal>
  );
};
