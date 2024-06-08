import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  type,
  primary = true,
  onClick,
  className,
  children,
  text,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        primary
          ? 'border-skin-inverted border-opacity-40 bg-skin-background hover:bg-skin-background-white hover:text-skin-theme'
          : 'border-skin-primary border-opacity-100 bg-skin-background-white text-skin-theme hover:border-skin-inverted hover:border-opacity-40 hover:bg-skin-background hover:text-skin-inverted'
      } flex w-full items-center justify-center rounded-[30px] border transition-all duration-300 ${className}`}
    >
      {text}
      {children}
    </button>
  );
};
