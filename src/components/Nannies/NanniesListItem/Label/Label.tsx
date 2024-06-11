import { LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({ label }) => {
  return (
    <div className="bg-skin-background-label inline-block rounded-[30px] px-4 py-2">
      <span className="text-skin-secondary">
        {label.title} <span className="text-skin-base">{label.value}</span>
      </span>
    </div>
  );
};
