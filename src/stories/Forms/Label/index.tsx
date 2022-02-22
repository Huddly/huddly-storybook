import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 400px;
  column-gap: var(--spacing-16);

  label {
    display: block;
    margin-bottom: var(--spacing-8);
    font-weight: bold;
    font-size: var(--font-size-14);
    line-height: 1;

    .required-text {
      font-weight: normal;
      font-size: var(--font-size-12);
    }

    a {
      color: var(--color-lavender);
    }
  }

  .help-link {
    margin-bottom: var(--spacing-8);
    color: var(--color-lavender);
    font-size: var(--font-size-12);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export interface LabelProps {
  children: React.ReactNode;
  id?: string;
  htmlFor?: string;
  isRequired?: boolean;
  helpLink?: string;
  helpLabel?: string;
}

/**
 * Label component
 */
export const Label = ({
  id,
  htmlFor,
  children,
  isRequired,
  helpLink,
  helpLabel,
}: LabelProps) => {
  return (
    <Wrapper>
      <label htmlFor={htmlFor || id}>
        {children}{' '}
        {!isRequired && <span className='required-text'>(optional)</span>}
      </label>

      {helpLink && helpLabel && (
        <a
          href={helpLink}
          className='help-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          {helpLabel}
        </a>
      )}
    </Wrapper>
  );
};

export default Label;
