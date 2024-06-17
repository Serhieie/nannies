export const CardBottomPartSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="h-5 w-full rounded-md bg-skin-grey opacity-10"></div>
      <div className="h-5 w-[40%] rounded-md bg-skin-grey opacity-10"></div>

      <div className="mt-[8px] text-start text-skin-secondary underline">
        Read More
      </div>
    </div>
  );
};
