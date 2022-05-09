import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const ArrowRight = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'ArrowRight icon'}</title>
      <path
        d='M19.6464 12.3536L18.9393 11.6464L19.6464 12.3536ZM12.7071 20.7071L20.3536 13.0607L18.9393 11.6464L11.2929 19.2929L12.7071 20.7071ZM20.3536 10.9393L12.7071 3.29289L11.2929 4.70711L18.9393 12.3536L20.3536 10.9393ZM19 11L3 11L3 13L19 13L19 11ZM20.3536 13.0607C20.9393 12.4749 20.9393 11.5251 20.3536 10.9393L18.9393 12.3536C18.7441 12.1583 18.7441 11.8417 18.9393 11.6464L20.3536 13.0607Z'
        fill={color}
      />
    </svg>
  );
};
