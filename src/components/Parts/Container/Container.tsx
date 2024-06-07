import { ContainerProps } from './Container.types';

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`mx-auto w-full sm:max-w-[355px] md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1184px] ${className} `}
    >
      {children}
    </div>
  );
};
