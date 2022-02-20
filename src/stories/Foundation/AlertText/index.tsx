import React from 'react';
import styled from 'styled-components';
import { Success, Info, Warning, Error } from '../../Icons';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: var(--spacing-8);
    font-size: var(--font-size-12);

    svg {
        width: var(--spacing-16);
        height: var(--spacing-16);
    }
`;

export interface AlertTextProps {
    severity: 'success' | 'info' | 'warning' | 'error';
    children: React.ReactNode;
    id?: string;
}

/**
 * TODO:
 * - Add actual icons.
 */
const getIcon = (severity: AlertTextProps['severity']) => {
    switch (severity) {
        case 'success':
            return <Success />;
        case 'info':
            return <Info />;
        case 'warning':
            return <Warning />;
        case 'error':
            return <Error />;
    }
};

/**
 * AlertText component
 */
export const AlertText = ({
    severity = 'info',
    children,
    id,
}: AlertTextProps) => {
    return (
        <Wrapper role='alert' id={id}>
            {getIcon(severity)}
            <span>{children}</span>
        </Wrapper>
    );
};

export default AlertText;
