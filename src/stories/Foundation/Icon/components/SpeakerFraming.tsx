import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const SpeakerFraming = ({
  className,
  color = '#262626',
  title,
}: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'SpeakerFraming icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 3C1.89543 3 1 3.89543 1 5V8H3V5H6V3H3ZM3 19V16H1V19C1 20.1046 1.89543 21 3 21H5H6H7V17C7 16.4477 7.44772 16 8 16H13C13.5523 16 14 16.4477 14 17V21H16V17C16 15.3431 14.6569 14 13 14H8C6.34315 14 5 15.3431 5 17V19H3ZM21 16V19H18V21H21C22.1046 21 23 20.1046 23 19V16H21ZM18.5 3C16.567 3 15 4.567 15 6.5V10V11H16H19.5C21.433 11 23 9.433 23 7.5V6.5C23 4.567 21.433 3 19.5 3H18.5ZM17 6.5C17 5.67157 17.6716 5 18.5 5H19.5C20.3284 5 21 5.67157 21 6.5V7.5C21 8.32843 20.3284 9 19.5 9H17V6.5ZM9 9.5C9 8.67157 9.67157 8 10.5 8C11.3284 8 12 8.67157 12 9.5C12 10.3284 11.3284 11 10.5 11C9.67157 11 9 10.3284 9 9.5ZM10.5 6C8.567 6 7 7.567 7 9.5C7 11.433 8.567 13 10.5 13C12.433 13 14 11.433 14 9.5C14 7.567 12.433 6 10.5 6Z'
        fill={color}
      />
    </svg>
  );
};
