import { useMedia, useNanniesState } from '@/hooks';
import clsx from 'clsx';
import { ImCheckmark } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

export const TotalNannies: React.FC = () => {
  const { total } = useNanniesState();
  const { isMobile } = useMedia();
  return (
    <NavLink
      to={'/nannies'}
      className={clsx(
        'h-[118px] w-[284px] cursor-pointer bg-skin-background-white',
        'absolute flex gap-4',
        'items-center justify-center rounded-[20px]',
        {
          'left-1/2 top-32 -translate-x-1/2': isMobile,
          'bottom-[50px] right-[50px]': !isMobile,
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
