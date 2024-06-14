import clsx from 'clsx';
import { ContainerProps } from './Container.types';

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={clsx(
        `mx-auto w-full xs:min-w-[300px] xs:px-2 sm:max-w-[700px] sm:px-4`,
        `md:max-w-[980px] lg:max-w-[1040px] lg:px-0 xl:max-w-[1184px] ${className}`
      )}
    >
      {children}
    </div>
  );
};
