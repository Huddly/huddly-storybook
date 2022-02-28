import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* Your styles here */
`;

export interface HelpProps {
  className?: string;
}

/**
 * Help component
 */
export const Help = ({ className }: HelpProps) => {
  return <Wrapper className={className}>Help</Wrapper>;
};
