import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const ChevronDown = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'ChevronDown icon'}</title>
      <path
        d='M12.3536 15.6464L13.0607 16.3536L12.3536 15.6464ZM3.29289 8.70711L10.9393 16.3536L12.3536 14.9393L4.70711 7.29289L3.29289 8.70711ZM13.0607 16.3536L20.7071 8.70711L19.2929 7.2929L11.6464 14.9393L13.0607 16.3536ZM10.9393 16.3536C11.5251 16.9393 12.4749 16.9393 13.0607 16.3536L11.6464 14.9393C11.8417 14.7441 12.1583 14.7441 12.3536 14.9393L10.9393 16.3536Z'
        fill={color}
      />
    </svg>
  );
};
