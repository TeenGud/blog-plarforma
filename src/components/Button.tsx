import { MouseEventHandler } from 'react';

interface ButtonInterface {
  classes?: string;
  text: string;
  w?: number;
  h?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  number?: string;
}
export const Button = ({ classes, text, w, h, onClick, type, number }: ButtonInterface) => {
  return (
    <button
      data-key={number}
      type={type ? type : 'button'}
      onClick={onClick}
      className={`${classes} px-2 h-[${h}px] hover:text-purple-400 transition-colors border-2 rounded w-[${w}px]`}
    >
      {text}
    </button>
  );
};
