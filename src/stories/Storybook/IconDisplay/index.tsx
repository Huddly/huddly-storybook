import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';
import { Icon } from '../../Foundation/Icon';

interface WrapperProps {
  darkBg: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${rem(90)};
  padding: var(--spacing-16);
  border-radius: var(--border-radius);
  color: var(--color-grayText);
  cursor: pointer;
  row-gap: var(--spacing-16);
  aspect-ratio: 1;

  &:hover,
  &:focus {
    background-color: var(--color-grey35);
  }

  ${({ darkBg }) =>
    darkBg &&
    `background-color: var(--color-grey35);
    color: var(--color-white);
    
    &:hover, &:focus {
      background-color: var(--color-black);
    }`};
`;

const Label = styled.div`
  width: 100%;
  font-size: var(--font-size-12);
  text-align: center;
  // Truncate text to fit in the box
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface IconDisplayProps {
  label: string;
  children: React.ReactNode;
  darkBg?: boolean;
}

const generateIconJsx = (child: any): string => {
  if (typeof child !== 'object') return null;
  const displayName = child.type.displayName || 'Icon';
  const propsAttributes = Object.keys(child.props)
    .filter((prop) => child.props[prop] !== undefined)
    .map((prop) => `${prop}="${child.props[prop]}"`);

  return `<${displayName} ${propsAttributes.join(' ')} />`;
};

const copyStringToClipboard = (str: string): void => {
  const tmp = document.createElement('textarea');
  tmp.value = str;
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
};

const copyIconJsx = (children: React.ReactNode): void => {
  const iconChild = Array.isArray(children)
    ? children.find((child) => child.type === Icon)
    : children;

  if (!iconChild) {
    throw new Error('IconDisplay expects an icon');
  }

  const jsx = generateIconJsx(iconChild);
  copyStringToClipboard(jsx);
  alert(`Copied to clipboard:\n${jsx}`); // Replace this with a notification component when we have one.
};

/**
 * This component is used to display an icon in storybook.
 */
export const IconDisplay = ({ children, darkBg, label }: IconDisplayProps) => {
  return (
    <Wrapper
      darkBg={darkBg}
      onClick={() => copyIconJsx(children)}
      title={label}
    >
      <div>{children}</div>
      <Label>{label}</Label>
    </Wrapper>
  );
};
