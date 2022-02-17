import React from 'react';
import { Colors } from '../../../shared/types';
import styled from 'styled-components';

export interface CardProps {
    background?: Colors;
    children: JSX.Element | JSX.Element[];
}

const Wrapper = styled.div<CardProps>`
    border-radius: 8px;
    background-color: ${(p) => p.background};
    padding: var(--spacing-16);
`;

/**
 * Card component
 */
export const Card = ({ background = 'white', children }: CardProps) => {
    return <Wrapper background={background}>{children}</Wrapper>;
};
