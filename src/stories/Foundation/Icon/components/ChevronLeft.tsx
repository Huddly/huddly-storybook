import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const ChevronLeft = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'ChevronLeft icon'}</title>
      <path
        d='M8.35355 12.3536L7.64645 13.0607L8.35355 12.3536ZM15.2929 3.29289L7.64645 10.9393L9.06066 12.3536L16.7071 4.70711L15.2929 3.29289ZM7.64645 13.0607L15.2929 20.7071L16.7071 19.2929L9.06066 11.6464L7.64645 13.0607ZM7.64645 10.9393C7.06066 11.5251 7.06066 12.4749 7.64645 13.0607L9.06066 11.6464C9.25592 11.8417 9.25592 12.1583 9.06066 12.3536L7.64645 10.9393Z'
        fill={color}
      />
    </svg>
  );
};
