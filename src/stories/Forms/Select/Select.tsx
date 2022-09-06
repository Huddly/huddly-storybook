import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { GlobalInputProps } from '../../../shared/types';
import { useOnClickOutside } from '../../../shared/hooks';
import { Option, OptionProps } from './Option';
import { ChevronDown, Search } from '@huddly/frokost/havre';

const Wrapper = styled.div`
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

const SelectButton = styled.button<{ isOpen: boolean; hasLabel: boolean; hasError: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--spacing-48);
  padding: var(--spacing-16) var(--spacing-8) var(--spacing-16) var(--spacing-16);
  border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
  border-radius: ${rem(3)};
  color: ${(p) => (p.hasLabel ? 'var(--color-grey15)' : 'var(--color-grey55)')};
  cursor: pointer;
  background-color: ${(p) => (p.isOpen ? 'var(--color-grey96)' : 'var(--color-grey99)')};
  column-gap: var(--spacing-8);
  width: 100%;

  &:hover {
    background-color: var(--color-grey96);
  }

  &:focus,
  &:focus-within {
    background-color: var(--color-grey96);
  }

  .chevron-icon {
    transition: 0.15s ease-in-out;
    ${(p) => (p.isOpen ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);')}

    path {
      fill: var(--color-grey35);
    }
  }
`;

/**
 * The selected content inside the SelectButton.
 */
const SelectedContent = styled.span<{ hasNestedContent: boolean }>`
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

const FilterSearch = styled.input`
  all: unset;
  width: 100%;
  height: var(--spacing-48);
  color: var(--color-grey15);
  text-align: left;
`;

const SelectListWrapper = styled.div<{ height: number; isOpen: boolean }>`
  height: ${(p) => (p.isOpen ? rem(p.height) : rem(0))};
  margin: var(--spacing-4) 0 0 0;
  overflow: hidden;
  position: absolute;
  transition: height 150ms ease-out;
  width: 100%;
  will-change: height;
  z-index: 10;
`;

const SelectList = styled.ul<{ height: number }>`
  height: ${(p) => rem(p.height)};
  margin: 0;
  padding: 0;
  border-radius: ${rem(3)};
  overflow-y: auto;
  list-style: none;
  border: var(--border-active);

  &:focus,
  &:focus-within {
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
const SelectListNoResults = styled.div`
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
const SelectListHoverBackground = styled.span`
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

/**
 * Text input used for accissibility purposes.
 * It's hidden from the user but accessible to screen readers.
 */
const HiddenSelectedValueInput = styled.input`
  position: absolute;
  width: ${rem(0)};
  height: ${rem(0)};
  overflow: hidden;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
`;

const getSelectListHeight = (
  showItems: number,
  selectListRef: React.RefObject<HTMLUListElement>
): number => {
  const selectList = selectListRef.current;
  const selectListChildren = selectList?.children;
  if (!selectListChildren) return 0;
  // get height of the first n children of the select list, and get its total height.
  const selectListHeight = Array.from(selectListChildren)
    .slice(0, showItems)
    .reduce((acc, curr) => acc + curr.getBoundingClientRect().height, 0);
  const selectListBorderWidth = parseInt(getComputedStyle(selectList).borderTopWidth, 10) * 2;
  return selectListHeight + selectListBorderWidth;
};

const handleSelectHoverBackground = (
  selectListRef: React.RefObject<HTMLUListElement>,
  selectListHoverBackgroundRef: React.RefObject<HTMLSpanElement>
) => {
  const selectList = selectListRef.current;
  const selectListChildren = selectListRef.current?.children;
  if (!selectListChildren || !selectListHoverBackgroundRef.current) return;

  const parentRect = selectList.getBoundingClientRect();
  const parentRectBorder = parseInt(getComputedStyle(selectList).borderTopWidth, 10);

  const moveHoverBackground = (event: FocusEvent | MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.hasAttribute('role') || target.getAttribute('role') !== 'option') return;
    const node = event.target as HTMLElement;
    const rect = node.getBoundingClientRect();
    const separatorLineWidth = parseInt(getComputedStyle(node).borderBottomWidth, 10);
    selectListHoverBackgroundRef.current.style.opacity = '1';
    selectListHoverBackgroundRef.current.style.height = rem(rect.height + separatorLineWidth);
    selectListHoverBackgroundRef.current.style.transform = `translateY(${rem(
      rect.y - parentRect.y - parentRectBorder
    )})`;
  };

  const hideHoverBackground = () => {
    selectListHoverBackgroundRef.current.style.opacity = '0';
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

const getLabelFromSelectedValues = (
  children: SelectProps['children'],
  selected: string[] | null
) => {
  console.log(selected);
  if (!selected) return null;

  const selectedItems = React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child)) return false;
    return selected.includes(child.props.value.toString());
  }) as React.ReactElement<OptionProps>[] | undefined;

  if (!selectedItems.length) return null;
  return selectedItems
    .map((item) => item.props.children)
    .reduce((acc, curr, index) => {
      // between every selected label, splice a comma into the array
      if (typeof curr === 'string') {
        curr = <span key={index}>{curr}</span>;
      }
      if (index === 0) return [curr];
      return [...[acc], <span style={{ marginLeft: rem(-8) }}>, </span>, curr];
    }, [] as React.ReactNode[]);
};

const validateChildren = (children: SelectProps['children']) => {
  return React.Children.toArray(children).every((child) => {
    if (!React.isValidElement(child)) return false;
    return child.type === Option;
  });
};

const getSelectContentAsString = (node: string | React.ReactNode): string | null => {
  if (!node) return null;
  if (typeof node === 'string') return node;
  return React.Children.map(node, (child) => {
    if (typeof child === 'string') return child;
    if (!React.isValidElement(child)) return;
    const innerChild = child.props.children;
    if (typeof innerChild === 'string' || typeof innerChild === 'number') return innerChild;
  }).join('');
};

const getChildrenByQuery = (
  children: SelectProps['children'],
  query: string
): SelectProps['children'] => {
  return React.Children.toArray(children).filter((child: React.ReactElement<OptionProps>) => {
    if (!React.isValidElement(child)) return true;

    const searchContent = [];
    if (typeof child.props.children === 'string') {
      searchContent.push(child.props.children);
    }
    if (child.props.value) {
      searchContent.push(child.props.value);
    }
    const innerSearchContent = React.Children.map(child.props.children, (subchild) => {
      if (typeof subchild === 'string') return subchild;
      if (!React.isValidElement(subchild)) return;
      if (typeof subchild.props.children !== 'string') return;
      return subchild.props.children;
    });
    searchContent.push(...innerSearchContent);

    const searchContentString = searchContent.join(' ').toLowerCase();
    return searchContentString.indexOf(query.toLowerCase()) !== -1;
  });
};

export interface SelectProps extends GlobalInputProps {
  /**
   * Option components to be rendered.
   */
  children: React.ReactNode;
  multiselect?: boolean;
}

/**
 * Select component
 */
export const Select = React.forwardRef(
  (props: SelectProps, ref: React.RefObject<HTMLInputElement>) => {
    const {
      ariaDescribedBy,
      ariaErrorMessage,
      children,
      className,
      hasError,
      id,
      isRequired,
      multiselect = false,
      name,
      onBlur,
      onChange,
      value,
      ...additionalPhoneInputProps
    } = props;

    if (!validateChildren(children)) {
      throw new Error('Select component: children can only contain Option components.');
    }

    const selectName = name || id;
    const placeholder = '- Select option -';

    const selectWrapperRef = useRef<HTMLDivElement>(null);
    const selectButtonRef = useRef<HTMLButtonElement>(null);
    const selectListRef = useRef<HTMLUListElement>(null);
    const selectListHoverBackgroundRef = useRef<HTMLSpanElement>(null);
    const filterSearchRef = useRef<HTMLInputElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(value);
    const [selectListHeight, setSelectListHeight] = useState(0);
    const [filterSearch, setFilterSearch] = useState('');

    useEffect(() => {
      setSelected(value);
    }, [value]);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        const selectList = selectListRef.current;
        const selectListChildren = selectList?.children as HTMLCollectionOf<HTMLElement>;
        if (!selectListChildren) return;

        const activeElement = document.activeElement as HTMLElement;
        const activeElementIndex = Array.from(selectListChildren).indexOf(activeElement);

        if (['Escape', 'ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
          e.preventDefault();
        }

        switch (e.key) {
          case ' ':
            if (activeElement === selectButtonRef.current && !isOpen) {
              setIsOpen(true);
            }
            if (activeElementIndex !== -1 && multiselect) {
              selectListChildren[activeElementIndex].click();
            }
            break;

          case 'Escape':
            setIsOpen(false);
            selectButtonRef?.current?.focus();
            break;

          case 'ArrowUp':
            if (activeElementIndex === 0 || activeElementIndex === -1) {
              selectList.focus();
            }
            if (activeElementIndex > 0) {
              selectListChildren[activeElementIndex - 1].focus();
            }
            break;

          case 'ArrowDown':
            if (activeElementIndex === selectListChildren.length - 1 || activeElementIndex === -1) {
              selectList.focus();
            }
            if (activeElementIndex < selectListChildren.length - 1) {
              selectListChildren[activeElementIndex + 1].focus();
            }
            break;

          case 'Enter':
            if (activeElementIndex !== -1) {
              selectListChildren[activeElementIndex].click();
            }
            break;
          case 'Tab':
            filterSearchRef?.current?.setAttribute(
              'tabindex',
              activeElement === selectButtonRef.current ? '-1' : '0'
            );
            break;
          default:
            if ((!/^[a-zA-Z0-9]$/.test(e.key) && e.key !== 'Backspace') || !isOpen) return;
            if (filterSearchRef.current) {
              filterSearchRef.current.focus();
            }
            break;
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [isOpen]);

    useEffect(() => {
      setSelectListHeight(getSelectListHeight(5, selectListRef));
      handleSelectHoverBackground(selectListRef, selectListHoverBackgroundRef);
    }, [selectListRef, children, filterSearch]);

    useOnClickOutside(selectWrapperRef, () => setIsOpen(false));

    const handleValueSelect = (value: string) => {
      if (multiselect) {
        // If multiselect is enabled, value selection is handled in handleValueCheck function
        handleValueCheck(value);
        return;
      }
      setFilterSearch('');
      setIsOpen(false);
      setSelected(value);
      selectButtonRef?.current?.focus();
      onChange &&
        onChange({
          target: { name: selectName, id, value },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    const handleValueCheck = (value: string) => {
      const selectedArray = selected ? selected.split(',') : [];
      const valueIndex = selectedArray.indexOf(value);
      if (valueIndex === -1) {
        selectedArray.push(value);
      } else {
        selectedArray.splice(valueIndex, 1);
      }
      setSelected(selectedArray.join(','));
      onChange &&
        onChange({
          target: { name: selectName, id, value: selectedArray.join(',') },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.currentTarget.contains(e.relatedTarget)) return;
      onBlur &&
        onBlur({
          target: { name: selectName, id, value: selected },
        } as React.FocusEvent<HTMLInputElement>);
    };

    const selectedArray = selected ? selected.split(',') : [];
    const selectContent = getLabelFromSelectedValues(children, selectedArray);
    const selectContentAsString = getSelectContentAsString(selectContent);
    const filteredChildren = getChildrenByQuery(children, filterSearch);
    const filteredChildrenEmpty: boolean = React.Children.toArray(filteredChildren).length === 0;

    return (
      <Wrapper className={className} ref={selectWrapperRef} onBlur={handleBlur}>
        <SelectButton
          aria-activedescendant={selected}
          aria-errormessage={ariaErrorMessage}
          aria-expanded={isOpen}
          aria-haspopup='listbox'
          aria-labelledby={`${ariaDescribedBy || ''} ${id}-select-button`}
          aria-owns={`${id}-select-list`}
          hasError={hasError}
          hasLabel={!!selectContent}
          id={`${id}-select-button`}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          ref={selectButtonRef}
          title={selectContentAsString}
          type='button'
          value={selected}
        >
          {isOpen ? (
            <FilterSearch
              aria-autocomplete='list'
              aria-controls={`${id}-select-list`}
              onChange={(e) => setFilterSearch(e.target.value)}
              placeholder='Search options ...'
              ref={filterSearchRef}
              type='text'
              tabIndex={-1}
              value={filterSearch}
            />
          ) : (
            <SelectedContent hasNestedContent={typeof selectContent !== 'string'}>
              {selectContent || placeholder}
            </SelectedContent>
          )}
          <ChevronDown className='chevron-icon' aria-hidden='true' />
        </SelectButton>

        {children && (
          <SelectListWrapper
            aria-activedescendant={selected}
            aria-errormessage={ariaErrorMessage}
            aria-expanded={isOpen}
            aria-labelledby={ariaDescribedBy}
            aria-multiselectable='false'
            height={selectListHeight}
            id={`${id}-select-list`}
            isOpen={isOpen}
            role='listbox'
            tabIndex={isOpen ? 0 : -1}
          >
            <SelectListHoverBackground ref={selectListHoverBackgroundRef} aria-hidden />
            <SelectList ref={selectListRef} height={selectListHeight}>
              {React.Children.map(filteredChildren, (child) => {
                if (!React.isValidElement(child)) return null;
                return React.cloneElement(child, {
                  hasCheckbox: multiselect,
                  selected: selectedArray.includes(child.props.value),
                  onClick: handleValueSelect,
                } as OptionProps);
              })}

              {filteredChildrenEmpty && (
                <SelectListNoResults>
                  <Search className='search-icon' />
                  <span>No results found</span>
                </SelectListNoResults>
              )}
            </SelectList>
          </SelectListWrapper>
        )}

        <HiddenSelectedValueInput
          aria-errormessage={ariaErrorMessage}
          aria-invalid={hasError}
          aria-labelledby={ariaDescribedBy}
          id={id}
          name={selectName}
          onChange={onChange}
          onClick={() => selectButtonRef?.current?.click()}
          placeholder={placeholder}
          ref={ref}
          required={isRequired}
          tabIndex={-1}
          type='text'
          value={selected || ''}
          {...additionalPhoneInputProps}
        />
      </Wrapper>
    );
  }
);
