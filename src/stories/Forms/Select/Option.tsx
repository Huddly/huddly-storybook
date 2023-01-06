import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { Checkbox } from '../Checkbox';

const Wrapper = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  padding: ${rem(12)} var(--spacing-16);
  outline: 0;
  column-gap: var(--spacing-8);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-size: var(--input-font-size);

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
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: var(--spacing-4);
`;

export interface OptionProps {
  children: React.ReactNode;
  value: string;
  /**
   * This prop gets passed down from the Select component automatically.
   */
  selected?: boolean;
  /**
   * This prop gets passed down from the Select component automatically.
   */
  hasCheckbox?: boolean;
  /**
   * This prop gets passed down from the Select component automatically.
   */
  onChange?: (value: string) => void;
  /**
   * This prop gets passed down from the Select component automatically.
   */
  isFocusable?: boolean;
}

/**
 * Option component
 */
export const Option = React.forwardRef(
  (props: OptionProps, ref: React.RefObject<HTMLLIElement>) => {
    const { children, value, selected, hasCheckbox, onChange, isFocusable } = props;

    return (
      <Wrapper
        aria-selected={selected}
        onClick={() => onChange?.(value)}
        ref={ref}
        role='option'
        tabIndex={isFocusable ? 0 : -1}
      >
        {hasCheckbox && (
          <StyledCheckbox value={selected} onChange={() => onChange?.(value)} tabIndex={-1} />
        )}
        {children}
      </Wrapper>
    );
  }
);
