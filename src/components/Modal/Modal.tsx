import ReactModal from 'react-modal';

ReactModal.setAppElement('#root-modal');

export const Modal = ({ isOpen, onClose }) => {
  const overlayStyles = `fixed top-0 left-0 right-0 bottom-0 bg-overlay flex justify-center items-center z-50`;
  const modalStyles = `${isOpen ? 'scale-100' : 'scale-75'} absolute transition-all duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  p-16 shadow-lg`;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={100}
      overlayClassName={overlayStyles}
      className={modalStyles}
    ></ReactModal>
  );
};
