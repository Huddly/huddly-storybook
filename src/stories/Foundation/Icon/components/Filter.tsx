import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Filter = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Filter icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5ZM5.17071 4H2V6H5.17071C5.58254 7.16519 6.69378 8 8 8C9.30622 8 10.4175 7.16519 10.8293 6L22 6V4L10.8293 4C10.4175 2.83481 9.30622 2 8 2C6.69378 2 5.58254 2.83481 5.17071 4ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12ZM22 12C22 13.6569 20.6569 15 19 15C17.6938 15 16.5825 14.1652 16.1707 13H2V11H16.1707C16.5825 9.83481 17.6938 9 19 9C20.6569 9 22 10.3431 22 12ZM13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19ZM14.8293 20C14.4175 21.1652 13.3062 22 12 22C10.6938 22 9.58254 21.1652 9.17071 20H2V18H9.17071C9.58254 16.8348 10.6938 16 12 16C13.3062 16 14.4175 16.8348 14.8293 18H22V20H14.8293Z'
        fill={color}
      />
    </svg>
  );
};