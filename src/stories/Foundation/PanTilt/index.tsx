import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BlueTonesEnum } from '../../../shared/colors';
import Arrows from './Arrows';

const Wrapper = styled.div<{ width: number; height: number }>`
  background: var(--color-grey91);
  width: ${(p) => `${p.width}px`};
  height: ${(p) => `${p.height}px`};
  border-radius: var(--spacing-8);
`;

const StyledRect = styled.rect`
  cursor: move;
`;
export interface PanTiltProps {
  className?: string;
  updatePosition: (pan: number, tilt: number) => void; // will return pan and tilt values between -1 and 1
  zoom: number;
  width: number;
  initialPositionX?: number;
  initialPositionY?: number;
}

/**
 * PanTilt component
 */
export const PanTilt = ({
  className,
  updatePosition,
  zoom,
  width,
  initialPositionX,
  initialPositionY,
}: PanTiltProps) => {
  const refRectangle = React.createRef<SVGRectElement>();
  // scale will be between 0.3 and 1, smaller than 0.3 will render to small to show arrows
  const scale = 1 - 0.7 * zoom;
  const [isDragging, setIsDragging] = useState(false);

  // grey wrapper sizes
  const wrapperFormat = 3 / 4;
  const wrapperWidth = width;
  const wrapperHeight = width * wrapperFormat;
  const wrapperCenterX = width / 2;
  const wrapperCenterY = wrapperHeight / 2;

  // lavender rectangle sizes
  const rectangleFormat = 9 / 16;
  const rectangleWidth = width * scale;
  const rectangleHeight = width * scale * rectangleFormat;
  const rectangleCenterX = rectangleWidth / 2;
  const rectangleCenterY = rectangleHeight / 2;

  const [position, setPosition] = useState({
    x: initialPositionX ?? 0,
    y: initialPositionY ?? wrapperCenterY,
  });

  useEffect(() => {
    // contains rectangle inside wrapper when scaling
    const minX = Math.max(rectangleCenterX, position.x);
    const minY = Math.max(rectangleCenterY, position.y);
    const x = Math.min(wrapperWidth - rectangleCenterX, minX);
    const y = Math.min(wrapperHeight - rectangleCenterY, minY);
    setPosition({ x, y });
  }, [scale]);

  const startDrag = () => setIsDragging(true);

  const endDrag = () => {
    setIsDragging(false);
    // normalize values between -1 and 1
    // -1 is the value furthest to the left and top the rectangle can move, considering the zoom level
    // 1 is the value furthest to the right and bottom the rectangle can move, considering the zoom level
    const panValue =
      wrapperCenterX - rectangleCenterX !== 0 // when aligned in the center the nominator is 0 so the division is invalid
        ? (position.x - wrapperCenterX) / (wrapperCenterX - rectangleCenterX)
        : 0;
    const tiltValue =
      wrapperCenterY - rectangleCenterY !== 0 ? (position.y - wrapperCenterY) / (wrapperCenterY - rectangleCenterY) : 0;

    updatePosition(panValue, tiltValue);
  };

  const drag = (e) => {
    e.stopPropagation();
    if (isDragging) {
      // getScreenCTM returns Current Transform Matrix that converts screen coordinate system to RECT coordinate system
      const CTM = refRectangle.current.getScreenCTM();

      // positions the cursor at the top left corner of the rectangle
      const cursorPositionX = (e.clientX - CTM.e) / CTM.a;
      const cursorPositionY = (e.clientY - CTM.f) / CTM.d;

      // positions the cursor at the center of the rectangle
      const cursorPositionCenterX = cursorPositionX;
      const cursorPositionCenterY = cursorPositionY;

      // contains rectangle inside wrapper
      const minX = Math.max(rectangleCenterX, cursorPositionCenterX);
      const minY = Math.max(rectangleCenterY, cursorPositionCenterY);
      const x = Math.min(wrapperWidth - rectangleCenterX, minX);
      const y = Math.min(wrapperHeight - rectangleCenterY, minY);
      setPosition({
        x,
        y,
      });
    }
  };

  return (
    <Wrapper className={className} width={wrapperWidth} height={wrapperHeight}>
      <svg
        width={wrapperWidth}
        height={wrapperHeight}
        onMouseDown={startDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onMouseMove={drag}
      >
        <StyledRect
          ref={refRectangle}
          rx={8}
          x={position.x - rectangleCenterX}
          y={position.y - rectangleCenterY}
          width={rectangleWidth}
          height={rectangleHeight}
          fill={BlueTonesEnum.lavender}
        />
        <Arrows x={position.x} y={position.y} scale={scale} />
      </svg>
    </Wrapper>
  );
};
