import React from 'react';
import styled from 'styled-components';
import { Text } from '../../Foundation/Text';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: var(--spacing-16);
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: var(--spacing-8);
  font-weight: bold;
  font-size: var(--font-size-14);
  line-height: 1;
`;

const OptionalIndicator = styled(Text)`
  line-height: 1;
`;

const HelpLink = styled.a`
  margin-bottom: var(--spacing-8);
  color: var(--color-lavender);
  font-size: var(--font-size-12);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export interface LabelProps {
  children: React.ReactNode;
  className?: string;
  helpLabel?: string;
  helpLink?: string;
  htmlFor?: string;
  id?: string;
  isRequired?: boolean;
}

/**
 * Label component
 */
export const Label = ({
  children,
  className,
  helpLabel,
  helpLink,
  htmlFor,
  id,
  isRequired,
}: LabelProps) => {
  return (
    <Wrapper className={className}>
      <StyledLabel htmlFor={htmlFor || id}>
        {children}{' '}
        {isRequired === false && (
          <OptionalIndicator type='span' size='12'>
            (optional)
          </OptionalIndicator>
        )}
      </StyledLabel>

      {helpLink && helpLabel && (
        <HelpLink href={helpLink} target='_blank' rel='noopener noreferrer'>
          {helpLabel}
        </HelpLink>
      )}
    </Wrapper>
  );
};
