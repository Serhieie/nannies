import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const NoFavorites: React.FC = () => {
  return (
    <div className="flex h-[80dvh] w-full items-center justify-center xs:px-2 sm:px-4">
      <div
        className={clsx(
          'flex max-w-[700px] flex-col gap-6 rounded-[30px] border',
          'border-skin-primary border-opacity-40 p-12 text-center'
        )}
      >
        <h2>No favorites nannies yet?</h2>
        <p>
          Add nannies to your favorites list, and find the perfect match for
          your family. Go back to the nannies page to choose the one that best
          suits your needs.
        </p>
        <NavLink
          className={clsx(
            `mx-auto flex h-[52px] max-w-[240px] items-center justify-center`,
            'rounded-[30px] border border-transparent bg-skin-background px-6',
            'text-skin-inverted transition-all hover:border-skin-primary',
            'duration-300 hover:bg-skin-background-white hover:text-skin-theme'
          )}
          to="/nannies"
        >
          Back to all nannies
        </NavLink>
      </div>
    </div>
  );
};
