import React from 'react';
import styled from 'styled-components';

interface ColorsProps {
    /**
     * Color name/label
     */
    name: string;
    hex: any;
    rgb: any;
    cmyk: any;
    pms: any;
}

const Wrapper = styled.div`
    /* Your styles here */
`;

/**
 * Colors component
 */
export const Colors = ({ hex, rgb, cmyk, pms }: ColorsProps) => {
    return <Wrapper>Colors</Wrapper>;
};
