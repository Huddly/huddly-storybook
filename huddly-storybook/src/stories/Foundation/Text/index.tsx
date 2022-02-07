import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.p<Props>`
    margin: 0;
    line-height: 1.2em;
    font-size: ${(p) => `var(--font-size-${p.size})`};
    color: ${(p) => `var(--color-${p.color})`};
    font-family: ${(p) =>
        p.bold ? 'Messina sans bold' : 'Messina sans regular'};
`;
interface Props {
    size?: '14' | '18' | '22' | '28' | '48' | '68' | '98';
    color?:
        | 'lavender'
        | 'sunYellow'
        | 'black'
        | 'signalOrange'
        | 'white'
        | 'signalOrange';
    type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
    bold?: boolean;
    children: React.ReactChild;
}
/**
 * Text component
 */
export const Text = ({
    size = '14',
    color = 'black',
    type = 'p',
    bold,
    children,
}: Props) => {
    return (
        <Wrapper as={type as any} bold={bold} size={size} color={color}>
            {children}
        </Wrapper>
    );
};

export default Text;
