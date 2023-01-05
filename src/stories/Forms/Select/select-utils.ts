import React from 'react';
import rem from '../../../shared/pxToRem';
import { Option } from './Option';
import innerText from 'react-innertext';

export const allChildrenAreOption = (children: React.ReactNode) => {
  return React.Children.toArray(children).every((child) => {
    if (!React.isValidElement(child)) return false;
    return child.type === Option;
  });
};

export const getSelectListHeight = (
  showMaxItems: number,
  selectListRef: React.RefObject<HTMLUListElement>
): number => {
  const selectList = selectListRef.current;
  const selectListChildren = selectList?.children;
  if (!selectListChildren) return 0;
  // get height of the first n children of the select list, and get its total height.
  const selectListHeight = Array.from(selectListChildren)
    .slice(0, showMaxItems)
    .reduce((acc, curr) => acc + curr.getBoundingClientRect().height, 0);
  const selectListBorderWidth = parseInt(getComputedStyle(selectList).borderTopWidth, 10) * 2;
  return selectListHeight + selectListBorderWidth;
};

export const handleSelectHoverBackground = (
  selectListRef: React.RefObject<HTMLUListElement>,
  selectListHoverBackgroundRef: React.RefObject<HTMLSpanElement>
) => {
  const selectList = selectListRef.current;
  const selectListChildren = selectListRef.current?.children;
  const bgEl = selectListHoverBackgroundRef.current;
  if (!selectListChildren || !bgEl) return;

  const parentRect = selectList.getBoundingClientRect();
  const parentRectBorder = parseInt(getComputedStyle(selectList).borderTopWidth, 10);

  const moveHoverBackground = (event: FocusEvent | MouseEvent) => {
    const option = event.target as HTMLElement;
    // Check if option is a valid option
    if (!option.hasAttribute('role') || option.getAttribute('role') !== 'option') return;
    const rect = option.getBoundingClientRect();
    const separatorLineWidth = parseInt(getComputedStyle(option).borderBottomWidth, 10);
    // Apply styles to the hover background
    bgEl.style.opacity = '1';
    bgEl.style.height = rem(rect.height + separatorLineWidth);
    bgEl.style.transform = `translate3d(0, ${rem(rect.y - parentRect.y - parentRectBorder)}, 0)`;
  };

  const hideHoverBackground = () => {
    bgEl.style.opacity = '0';
  };

  Array.from(selectListChildren).forEach((child) => {
    child.addEventListener('focus', moveHoverBackground);
    child.addEventListener('mouseover', moveHoverBackground);
  });

  selectList.addEventListener('mouseleave', hideHoverBackground);

  return () => {
    Array.from(selectListChildren).forEach((child) => {
      child.removeEventListener('focus', moveHoverBackground);
      child.removeEventListener('mouseover', moveHoverBackground);
    });
    selectList.removeEventListener('mouseleave', hideHoverBackground);
  };
};

export const filterChildrenByQuery = (
  children: React.ReactNode,
  query: string
): React.ReactNode => {
  return React.Children.toArray(children).filter((child: React.ReactElement) => {
    const childText = innerText(child?.props?.children);
    const childValue = child?.props?.value.toString();
    return childText.toLowerCase().includes(query.toLowerCase()) || childValue.includes(query);
  });
};

export const getSelectedContentHTML = (children: React.ReactNode, selected: string[]) => {
  if (!selected) return null;

  // Filter the children to only include the selected options
  const selectedItems = React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child)) return false;
    return selected.includes(child.props.value.toString());
  });

  if (!selectedItems.length) return null;

  // Map the selected items to their children
  const selectedChildren = selectedItems.map((item) => {
    if (!React.isValidElement(item)) return null;
    return item.props.children;
  });

  // Create a separator to be used between selected children
  const separator = React.createElement('span', { style: { marginLeft: rem(-8) } }, ', ');

  // Wrap each selected child in a span, and add a comma separator between each item
  return selectedChildren.reduce((acc, curr, i) => {
    if (typeof curr === 'string') {
      curr = React.createElement('span', { key: i }, curr);
    }
    return i === 0 ? [curr] : [...acc, separator, curr];
  }, [] as React.ReactNode[]);
};
