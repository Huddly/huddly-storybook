import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
    /**
     * Label text
     * Example: New
     */
    children: React.ReactChild;
}

const Wrapper = styled.span`
    background-color: var(--color-lavender);
    color: var(--color-white);
    font-family: var(--font-family);
    font-size: 14px;
    padding: 2px 5px;
    height: 100%;
`;

/**
 * Badge component
 */
export const Badge = ({ children }: BadgeProps) => {
    return <Wrapper>{children}</Wrapper>;
};