import { useMedia, useNanniesState, useUserState } from '@/hooks';
import clsx from 'clsx';
import { ImCheckmark } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

export const TotalNannies: React.FC = () => {
  const { total } = useNanniesState();
  const { isLoggedIn } = useUserState();
  const { isMobile, isHeightLow } = useMedia();
  return (
    <NavLink
      to={'/nannies'}
      className={clsx(
        'h-[100px] w-[244px] cursor-pointer bg-skin-background-white md:h-[118px] md:w-[284px]',
        'absolute flex gap-4 transition-all duration-300',
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
          'flex items-center justify-center rounded-[13px] bg-skin-background',
          'h-[54px] w-[54px] p-3 text-skin-inverted'
        )}
      >
        <ImCheckmark />
      </span>
      <div className="flex flex-col gap-[6px]">
        <span className="font-normal text-skin-secondary">
          Experienced nannies
        </span>
        <span className="text-2xl font-semibold text-skin-base">{total}</span>
      </div>
    </NavLink>
  );
};
