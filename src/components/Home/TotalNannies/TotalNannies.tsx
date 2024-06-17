import { useMedia, useNanniesState, useUserState } from '@/hooks';
import clsx from 'clsx';
import { useState } from 'react';
import { ImCheckmark } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

export const TotalNannies: React.FC = () => {
  const [isMouseOn, setIsMouseOn] = useState(false);
  const { total } = useNanniesState();
  const { isLoggedIn } = useUserState();
  const { isMobile, isHeightLow } = useMedia();
  return (
    <NavLink
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
      to={'/nannies'}
      className={clsx(
        'h-[100px] w-[244px] cursor-pointer bg-skin-background-white md:h-[118px] md:w-[284px]',
        'absolute flex gap-4 overflow-hidden transition-all duration-300',
        'items-center justify-center rounded-[20px]',
        {
          'left-1/2 top-32 -translate-x-1/2': isMobile && isLoggedIn,
          'left-1/2 top-[180px] -translate-x-1/2': isMobile && !isLoggedIn,
          'bottom-[50px] right-[50px]': !isMobile,
          hidden: isHeightLow,
        }
      )}
    >
      <span
        className={clsx(
          'flex items-center justify-center rounded-[13px]',
          'h-[54px] w-[54px] p-3 transition-all duration-300',
          'border',
          {
            'border-transparent bg-skin-background text-skin-inverted':
              !isMouseOn,
            'border-skin-primary bg-skin-background-white text-skin-theme':
              isMouseOn,
          }
        )}
      >
        <ImCheckmark />
      </span>
      <span className="flex flex-col gap-[6px]">
        <span className="font-normal text-skin-secondary">
          Experienced nannies
        </span>
        <div className="flex items-center gap-2">
          <span className="mr-2 text-2xl font-semibold text-skin-base">
            {total}
          </span>
          <span
            className={clsx(`text-2xl transition-all duration-300`, {
              'translate-x-0': isMouseOn,
              'translate-x-96': !isMouseOn,
            })}
          >
            Search
          </span>
        </div>
      </span>
    </NavLink>
  );
};
