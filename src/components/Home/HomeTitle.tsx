import { HiArrowRight } from 'react-icons/hi';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const HomeTitle: React.FC = () => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleGetStarted = () => {
    console.log('get started');
  };

  return (
    <div
      className={clsx(
        'absolute z-30 mt-6 flex w-full -translate-x-1/2 select-none flex-col',
        'gap-6 rounded-[30px] bg-transparent bg-opacity-50 p-8 text-skin-inverted',
        'backdrop-blur-sm xs:bottom-0 xs:left-1/2 xs:max-w-[600px] md:left-10',
        'md:top-2/4 md:max-w-[320px] md:-translate-y-1/2 md:translate-x-0 md:bg-opacity-0',
        'lg:max-w-[520px]'
      )}
    >
      <h1 className="xs:text-5xl sm:text-6xl md:text-4xl md2:text-6xl xl:text-7xl">
        Make Life Easier for the Family:
      </h1>
      <p className="leading-[107%] xs:text-3xl md:text-xl md2:text-2xl xl:text-3xl">
        Find Babysitters Online for All Occasions
      </p>
      <NavLink
        className={clsx(
          'flex max-w-[230px] items-center gap-4 rounded-[30px] border',
          'border-white border-opacity-40 px-10 py-4 text-xl leading-[120%]'
        )}
        to={'/nannies'}
        onClick={handleGetStarted}
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
