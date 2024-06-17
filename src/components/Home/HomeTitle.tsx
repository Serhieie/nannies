import { HiArrowRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { fetchNanniesTotal } from '@/redux/nannies/nanniesOperations';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useMedia } from '@/hooks';

export const HomeTitle: React.FC = () => {
  const [isMouseOn, setIsMouseOn] = useState(false);
  const { isHeightLow } = useMedia();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNanniesTotal());
  }, []);

  return (
    <div
      className={clsx(
        'absolute z-30 mt-6 flex w-full -translate-x-1/2 select-none flex-col',
        'rounded-[30px] bg-transparent bg-opacity-50 p-8 text-skin-inverted',
        'backdrop-blur-sm xs:bottom-0 xs:left-1/2 xs:max-w-[600px] md:left-10',
        'md:top-2/4 md:max-w-[320px] md:-translate-y-1/2 md:translate-x-0 md:bg-opacity-0',
        'lg:max-w-[520px]',
        {
          'gap-1': isHeightLow,
          'xs:gap-2 md:gap-6': !isHeightLow,
        }
      )}
    >
      <h1
        className={clsx({
          'max-w-[400px] xs:text-xl sm:text-2xl md:text-2xl md2:text-4xl xl:text-7xl':
            isHeightLow,
          'xs:text-3xl sm:text-4xl md:text-4xl md2:text-6xl xl:text-7xl':
            !isHeightLow,
        })}
      >
        Make Life Easier for the Family:
      </h1>
      <p
        className={clsx('leading-[107%]', {
          'max-w-[200px] xs:text-sm': isHeightLow,
          'xs:text-lg md:text-xl md2:text-2xl xl:text-3xl': !isHeightLow,
        })}
      >
        Find Babysitters Online for All Occasions
      </p>
      <NavLink
        className={clsx(
          'flex max-w-[180px] items-center gap-4 rounded-[30px] border md:max-w-[230px]',
          'border-white border-opacity-40 px-5 py-2 text-lg leading-[120%] md:px-10 md:py-4 md:text-xl',
          {
            'absolute -top-10 hover:bg-skin-background hover:bg-opacity-20 sm2:right-4 sm2:top-20 md:-right-[44dvw] md:top-24':
              isHeightLow,
            static: !isHeightLow,
          }
        )}
        to={'/nannies'}
        onMouseEnter={() => setIsMouseOn(true)}
        onMouseLeave={() => setIsMouseOn(false)}
      >
        Get started
        <HiArrowRight
          className={clsx('transition-transform duration-500', {
            '-rotate-45': !isMouseOn,
            '-rotate-0': isMouseOn,
          })}
          size={28}
        />
      </NavLink>
    </div>
  );
};
