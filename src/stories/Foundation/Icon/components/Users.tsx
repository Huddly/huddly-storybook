import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Users = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Users icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 5.5C5 4.39543 5.89543 3.5 7 3.5C8.10457 3.5 9 4.39543 9 5.5C9 6.60457 8.10457 7.5 7 7.5C5.89543 7.5 5 6.60457 5 5.5ZM7 1.5C4.79086 1.5 3 3.29086 3 5.5C3 7.70914 4.79086 9.5 7 9.5C9.20914 9.5 11 7.70914 11 5.5C11 3.29086 9.20914 1.5 7 1.5ZM5 11C2.79086 11 1 12.7909 1 15V20C1 21.1046 1.89543 22 3 22H12H21C22.1046 22 23 21.1046 23 20V17C23 14.7909 21.2091 13 19 13H13.4649C12.7733 11.8044 11.4806 11 10 11H5ZM21 20H14V15H19C20.1046 15 21 15.8954 21 17V20ZM3 15C3 13.8954 3.89543 13 5 13H10C11.1046 13 12 13.8954 12 15V20H3V15ZM15 7.5C15 6.39543 15.8954 5.5 17 5.5C18.1046 5.5 19 6.39543 19 7.5C19 8.60457 18.1046 9.5 17 9.5C15.8954 9.5 15 8.60457 15 7.5ZM17 3.5C14.7909 3.5 13 5.29086 13 7.5C13 9.70914 14.7909 11.5 17 11.5C19.2091 11.5 21 9.70914 21 7.5C21 5.29086 19.2091 3.5 17 3.5Z'
        fill={color}
      />
    </svg>
  );
};
