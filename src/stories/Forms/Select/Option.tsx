import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { Checkbox } from '../Checkbox';

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

  & > *:first-child:is(figure, img, svg, .checkbox) {
    margin-left: ${rem(-4)};
  }

  .checkbox {
    margin-right: var(--spacing-4);
  }
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
  onClick?: (value: string) => void;
}

/**
 * Option component
 */
export const Option = React.forwardRef(
  (props: OptionProps, ref: React.RefObject<HTMLLIElement>) => {
    const { children, value, selected, hasCheckbox, onClick } = props;

    return (
      <Wrapper ref={ref} role='option' tabIndex={0} onClick={() => onClick?.(value)}>
        {hasCheckbox && <Checkbox className='checkbox' checked={selected} tabIndex={-1} />}
        {children}
      </Wrapper>
    );
  }
);
