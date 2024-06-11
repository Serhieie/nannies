import { Label } from '../Label/Label.types';

interface AdditionalInfoLabelType extends Label {
  icon: string;
}

export interface AdditionalInfoProps {
  labels: AdditionalInfoLabelType[];
}
