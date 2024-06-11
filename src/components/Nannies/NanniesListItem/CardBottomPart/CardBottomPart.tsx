import { CardBottomPartProps } from './CardBottomPart.type';

export const CardBottomPart: React.FC<CardBottomPartProps> = ({
  handleClick,
  about,
  isReadMoreOpen,
}) => {
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="text-base font-normal text-skin-secondary">{about}</p>
      {!isReadMoreOpen && (
        <button
          className="text-start underline"
          onClick={handleClick}
          type="button"
        >
          Read More
        </button>
      )}
    </div>
  );
};
