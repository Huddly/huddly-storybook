import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Profile = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Profile icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.0289 19.2447 15.8814 18 17.2916V16C18 14.3431 16.6569 13 15 13H9C7.34315 13 6 14.3431 6 16V17.2916C4.75527 15.8814 4 14.0289 4 12ZM8 18.9297C9.17669 19.6104 10.5429 20 12 20C13.4571 20 14.8233 19.6104 16 18.9297V16C16 15.4477 15.5523 15 15 15H9C8.44772 15 8 15.4477 8 16V18.9297ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 7C11.1716 7 10.5 7.67157 10.5 8.5C10.5 9.32843 11.1716 10 12 10C12.8284 10 13.5 9.32843 13.5 8.5C13.5 7.67157 12.8284 7 12 7ZM8.5 8.5C8.5 6.567 10.067 5 12 5C13.933 5 15.5 6.567 15.5 8.5C15.5 10.433 13.933 12 12 12C10.067 12 8.5 10.433 8.5 8.5Z'
        fill={color}
      />
    </svg>
  );
};
