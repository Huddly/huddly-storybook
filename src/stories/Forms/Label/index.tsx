import React from 'react';
import styled from 'styled-components';
import { Text } from '../../Foundation/Text';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: var(--spacing-16);
`;

const StyledLabel = styled.label<{ indentation?: boolean }>`
  padding-left: ${(p) => (p.indentation ? 'var(--spacing-16)' : 0)};

  display: block;
  margin-bottom: var(--spacing-8);
  font-weight: bold;
  font-size: var(--font-size-14);
  line-height: 1;

  a {
    color: var(--color-lavender);
  }
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
  indentation?: boolean;
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
  indentation,
}: LabelProps) => {
  return (
    <Wrapper className={className}>
      <StyledLabel htmlFor={htmlFor || id} indentation={indentation}>
        {children}{' '}
        {!isRequired && (
          <Text type='span' size='12'>
            (optional)
          </Text>
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
