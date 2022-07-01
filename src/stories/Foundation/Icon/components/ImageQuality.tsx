import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const ImageQuality = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'ImageQuality icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1 6C1 4.89543 1.89543 4 3 4H18C19.1046 4 20 4.89543 20 6V8L22.7575 7.31063C23.3886 7.15285 24 7.63021 24 8.28078V15.7192C24 16.3698 23.3886 16.8472 22.7575 16.6894L20 16V18C20 19.1046 19.1046 20 18 20H3C1.89543 20 1 19.1046 1 18V6ZM20 13.9384V10.0616L22 9.56155V14.4384L20 13.9384ZM18 6V9.28078V14.7192V18H3V6L18 6ZM16 15L12.5 10L10.0566 13.4906L8.5 11L6 15H9H11H16Z'
        fill={color}
      />
    </svg>
  );
};
