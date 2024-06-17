import clsx from 'clsx';

export const AdditionalInfoSkeleton: React.FC = () => {
  const info = [1, 2, 3];
  return (
    <ul className="flex flex-wrap gap-1">
      {info.map((_, index) => (
        <li key={index} className="flex gap-1 xs:flex-col md:flex-row">
          <span
            className={clsx(`h-6 rounded-xl bg-skin-grey opacity-20`, {
              'w-20': index === 0,
              'w-16': index === 1,
              'w-28': index === 2,
            })}
          ></span>
        </li>
      ))}
    </ul>
  );
};
