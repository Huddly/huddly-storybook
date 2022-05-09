import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const ChevronUp = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'ChevronUp icon'}</title>
      <path
        d='M11.6464 8.35355L10.9393 7.64645L11.6464 8.35355ZM20.7071 15.2929L13.0607 7.64645L11.6464 9.06066L19.2929 16.7071L20.7071 15.2929ZM10.9393 7.64645L3.29289 15.2929L4.70711 16.7071L12.3536 9.06066L10.9393 7.64645ZM13.0607 7.64645C12.4749 7.06066 11.5251 7.06066 10.9393 7.64645L12.3536 9.06066C12.1583 9.25592 11.8417 9.25592 11.6464 9.06066L13.0607 7.64645Z'
        fill={color}
      />
    </svg>
  );
};
