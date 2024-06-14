import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const NoPage: React.FC = () => {
  return (
    <div
      className={clsx(
        'mt-0 flex h-[100dvh] w-full select-none flex-col',
        'items-center justify-center bg-skin-background'
      )}
    >
      <div
        className={clsx(
          'relative flex h-[400px] w-[600px] flex-col items-center',
          'justify-center rounded-[60px] bg-transparent bg-opacity-20',
          'pt-4 backdrop-blur-sm backdrop-filter'
        )}
      >
        <h1
          className={clsx(
            'font-montserrat mt-0 select-none p-0 text-center text-[100px]',
            'font-extrabold text-skin-inverted md:text-[120px]'
          )}
        >
          404
        </h1>
        <p className="font-pixel mt-8 px-2 text-center text-lg text-skin-inverted">
          Page not found
        </p>
        <NavLink
          className={clsx(
            'text-skin-inverted-red rounded-lg border border-white hover:border',
            'bg-skin-muted-button px-4 py-2 text-center transition-colors',
            'mt-4 duration-300 hover:bg-skin-background hover:text-skin-inverted'
          )}
          to="/"
        >
          Back to home page
        </NavLink>
      </div>
    </div>
  );
};
