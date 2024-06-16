import sprite from 'assets/sprite.svg';
import { PasswordVisibilityBtnProps } from './PasswordVisibilityBtn.types';

export const PasswordVisibilityBtn: React.FC<PasswordVisibilityBtnProps> = ({
  togglePasswordVisibility,
  showPassword,
}) => {
  const handleClick = () => {
    if (togglePasswordVisibility) {
      togglePasswordVisibility();
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer"
    >
      {showPassword ? (
        <svg
          className="h-5 w-5 fill-transparent stroke-skin-base-text"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <use xlinkHref={`${sprite}#icon-eye`} />
        </svg>
      ) : (
        <svg
          className="fill:none h-5 w-5 fill-transparent stroke-skin-base-text"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <use xlinkHref={`${sprite}#icon-eye-c`} />
        </svg>
      )}
    </button>
  );
};
