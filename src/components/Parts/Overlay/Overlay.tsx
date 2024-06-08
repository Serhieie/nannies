import clsx from 'clsx';
import { useMedia } from '../../../hooks/useMedia';
import { OverlayProps } from './Overlay.types';

export const Overlay: React.FC<OverlayProps> = ({ onClose, isNavOpen }) => {
  const { isMobile, isTablet } = useMedia();
  return (
    <div
      className={clsx('fixed inset-0 z-40 transition-all duration-500', {
        'bg-skin-overlay bg-opacity-40': isNavOpen && (isTablet || isMobile),
        'pointer-events-none bg-opacity-0':
          !isNavOpen || !(isTablet || isMobile),
      })}
      onClick={onClose}
    ></div>
  );
};
