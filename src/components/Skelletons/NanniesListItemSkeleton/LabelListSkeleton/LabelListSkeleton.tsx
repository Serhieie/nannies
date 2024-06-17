import clsx from 'clsx';

export const LabelListSkeleton: React.FC = () => {
  const labels = [1, 2, 3, 4, 5];
  return (
    <ul className="flex flex-wrap gap-2">
      {labels.map((_, index) => (
        <div
          key={index}
          className={clsx(
            'inline-block min-h-[40px] min-w-[140px] rounded-[30px] bg-skin-background-label px-4 py-2',
            {
              'w-[370px]': index === 1,
              'w-[300px]': index === 2,
              'w-[390px]': index === 3,
            }
          )}
        ></div>
      ))}
    </ul>
  );
};
