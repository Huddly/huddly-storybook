import React, { useState, useEffect, useRef, useMemo } from 'react';
import innerText from 'react-innertext';
import { GlobalInputProps } from '../../../shared/types';
import { OptionProps } from './Option';
import { Search } from '@huddly/frokost/havre';
import * as Styled from './styled';

// Custom hooks
import { useOnClickOutside } from '../../../shared/hooks';

// Utility functions
import {
  allChildrenAreOption,
  getSelectListHeight,
  handleSelectHoverBackground,
  getSelectedContentHTML,
  filterChildrenByQuery,
} from './select-utils';

export interface SelectProps extends GlobalInputProps {
  /**
   * Option components to be rendered.
   */
  children: React.ReactNode;
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
      name,
      onBlur,
      onChange,
      placeholder,
      value,
      ...additionalInputProps
    } = props;

    if (!allChildrenAreOption(children)) {
      throw new Error('Select component: children can only contain Option components.');
    }

    const selectName = name || id;

    const selectWrapperRef = useRef<HTMLDivElement>(null);
    const selectButtonRef = useRef<HTMLButtonElement>(null);
    const selectListRef = useRef<HTMLUListElement>(null);
    const selectListHoverBackgroundRef = useRef<HTMLSpanElement>(null);
    const filterSearchRef = useRef<HTMLInputElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string>(value);
    const [selectListHeight, setSelectListHeight] = useState(0);
    const [filterSearch, setFilterSearch] = useState('');

    useEffect(() => {
      if (!selectWrapperRef.current) return;

      const handleKeyDown = (e) => {
        console.log('focused element', document.activeElement);

        const selectList = selectListRef.current;
        const selectListChildren = selectList?.children as HTMLCollectionOf<HTMLElement>;
        const activeElement = document.activeElement as HTMLElement;
        const activeElementIndex = Array.from(selectListChildren).indexOf(activeElement);

        const keyActions = {
          13: handleEnterKey,
          27: handleEscapeKey,
          32: handleSpaceKey,
          38: handleArrowUpKey,
          40: handleArrowDownKey,
        };

        if (keyActions[e.keyCode]) {
          e.preventDefault();
          keyActions[e.keyCode]({
            activeElement,
            activeElementIndex,
            selectList,
            selectListChildren,
          });
        } else {
          if (!/^[a-zA-Z0-9]$/.test(e.key) || !isOpen) return;
          if (filterSearchRef.current) {
            filterSearchRef.current.focus();
          }
        }
      };

      selectWrapperRef.current.addEventListener('keydown', handleKeyDown);
      return () => {
        selectWrapperRef.current.removeEventListener('keydown', handleKeyDown);
      };
    }, [isOpen]);

    const handleSpaceKey = ({ activeElement }) => {
      if (activeElement === selectButtonRef.current && !isOpen) {
        setIsOpen(true);
      }
      if (activeElement === filterSearchRef.current) {
        filterSearchRef.current.value += ' '; // If filterSearchRef is focused, place a space in the input
      }
    };

    const handleEscapeKey = () => {
      setIsOpen(false);
      selectButtonRef?.current?.focus();
    };

    const handleArrowUpKey = ({ activeElementIndex, selectList, selectListChildren }) => {
      if (activeElementIndex === 0 || activeElementIndex === -1) {
        selectList.focus();
      }
      if (activeElementIndex > 0) {
        console.log(selectListChildren[activeElementIndex - 1]);
        selectListChildren[activeElementIndex - 1].focus();
      }
    };

    const handleArrowDownKey = ({ activeElementIndex, selectList, selectListChildren }) => {
      if (activeElementIndex === selectListChildren.length - 1 || activeElementIndex === -1) {
        selectList.focus();
      }
      if (activeElementIndex < selectListChildren.length - 1) {
        selectListChildren[activeElementIndex + 1].focus();
      }
    };

    const handleEnterKey = ({ activeElementIndex, selectListChildren }) => {
      if (activeElementIndex !== -1) {
        selectListChildren[activeElementIndex].click();
      }
    };

    useEffect(() => {
      setSelected(value);
    }, [value]);

    useOnClickOutside(selectWrapperRef, () => setIsOpen(false));

    const selectContent = useMemo(
      () => getSelectedContentHTML(children, [selected]),
      [children, selected]
    );
    const selectContentAsString = useMemo(() => innerText(selectContent), [selectContent]);
    const filteredChildren = useMemo(
      () => filterChildrenByQuery(children, filterSearch),
      [children, filterSearch]
    );

    useEffect(() => {
      setSelectListHeight(getSelectListHeight(5, selectListRef));
      handleSelectHoverBackground(selectListRef, selectListHoverBackgroundRef);
    }, [selectListRef, selectListHoverBackgroundRef, filteredChildren]);

    const handleValueSelect = (value: string) => {
      setFilterSearch('');
      setIsOpen(false);
      selectButtonRef?.current?.focus();

      setSelected(value);
      onChange &&
        onChange({
          target: { name: selectName, id, value },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.currentTarget.contains(e.relatedTarget)) return;
      onBlur &&
        onBlur({
          target: { name: selectName, id, value: selected },
        } as React.FocusEvent<HTMLInputElement>);
    };

    return (
      <Styled.Wrapper className={className} ref={selectWrapperRef} onBlur={handleBlur}>
        <Styled.SelectButton
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
            <Styled.FilterSearch
              aria-autocomplete='list'
              aria-controls={`${id}-select-list`}
              onChange={(e) => setFilterSearch(e.target.value)}
              placeholder='Search options ...'
              ref={filterSearchRef}
              type='text'
              value={filterSearch}
            />
          ) : (
            <Styled.SelectedContent hasNestedContent={typeof selectContent !== 'string'}>
              {selectContent || placeholder || '- Select option -'}
            </Styled.SelectedContent>
          )}
          <Styled.RotatingChevron rotate={isOpen} aria-hidden='true' />
        </Styled.SelectButton>

        {children && (
          <Styled.SelectListWrapper
            aria-errormessage={ariaErrorMessage}
            aria-expanded={isOpen}
            aria-labelledby={ariaDescribedBy}
            height={selectListHeight}
            id={`${id}-select-list`}
            isOpen={isOpen}
            role='listbox'
            tabIndex={isOpen ? 0 : -1}
          >
            <Styled.SelectListHoverBackground ref={selectListHoverBackgroundRef} aria-hidden />
            <Styled.SelectList ref={selectListRef} height={selectListHeight}>
              {React.Children.map(filteredChildren, (child) => {
                if (!React.isValidElement(child)) return null;
                return React.cloneElement(child, {
                  hasCheckbox: false,
                  selected: selected === child.props.value,
                  onChange: handleValueSelect,
                  isVisible: isOpen,
                } as OptionProps);
              })}

              {React.Children.count(filteredChildren) === 0 && (
                <Styled.SelectListNoResults>
                  <Search className='search-icon' />
                  <span>No results found</span>
                </Styled.SelectListNoResults>
              )}
            </Styled.SelectList>
          </Styled.SelectListWrapper>
        )}

        <Styled.HiddenSelectedValueInput
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
          {...additionalInputProps}
        />
      </Styled.Wrapper>
    );
  }
);
