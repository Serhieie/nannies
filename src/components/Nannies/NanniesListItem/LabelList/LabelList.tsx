import { nanoid } from '@reduxjs/toolkit';
import { Label } from '../Label/Label';
import { LabelListProps } from './LabelList.types';

export const LabelList: React.FC<LabelListProps> = ({ labels }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <Label key={nanoid()} label={label} />
      ))}
    </ul>
  );
};
