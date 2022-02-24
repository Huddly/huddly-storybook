import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* Your styles here */
`;

export interface IconProps {
  className?: string;
  icon: any;
  size: any;
  color: any;
}

/**
 * Icon component
 */
export const Icon = ({ className }: IconProps) => {
  return <Wrapper className={className}>Icon</Wrapper>;
};
