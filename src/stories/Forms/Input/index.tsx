import React, { useState, useRef } from 'react';
import styled from 'styled-components';

interface WrapperProps {
    focused: boolean;
    expanded: boolean;
}

/**
 * Todo
 * Add focus outline
 * Add color variations
 */
const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
    height: 56px;
    margin-bottom: 1rem;
    padding: 0 15px;
    border-radius: 6px;
    font-size: 16px;
    cursor: text;
    transition: all 0.2s ease-in-out;
    background-color: rgba(0, 0, 0, 0.3);

    ${({ focused, expanded }) =>
        (focused || expanded) &&
        `border: 1px solid black; 
        background-color: var(--color-white);`}

    label {
        cursor: inherit;
        transition: inherit;

        ${({ focused, expanded }) =>
            (focused || expanded) &&
            `font-size: 12px;
            font-weight: bold;`}

        // required text
        i {
            font-style: normal;
            font-size: 12px;
            font-weight: normal;
            padding-left: 5px;
        }
    }

    input {
        all: unset;
        display: block;
        height: 0;
        transition: inherit;
        will-change: height;

        ${({ focused, expanded }) => (focused || expanded) && `height: 1.25em;`}
    }
`;

export interface InputProps {
    /**
     * Input type
     */
    type: string;

    /**
     * Label text
     */
    label?: string;

    /**
     * Is input required?
     */
    isRequired?: boolean;
}

/**
 * Input component
 */
export const Input = ({ type, label, isRequired }: InputProps) => {
    const [focused, setFocused] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    const handleInput = () => {
        if (!inputRef.current) return;
        setExpanded(inputRef.current.value.length > 0);
    };

    return (
        <Wrapper
            focused={focused}
            expanded={expanded}
            onClick={() => inputRef?.current?.focus()}
        >
            {label && (
                <label>
                    {label}
                    {!isRequired && <i>(optional)</i>}
                </label>
            )}
            <input
                type={type}
                required={isRequired}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={handleInput}
                ref={inputRef}
            />
        </Wrapper>
    );
};
