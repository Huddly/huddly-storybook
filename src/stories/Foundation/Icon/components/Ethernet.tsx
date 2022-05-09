import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Ethernet = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Ethernet icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V19H4V5ZM8.4 11.25H10.4V9.25V9H13.6V9.25V11.25H15.6H16V15H8V11.25H8.4ZM6 17V15V11.25V9.25H6.4H8H8.4V9V7.25V7H10.4H13.6H15.6V7.25V9V9.25H16H17.6H18V11.25V15V17H16H8H6Z'
        fill={color}
      />
    </svg>
  );
};
