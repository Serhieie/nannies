import sprite from 'assets/sprite.svg';

export const FavoriteButtonSkeleton: React.FC = () => {
  return (
    <button
      className="self-start xs:absolute xs:right-5 xs:top-5 sm:relative sm:right-0 sm:top-0"
      type="button"
    >
      <svg
        className={`fill-transparent stroke-skin-base-text opacity-50 transition-colors duration-300`}
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
      >
        <use xlinkHref={`${sprite}#icon-hearth`} />
      </svg>
    </button>
  );
};
