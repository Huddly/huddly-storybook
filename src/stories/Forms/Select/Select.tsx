import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../../..';
import styled from 'styled-components';
import { useOnClickOutside } from '../../../shared/hooks';
import { OptionProps } from './Option';
interface SelectButtonProps {
  isOpen?: boolean;
  hasValue?: boolean;
  hasError?: boolean;
}

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

const SelectButton = styled.button<SelectButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--spacing-48);
  padding: var(--spacing-16);
  border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
  border-radius: 3px;
  color: ${(p) => (p.hasValue ? 'var(--color-grey60)' : 'var(--color-grey86)')};
  cursor: pointer;
  background-color: var(--color-grey96);
  column-gap: var(--spacing-16);
  width: 100%;

  .select-content {
    display: flex;
    align-items: center;
    column-gap: var(--spacing-8);

    &,
    & > * {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .chevron {
    transition: 0.15s ease-in-out;
    ${(p) => (p.isOpen ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);')}
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
  height: ${(p) => (p.isOpen ? `${p.height}px` : '0px')};
  margin: var(--spacing-4) 0 0 0;
  overflow: hidden;
  position: absolute;
  transition: height 150ms ease-out;
  width: 100%;
  will-change: height;
  z-index: 10;
`;

const SelectList = styled.ul<{ height: number }>`
  height: ${(p) => `${p.height}px`};
  margin: 0;
  padding: 0;
  border-radius: 3px;
  overflow-y: auto;
  list-style: none;
  border: var(--border-active);

  &:after {
    z-index: -2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: var(--color-grey96);
  }
`;

const SelectListHoverBackground = styled.span`
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  background-color: var(--color-whisperBlue);
  transition: height 100ms ease-in-out, opacity 120ms ease-in-out 70ms, transform 120ms ease-out 12ms;
  will-change: height, opacity, transform;
`;

const getSelectListHeight = (showItems: number, selectListRef: React.RefObject<HTMLUListElement>): number => {
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
    const node = event.target as HTMLElement;
    const rect = node.getBoundingClientRect();
    const separatorLineWidth = parseInt(getComputedStyle(node).borderBottomWidth, 10);
    selectListHoverBackgroundRef.current.style.opacity = '1';
    selectListHoverBackgroundRef.current.style.height = `${rect.height + separatorLineWidth}px`;
    selectListHoverBackgroundRef.current.style.transform = `translateY(${rect.y - parentRect.y - parentRectBorder}px)`;
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

export interface SelectProps {
  // only allow options in childen
  children: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[] | React.ReactElement<OptionProps>[][];
  className?: string;
  hasError?: boolean;
  id?: string;
  isRequired?: boolean;
  name?: string;
  onChange?: (value: string) => void;
  showItems?: number;
  value?: string;
}

/**
 * Select component
 */
export const Select = React.forwardRef((props: SelectProps, ref: React.RefObject<HTMLInputElement>) => {
  const {
    children,
    className,
    hasError,
    id,
    isRequired,
    name,
    onChange,
    value,
    showItems = 6,
    ...additionalSelectProps
  } = props;

  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const selectButtonRef = useRef<HTMLButtonElement>(null);
  const selectListRef = useRef<HTMLUListElement>(null);
  const selectListHoverBackgroundRef = useRef<HTMLSpanElement>(null);
  const filterSearchRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(value);
  const [selectListHeight, setSelectListHeight] = useState(0);
  const [showFilterSearch, setShowFilterSearch] = useState(false);
  const [filterSearch, setFilterSearch] = useState('');

  const placeholder = '- Select option -';

  useEffect(
    function handleKeyboardNavigation() {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (['Escape', 'ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
          e.preventDefault();
        }

        const selectList = selectListRef.current;
        const selectListChildren = selectList?.children as NodeListOf<HTMLElement>;
        if (!selectListChildren) return;

        const activeElement = document.activeElement as HTMLElement;
        const activeElementIndex = Array.from(selectListChildren).indexOf(activeElement);

        switch (e.key) {
          case 'Escape':
            setIsOpen(false);
            break;

          case 'ArrowUp':
            if (activeElementIndex === 0) {
              selectList.focus();
            } else {
              selectListChildren[activeElementIndex - 1].focus();
            }
            break;

          case 'ArrowDown':
            if (activeElementIndex === selectListChildren.length - 1) {
              selectList.focus();
            } else {
              selectListChildren[activeElementIndex + 1].focus();
            }
            break;

          case 'Enter':
            if (activeElementIndex !== -1) {
              selectListChildren[activeElementIndex].click();
            }
            break;

          case ' ':
            if (activeElement === selectButtonRef.current) {
              setIsOpen(!isOpen);
            }
            break;
          default:
            if (!/^[a-zA-Z0-9]$/.test(e.key) || !isOpen) return;
            setShowFilterSearch(true);
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
    },
    [isOpen, setShowFilterSearch]
  );

  const handleOpen = () => {
    setIsOpen(!isOpen);

    if (!isOpen && filterSearch.length <= 0) {
      setShowFilterSearch(false);
    }
  };

  const handleValueSelect = ({ target }) => {
    const selectedValue = target.dataset.value;
    console.log(selectedValue);
    setFilterSearch('');
    setIsOpen(false);
    setSelected(selectedValue);
    setShowFilterSearch(false);
    onChange && onChange(selectedValue);
  };

  const handleSelectedLabel = (selected: string | null) => {
    if (!selected) return placeholder;
    const selectedItem: SelectProps['children'] = React.Children.toArray(children).find((child) => {
      if (!React.isValidElement(child)) return false;
      return child.props.value === selected;
    });
    return selectedItem.props.children;
  };

  const filterChildren = (children: React.ReactNode) => {
    if (!filterSearch) return children;
    return React.Children.toArray(children).filter((child) => {
      if (!React.isValidElement(child)) return true;

      const searchContent = [];
      if (typeof child.props.children === 'string') {
        searchContent.push(child.props.children);
      }
      if (child.props.value) {
        searchContent.push(child.props.value);
      }
      React.Children.forEach(child.props.children, (child) => {
        if (!React.isValidElement(child)) return;
        if (typeof child.props.children !== 'string') return;
        searchContent.push(child.props.children);
      });

      const searchContentString = searchContent.join(' ').toLowerCase();
      return searchContentString.indexOf(filterSearch.toLowerCase()) !== -1;
    });
  };

  const selectContent = handleSelectedLabel(selected);
  const filteredChildren = filterChildren(children);

  useEffect(() => {
    setTimeout(() => {
      setSelectListHeight(getSelectListHeight(showItems, selectListRef));
      handleSelectHoverBackground(selectListRef, selectListHoverBackgroundRef);
      console.log('updzted');
    }, 10);
  }, [selectListRef, children, filterSearch, isOpen]);

  useOnClickOutside(selectWrapperRef, () => setIsOpen(false));

  return (
    <Wrapper className={className} ref={selectWrapperRef} role=''>
      <SelectButton
        ref={selectButtonRef}
        hasValue={!!selected}
        hasError={hasError}
        isOpen={isOpen}
        onClick={handleOpen}
      >
        {showFilterSearch && isOpen ? (
          <FilterSearch
            type='text'
            ref={filterSearchRef}
            value={filterSearch}
            onChange={(e) => setFilterSearch(e.target.value)}
            placeholder='Search options ...'
          />
        ) : (
          <>
            <span className='select-content'>{selectContent}</span>
            <Icon name='ChevronDown' className='chevron' aria-hidden />
          </>
        )}
      </SelectButton>

      {children && (
        <SelectListWrapper height={selectListHeight} isOpen={isOpen} aria-expanded={isOpen}>
          <SelectListHoverBackground ref={selectListHoverBackgroundRef} aria-hidden />
          <SelectList ref={selectListRef} height={selectListHeight} onClick={handleValueSelect}>
            {filteredChildren}
          </SelectList>
        </SelectListWrapper>
      )}
    </Wrapper>
  );
});
