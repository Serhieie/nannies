import { LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({ label }) => {
  return (
    <div className="inline-block rounded-[30px] bg-skin-background-label px-4 py-2">
      <span className="text-skin-secondary xs:text-sm sm:text-base">
        {label.title} <span className="text-skin-base">{label.value}</span>
      </span>
    </div>
  );
};
