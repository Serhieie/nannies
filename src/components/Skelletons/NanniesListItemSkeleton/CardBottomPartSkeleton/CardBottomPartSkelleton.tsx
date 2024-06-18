export const CardBottomPartSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="h-4 w-full rounded-md bg-skin-grey opacity-10"></div>
      <div className="h-4 w-[40%] rounded-md bg-skin-grey opacity-10"></div>

      <div className="mt-[12px] text-start text-skin-secondary underline">
        Read More
      </div>
    </div>
  );
};
