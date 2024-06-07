import clsx from 'clsx';
import { FrameProps } from './Frame.types';
import heroImage from '../../../assets/images/HeroX1.webp';
import heroImage2x from '../../../assets/images/HeroX2.webp';
import sprite from '../../../assets/sprite.svg';

export const Frame: React.FC<FrameProps> = ({
  width,
  imageSrc = '',
  border = 'rounded-lg',
  isCircle = false,
  height = width,
  position = 'object-center',
  hero = false,
}) => {
  const frameClasses = clsx(
    'relative',
    isCircle ? 'rounded-full overflow-hidden' : border,
    width,
    height || width,
    hero ? 'w-[699px] h-[736px]' : ''
  );

  const imgClasses = clsx('w-full h-full object-cover', position);

  return (
    <div className={frameClasses}>
      {hero ? (
        <img
          src={heroImage}
          srcSet={`${heroImage} 1x, ${heroImage2x} 2x`}
          sizes="(max-width: 768px) 100vw, 699px"
          alt="Baby with nanny reading book in room with warm light"
          className={imgClasses}
        />
      ) : imageSrc ? (
        <img src={imageSrc} alt="Framed user avatar" className={imgClasses} />
      ) : (
        <svg
          className="fill-skin-primary"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <use xlinkHref={`${sprite}#icon-image`} />
        </svg>
      )}
    </div>
  );
};
