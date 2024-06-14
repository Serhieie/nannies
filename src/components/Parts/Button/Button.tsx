import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  type,
  primary = true,
  onClick,
  className,
  children,
  text,
  templateArea = false,
}) => {
  const templateAreaStyle = templateArea ? { gridArea: 'button' } : {};
  return (
    <button
      style={templateAreaStyle}
      type={type}
      onClick={onClick}
      className={`${
        primary
          ? 'bg-skin-background hover:bg-skin-background-white hover:text-skin-theme'
          : 'bg-skin-background-muted border border-skin-inverted border-opacity-40 text-skin-inverted hover:bg-skin-background hover:bg-opacity-40'
      } flex h-[52px] w-full min-w-[124px] items-center justify-center rounded-[30px] transition-all duration-300 ${className}`}
    >
      {text}
      {children}
    </button>
  );
};
