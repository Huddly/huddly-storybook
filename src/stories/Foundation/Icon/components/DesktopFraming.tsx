import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const DesktopFraming = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'DesktopFraming icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1 5C1 3.89543 1.89543 3 3 3H7V5H3V9H1V5ZM21 5H17V3H21C22.1046 3 23 3.89543 23 5V9H21V5ZM3 15V19H6V17C6 15.3431 7.34315 14 9 14H15C16.6569 14 18 15.3431 18 17V19H21V15H23V19C23 20.1046 22.1046 21 21 21H18H16V17C16 16.4477 15.5523 16 15 16H9C8.44772 16 8 16.4477 8 17V21H6H3C1.89543 21 1 20.1046 1 19V15H3ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5C13.5 10.3284 12.8284 11 12 11C11.1716 11 10.5 10.3284 10.5 9.5ZM12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6Z'
        fill={color}
      />
    </svg>
  );
};
