import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Check = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Check icon'}</title>
      <path
        d='M9.14645 16.1464L8.43934 16.8536L9.14645 16.1464ZM10.5607 16.8536L21.7071 5.70711L20.2929 4.29289L9.14645 15.4393L10.5607 16.8536ZM9.85355 15.4393L3.70711 9.29289L2.29289 10.7071L8.43934 16.8536L9.85355 15.4393ZM9.14645 15.4393C9.34171 15.2441 9.65829 15.2441 9.85355 15.4393L8.43934 16.8536C9.02513 17.4393 9.97487 17.4393 10.5607 16.8536L9.14645 15.4393Z'
        fill={color}
      />
    </svg>
  );
};
