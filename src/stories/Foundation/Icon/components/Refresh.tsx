import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Refresh = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Refresh icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.0607 8.2346L16.4463 7.53407L15.9287 9.46593L20.7097 10.747L21.6757 11.0058L21.9345 10.0399L23.2156 5.25882L21.2837 4.74118L20.6733 7.01938C18.9478 4.02095 15.7109 2 12.0002 2C6.47733 2 2.00018 6.47715 2.00018 12C2.00018 17.5228 6.47733 22 12.0002 22C14.9619 22 17.624 20.7111 19.4536 18.6669C20.4405 17.5643 21.187 16.2402 21.6092 14.7773L19.6876 14.2227C19.3506 15.3905 18.7541 16.4496 17.9634 17.3331C16.4971 18.9713 14.3694 20 12.0002 20C7.5819 20 4.00018 16.4183 4.00018 12C4.00018 7.58172 7.5819 4 12.0002 4C15.0557 4 17.7131 5.71323 19.0607 8.2346Z'
        fill={color}
      />
    </svg>
  );
};
