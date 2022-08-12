import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';

const Wrapper = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  padding: ${rem(13)} var(--spacing-16);
  outline: 0;
  column-gap: var(--spacing-8);
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: ${rem(1)} solid var(--color-grey91);
  }

  figure,
  img,
  svg {
    width: 100%;
    max-width: var(--spacing-32);
    max-height: var(--spacing-32);
    object-fit: contain;
    flex-shrink: 0;
  }

  & > *:first-child:is(figure, img, svg) {
    margin-left: ${rem(-4)};
  }

  & > * {
    pointer-events: none;
  }
`;

export interface OptionProps {
  children: React.ReactNode;
  value: string;
}

/**
 * Option component
 */
export const Option = React.forwardRef(
  (props: OptionProps, ref: React.RefObject<HTMLLIElement>) => {
    const { children, value } = props;

    return (
      <Wrapper ref={ref} role='option' tabIndex={0} data-value={value}>
        {children}
      </Wrapper>
    );
  }
);
