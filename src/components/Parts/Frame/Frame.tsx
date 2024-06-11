import clsx from 'clsx';
import { FrameProps } from './Frame.types';
import heroImage from '../../../assets/images/HeroX1.webp';
import heroImage2x from '../../../assets/images/HeroX2.webp';
import sprite from '../../../assets/sprite.svg';

export const Frame: React.FC<FrameProps> = ({
  width = 'w-full',
  imageSrc = '',
  border = 'rounded-lg',
  isCircle = false,
  height = 'h-auto',
  position = 'object-center',
  hero = false,
  avaClass,
}) => {
  const frameClasses = clsx(
    `relative`,
    isCircle ? 'rounded-full overflow-hidden' : border,
    width,
    height,
    hero ? 'w-full h-[calc(100vh-64px)]' : ''
  );

  const imgClasses = clsx('w-full h-full object-cover', position);

  return (
    <div className={frameClasses}>
      {hero ? (
        <>
          <img
            src={heroImage}
            srcSet={`${heroImage} 1x, ${heroImage2x} 2x`}
            sizes="(max-width: 768px) 100vw, 100%"
            alt="Baby with nanny reading book in room with warm light"
            className={imgClasses}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-[rgba(18,20,23,0.6)] bg-cover"></div>
        </>
      ) : imageSrc ? (
        <img
          src={imageSrc}
          alt="Framed user avatar"
          className={avaClass}
          width={width}
          height={height}
        />
      ) : (
        <svg
          className="fill-skin-primary transition-colors duration-300 md:h-10 md:w-10"
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
