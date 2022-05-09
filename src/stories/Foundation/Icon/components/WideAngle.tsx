import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const WideAngle = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'WideAngle icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 12.523V4.47703L7 5.67703V11.323L4 12.523ZM9 11H15V5.99999H9V11ZM17 5.67703V11.323L20 12.523V4.47703L17 5.67703ZM15.8074 13H8.19258L4.05709 14.6542C3.07179 15.0483 2 14.3227 2 13.2615V3.73851C2 2.67731 3.07179 1.95168 4.05709 2.34579L8.19258 3.99999H15.8074L19.9429 2.34579C20.9282 1.95168 22 2.67731 22 3.73851V13.2615C22 14.3227 20.9282 15.0483 19.9429 14.6542L15.8074 13ZM20.7071 18.2929L17.7071 15.2929L16.2929 16.7071L17.5858 18H6.41421L7.70711 16.7071L6.29289 15.2929L3.29289 18.2929L2.58579 19L3.29289 19.7071L6.29289 22.7071L7.70711 21.2929L6.41421 20H17.5858L16.2929 21.2929L17.7071 22.7071L20.7071 19.7071L21.4142 19L20.7071 18.2929Z'
        fill={color}
      />
    </svg>
  );
};
