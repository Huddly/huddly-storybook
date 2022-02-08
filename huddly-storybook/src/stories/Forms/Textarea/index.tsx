import { useState, useRef } from 'react';
import styled from 'styled-components';

interface TextAreaProps {
    /**
     * label description.
     */
    label?: string;

    /**
     * isRequired description.
     */
    isRequired?: boolean;

    /**
     * Textarea height in px.
     * @default '136'
     */
    baseHeight?: number;
}

interface WrapperProps {
    focused: boolean;
    expanded: boolean;
    height: number;
}

/**
 * Todo
 * Add focus outline
 * Add color variations
 */
const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    height: ${({ height }) => `${height}px`};
    margin-bottom: 1rem;
    padding: 15px;
    border-radius: 6px;
    font-size: 16px;
    cursor: text;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out, height 0s;
    will-change: height;

    ${({ focused, expanded }) =>
        (focused || expanded) &&
        `padding-top: 10px;
        border: 1px solid black; 
        background-color: var(--color-white);
        `}

    label {
        padding-bottom: 5px;
        cursor: inherit;
        transition: inherit;

        ${({ focused, expanded }) =>
            (focused || expanded) &&
            `font-size: 12px;
            font-weight: bold;`}

        // Required text
        i {
            padding-left: 5px;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
        }
    }

    textarea {
        all: unset;
        flex-grow: 1;
        overflow: hidden;
        word-wrap: break-word;
        resize: none;
    }
`;

/**
 * TextArea component
 */
export const TextArea = ({
    label,
    isRequired,
    baseHeight = 136,
}: TextAreaProps) => {
    const [focused, setFocused] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState(baseHeight);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    const handleTextArea = () => {
        if (!textareaRef.current) return;
        // Set expanded state to true if textarea has content
        setExpanded(textareaRef.current.value.length > 0);

        // Set height of the textarea to the content height
        const calcHeight = calculateHeight();
        setHeight(calcHeight > baseHeight ? calcHeight : baseHeight);
    };

    /**
     * Set height to auto to allow the textarea to expand
     * @returns {number}
     */
    const calculateHeight = () => {
        if (!textareaRef.current) return 0;
        const textarea = textareaRef.current;
        const wrapperHeight = textarea.parentElement?.clientHeight || 0;
        const textareaHeight = textarea.clientHeight || 0;
        const contentHeight = textarea.scrollHeight;
        return wrapperHeight - textareaHeight + contentHeight;
    };

    return (
        <Wrapper
            focused={focused}
            expanded={expanded}
            height={height}
            onClick={() => textareaRef?.current?.focus()}
        >
            {label && (
                <label>
                    {label}
                    {!isRequired && <i>(optional)</i>}
                </label>
            )}
            <textarea
                required={isRequired}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={handleTextArea}
                ref={textareaRef}
            ></textarea>
        </Wrapper>
    );
};
