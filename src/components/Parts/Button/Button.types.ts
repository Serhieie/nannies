export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
  text: string;
  primary?: boolean;
}
