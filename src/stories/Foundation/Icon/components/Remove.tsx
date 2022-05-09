import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Remove = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Remove icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 13.4142L8.46492 16.9493L7.05071 15.5351L10.5858 12L7.0498 8.46401L8.46401 7.0498L12 10.5858L15.536 7.0498L16.9502 8.46401L13.4142 12L16.9493 15.5351L15.5351 16.9493L12 13.4142Z'
        fill={color}
      />
    </svg>
  );
};
