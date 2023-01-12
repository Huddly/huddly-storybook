import React from 'react';
import styled from 'styled-components';
import innerText from 'react-innertext';
import { Label } from '../../../index';

const Wrapper = styled.fieldset`
  display: block;
  min-width: 0;
  margin: 0 0 var(--spacing-32) 0;
  padding: 0.01em 0 0 0;
  border: 0;

  legend {
    display: table;
    margin-bottom: var(--spacing-16);
    padding: 0;
    font-weight: bold;
    font-size: var(--font-size-20);
  }
`;

interface FieldsetProps {
  ariaDescribedBy?: string;
  ariaErrorMessage?: string;
  children: React.ReactNode;
  className?: string;
  hasError?: boolean;
  legend?: string | null;
}

/**
 * Extracts the inner text of the first Label component found in children
 * @param children
 */
const extractLegendFromChildren = (children: React.ReactNode): string | null => {
  if (!Array.isArray(children)) return null;
  const label = children.find((child) => child.type === Label);
  return label ? innerText(label) : null;
};

/**
 * Filters out the first Label component from children
 * @param children
 */
const filterOutLabelFromChildren = (children: React.ReactNode): React.ReactNode => {
  if (!Array.isArray(children)) return children;
  return children.filter((child) => child.type !== Label);
};

/**
 * Fieldset component
 */
export const Fieldset = ({
  ariaDescribedBy,
  ariaErrorMessage,
  children,
  className,
  hasError,
  legend,
}: FieldsetProps) => {
  const extractedLegend = legend ?? extractLegendFromChildren(children);
  const filteredChildren = filterOutLabelFromChildren(children);

  return (
    <Wrapper
      className={className}
      aria-errormessage={ariaErrorMessage}
      aria-invalid={hasError}
      aria-labelledby={ariaDescribedBy}
    >
      {extractedLegend && <legend>{extractedLegend}</legend>}
      {filteredChildren}
    </Wrapper>
  );
};
