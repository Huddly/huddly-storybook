import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const ArrowLeft = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'ArrowLeft icon'}</title>
      <path
        d='M4.35355 11.6464L5.06066 12.3536L4.35355 11.6464ZM11.2929 3.29289L3.64645 10.9393L5.06066 12.3536L12.7071 4.70711L11.2929 3.29289ZM3.64645 13.0607L11.2929 20.7071L12.7071 19.2929L5.06066 11.6464L3.64645 13.0607ZM5 13L21 13L21 11L5 11L5 13ZM3.64645 10.9393C3.06066 11.5251 3.06066 12.4749 3.64645 13.0607L5.06066 11.6464C5.25592 11.8417 5.25592 12.1583 5.06066 12.3536L3.64645 10.9393Z'
        fill={color}
      />
    </svg>
  );
};
