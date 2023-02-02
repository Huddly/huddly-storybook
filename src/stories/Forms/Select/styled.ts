import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { ChevronDown } from '@huddly/frokost/havre';

export const Wrapper = styled.div`
  position: relative;

  figure,
  img,
  svg {
    width: 100%;
    max-width: var(--spacing-32);
    max-height: var(--spacing-32);
    object-fit: contain;
  }
`;

export const SelectButton = styled.button<{
  isOpen: boolean;
  hasLabel: boolean;
  hasError: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--input-height);
  padding-inline: var(--spacing-16);
  border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
  border-radius: var(--input-radius);
  column-gap: var(--spacing-8);
  color: ${(p) => (p.hasLabel ? 'var(--color-grey15)' : 'var(--color-grey55)')};
  font-size: var(--input-font-size);
  cursor: pointer;
  background-color: ${(p) => (p.isOpen ? 'var(--color-grey96)' : 'var(--color-grey99)')};

  &:hover {
    background-color: var(--color-grey96);
  }

  &:focus,
  &:focus-within {
    border: var(--border-active);
    outline: 0;
    background-color: var(--color-grey96);
  }
`;

/**
 * The selected content inside the SelectButton.
 */
export const SelectedContent = styled.span<{ hasNestedContent: boolean }>`
  display: block;

  ${(p) =>
    p.hasNestedContent &&
    `
      display: flex;
      align-items: center;
      column-gap: var(--spacing-8);

    `}

  &,
    & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const RotatingChevron = styled(ChevronDown)<{ rotate: boolean }>`
  transition: 0.15s ease-in-out;
  ${(p) => (p.rotate ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);')}
  margin-right: ${rem(-8)};

  path {
    fill: var(--color-grey35);
  }
`;

export const FilterSearch = styled.input`
  all: unset;
  width: 100%;
  height: var(--spacing-48);
  color: var(--color-grey15);
  text-align: left;
`;

export const SelectListWrapper = styled.div<{
  height: number;
  isOpen: boolean;
  placeOver: boolean;
}>`
  ${(p) => p.placeOver && 'top: 0; transform: translateY(calc(-100% - var(--spacing-4)));'}
  ${(p) => !p.placeOver && 'margin-top: var(--spacing-4);'}
  height: ${(p) => (p.isOpen ? rem(p.height) : rem(0))};
  overflow: hidden;
  position: absolute;
  transition: height 150ms ease-out;
  width: 100%;
  will-change: height;
  z-index: 10;
  box-shadow: var(--drop-shadow-significant);
`;

export const SelectList = styled.ul<{ height: number }>`
  height: ${(p) => rem(p.height)};
  margin: 0;
  padding: 0;
  border-radius: var(--input-radius);
  overflow-y: auto;
  list-style: none;
  border: var(--border-active);

  &:focus,
  &:focus-visible {
    border: var(--border-active);
  }

  &:after {
    z-index: -2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: var(--color-grey99);
  }
`;

/**
 * Shows up then there are no options to select.
 */
export const SelectListNoResults = styled.div`
  padding: ${rem(12)};
  color: var(--color-grey45);
  pointer-events: none;
  align-items: center;
  display: flex;
  column-gap: var(--spacing-8);

  path {
    fill: var(--color-grey35);
  }
`;

/**
 * Used to animate the hover background color of the select list items.
 * It moves with the mouse cursor/focus.
 */
export const SelectListHoverBackground = styled.span`
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  background-color: var(--color-whisperBlue);
  transition: height 100ms ease-in-out, opacity 120ms ease-in-out 70ms,
    transform 120ms ease-out 12ms;
  will-change: height, opacity, transform;
`;
