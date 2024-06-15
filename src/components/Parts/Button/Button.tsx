import clsx from 'clsx';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  type,
  primary = true,
  onClick,
  className,
  children,
  text,
  templateArea = false,
  disabled,
}) => {
  const templateAreaStyle = templateArea ? { gridArea: 'button' } : {};
  return (
    <button
      style={templateAreaStyle}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `flex h-[52px] w-full min-w-[124px] items-center justify-center`,
        `rounded-[30px] transition-all duration-300 disabled:opacity-60 ${className}`,
        {
          'bg-skin-background hover:bg-skin-background-white': primary,
          'hover:text-skin-theme': primary,
          'bg-skin-background-muted border hover:bg-skin-background': !primary,
          'border-opacity-40 text-skin-inverted hover:bg-opacity-40': !primary,
          'border-skin-inverted': !primary,
        }
      )}
    >
      {text}
      {children}
    </button>
  );
};
