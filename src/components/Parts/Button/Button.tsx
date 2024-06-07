import { ButtonProps } from './Button.types';

export const Bottom: React.FC<ButtonProps> = ({
  type,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-[30px] ${className}`}
    >
      {children}
    </button>
  );
};
