import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';

const StyledPath = styled.path`
  cursor: move;
`;

const getArrowTransformation = (x, y, scale) =>
  `translate(${x},${y}) scale(${scale})`;

interface Props {
  x: number;
  y: number;
  scale: number;
}

const Arrows = ({ x, y, scale }: Props) => {
  // spaces the arrows around the center
  // the arrow paths are in a 24 x 24 view box based on icon library frokost havre
  const arrowSize = 24 * scale;
  const halfArrowSize = arrowSize / 2;

  // the arrows are first placed with the top left corner in the center
  // this moves the center of the arrow to the center of the rectangle
  const offset = halfArrowSize;
  const realCenterX = x - offset;
  const realCenterY = y - offset;

  const spaceBetweenArrows = 20 * scale;

  return (
    <g fill='white'>
      <StyledPath
        id='arrowDown'
        transform={getArrowTransformation(
          realCenterX,
          realCenterY + spaceBetweenArrows,
          scale
        )}
        d='M11.6464 19.6464L12.3536 18.9393L11.6464 19.6464ZM3.29289 12.7071L10.9393 20.3536L12.3536 18.9393L4.70711 11.2929L3.29289 12.7071ZM13.0607 20.3536L20.7071 12.7071L19.2929 11.2929L11.6464 18.9393L13.0607 20.3536ZM13 19V3L11 3V19H13ZM10.9393 20.3536C11.5251 20.9393 12.4749 20.9393 13.0607 20.3536L11.6464 18.9393C11.8417 18.7441 12.1583 18.7441 12.3536 18.9393L10.9393 20.3536Z'
      />
      <StyledPath
        id='arrowLeft'
        transform={getArrowTransformation(
          realCenterX - spaceBetweenArrows,
          realCenterY,
          scale
        )}
        d='M4.35355 11.6464L5.06066 12.3536L4.35355 11.6464ZM11.2929 3.29289L3.64645 10.9393L5.06066 12.3536L12.7071 4.70711L11.2929 3.29289ZM3.64645 13.0607L11.2929 20.7071L12.7071 19.2929L5.06066 11.6464L3.64645 13.0607ZM5 13L21 13L21 11L5 11L5 13ZM3.64645 10.9393C3.06066 11.5251 3.06066 12.4749 3.64645 13.0607L5.06066 11.6464C5.25592 11.8417 5.25592 12.1583 5.06066 12.3536L3.64645 10.9393Z'
      />
      <StyledPath
        id='arrowRight'
        transform={getArrowTransformation(
          realCenterX + spaceBetweenArrows,
          realCenterY,
          scale
        )}
        d='M19.6464 12.3536L18.9393 11.6464L19.6464 12.3536ZM12.7071 20.7071L20.3536 13.0607L18.9393 11.6464L11.2929 19.2929L12.7071 20.7071ZM20.3536 10.9393L12.7071 3.29289L11.2929 4.70711L18.9393 12.3536L20.3536 10.9393ZM19 11L3 11L3 13L19 13L19 11ZM20.3536 13.0607C20.9393 12.4749 20.9393 11.5251 20.3536 10.9393L18.9393 12.3536C18.7441 12.1583 18.7441 11.8417 18.9393 11.6464L20.3536 13.0607Z'
      />
      <StyledPath
        id='arrowUp'
        transform={getArrowTransformation(
          realCenterX,
          realCenterY - spaceBetweenArrows,
          scale
        )}
        d='M12.3536 4.35355L11.6464 5.06066L12.3536 4.35355ZM20.7071 11.2929L13.0607 3.64645L11.6464 5.06066L19.2929 12.7071L20.7071 11.2929ZM10.9393 3.64645L3.29289 11.2929L4.70711 12.7071L12.3536 5.06066L10.9393 3.64645ZM11 5L11 21L13 21L13 5L11 5ZM13.0607 3.64645C12.4749 3.06066 11.5251 3.06066 10.9393 3.64645L12.3536 5.06066C12.1583 5.25592 11.8417 5.25592 11.6464 5.06066L13.0607 3.64645Z'
      />
    </g>
  );
};

export default Arrows;
