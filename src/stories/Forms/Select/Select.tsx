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
  /**
   * Specify to open option list over the component
   */
  openOver: boolean;
}

/**
 * Select component
 */
export const Select = React.forwardRef(
  (props: SelectProps, ref: React.ForwardedRef<HTMLInputElement>) => {
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
      openOver,
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
    const [localValue, setLocalValue] = useState<string>(value);
    const [selectListHeight, setSelectListHeight] = useState(0);
    const [filterSearch, setFilterSearch] = useState('');

    /**
     * Update localValue when value prop changes.
     */
    useEffect(() => {
      if (value === localValue) return;
      setLocalValue(value);
    }, [value]);

    /**
     * Close select when clicking outside of it.
     */
    useOnClickOutside(selectWrapperRef, () => setIsOpen(false));

    /**
     * Keyboard navigation handlers.
     */
    useEffect(() => {
      selectWrapperRef.current?.addEventListener('keydown', handleKeyboardEvent);
      return () => {
        selectWrapperRef.current?.removeEventListener('keydown', handleKeyboardEvent);
      };
    }, [isOpen]);

    const handleKeyboardEvent = (event: KeyboardEvent) => {
      const selectList = selectListRef.current;
      const selectListChildren = selectList?.children as HTMLCollectionOf<HTMLElement>;
      const activeElement = document.activeElement as HTMLElement;
      const activeOptionIndex = Array.from(selectListChildren).indexOf(activeElement);

      const keyActions = {
        Enter: handleEnterKey,
        Escape: handleEscapeKey,
        Space: handleSpaceKey,
        ArrowUp: handleArrowUpKey,
        ArrowDown: handleArrowDownKey,
      };

      if (keyActions[event.code]) {
        event.preventDefault();
        keyActions[event.code]({
          activeElement,
          activeOptionIndex,
          selectList,
          selectListChildren,
        });
      } else {
        if (!/^[a-zA-Z0-9]$/.test(event.key) || !isOpen) return;
        if (filterSearchRef.current) {
          filterSearchRef.current.focus();
        }
      }
    };

    const handleSpaceKey = ({ activeElement }) => {
      // If select button is focused and the dropdown is closed, open it
      if (activeElement === selectButtonRef.current && !isOpen) {
        setIsOpen(true);
      }
      // Since event.preventDefault() is called on the Space key, we need to add a space to the input manually.
      if (activeElement === filterSearchRef.current) {
        // Get the cursor position in the input
        const cursorPosition = filterSearchRef.current.selectionStart;
        // Add a space to the input at the cursor position
        filterSearchRef.current.value =
          filterSearchRef.current.value.slice(0, cursorPosition) +
          ' ' +
          filterSearchRef.current.value.slice(cursorPosition);
        // Move the cursor position to the position after the space
        filterSearchRef.current.selectionStart = cursorPosition + 1;
        filterSearchRef.current.selectionEnd = cursorPosition + 1;
      }
    };

    const handleEscapeKey = () => {
      setIsOpen(false);
      selectButtonRef?.current?.focus();
    };

    const handleArrowUpKey = ({ activeOptionIndex, selectList, selectListChildren }) => {
      if (activeOptionIndex === 0 || activeOptionIndex === -1) {
        selectList.focus();
      }
      if (activeOptionIndex > 0) {
        selectListChildren[activeOptionIndex - 1].focus();
      }
    };

    const handleArrowDownKey = ({ activeOptionIndex, selectList, selectListChildren }) => {
      if (activeOptionIndex === selectListChildren.length - 1 || activeOptionIndex === -1) {
        selectList.focus();
      }
      if (activeOptionIndex < selectListChildren.length - 1) {
        selectListChildren[activeOptionIndex + 1].focus();
      }
    };

    const handleEnterKey = ({ activeOptionIndex, selectListChildren }) => {
      // If an option is active, select it.
      if (activeOptionIndex !== -1) {
        selectListChildren[activeOptionIndex].click();
      }
      // If no option is active, but there is only one option, select it.
      else if (selectListChildren.length === 1) {
        selectListChildren[0].click();
      }
    };

    const selectContent = useMemo(
      () => getSelectedContentHTML(children, [localValue]),
      [children, localValue]
    );
    const selectContentAsString = useMemo(() => innerText(selectContent), [selectContent]);
    const filteredChildren = useMemo(
      () => filterChildrenByQuery(children, filterSearch),
      [children, filterSearch]
    );

    /**
     * Handle dynamically positioned and sized items depending on the options.
     */
    useEffect(() => {
      setSelectListHeight(getSelectListHeight(5, selectListRef));
      handleSelectHoverBackground(selectListRef, selectListHoverBackgroundRef);
    }, [selectListRef, selectListHoverBackgroundRef, filteredChildren]);

    const handleValueSelect = (newValue: string) => {
      setIsOpen(false); // Close select
      setFilterSearch(''); // Reset filter search
      selectButtonRef?.current?.focus(); // Focus back to select button
      // Only update value/localValue if it's different from newValue to avoid extra renders
      if (localValue === newValue) return;
      setLocalValue(newValue);
      onChange &&
        onChange({
          target: { name: selectName, id, value: newValue },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.currentTarget.contains(e.relatedTarget)) return;
      onBlur &&
        onBlur({
          target: { name: selectName, id, value: localValue },
        } as React.FocusEvent<HTMLInputElement>);
    };

    return (
      <Styled.Wrapper className={className} ref={selectWrapperRef} onBlur={handleBlur}>
        <Styled.SelectButton
          aria-errormessage={ariaErrorMessage}
          aria-expanded={isOpen}
          aria-haspopup='listbox'
          aria-labelledby={ariaDescribedBy}
          aria-owns={`${id}-select-list`}
          hasError={hasError}
          hasLabel={!!selectContent}
          id={id}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          ref={selectButtonRef}
          title={selectContentAsString}
          type='button'
          value={localValue}
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
            placeOver={openOver}
          >
            <Styled.SelectListHoverBackground ref={selectListHoverBackgroundRef} aria-hidden />
            <Styled.SelectList ref={selectListRef} height={selectListHeight}>
              {React.Children.map(filteredChildren, (child) => {
                if (!React.isValidElement(child)) return null;
                return React.cloneElement(child, {
                  hasCheckbox: false,
                  selected: localValue === child.props.value,
                  onChange: handleValueSelect,
                  isFocusable: isOpen,
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

        <input
          name={selectName}
          ref={ref}
          required={isRequired}
          type='hidden'
          value={localValue}
          {...additionalInputProps}
        />
      </Styled.Wrapper>
    );
  }
);
