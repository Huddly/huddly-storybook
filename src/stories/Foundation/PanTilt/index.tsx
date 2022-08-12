import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { BlueTonesEnum } from '../../../shared/colors';
import Arrows from './Arrows';

const Wrapper = styled.div<{ width: number; height: number }>`
  background: var(--color-grey91);
  width: ${(p) => rem(p.width)};
  height: ${(p) => rem(p.height)};
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
  initialPositionPan?: number;
  initialPositionTilt?: number;
}

/**
 * PanTilt component
 * - The zoom values should be between 0 and 1
 * - The pan and tilt values are between -1 and 1
 */
export const PanTilt = ({
  className,
  updatePosition,
  zoom,
  width,
  initialPositionPan,
  initialPositionTilt,
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

  const convertToRange = (
    [oldMin, oldMax]: [number, number],
    value: number,
    [newMin, newMax]: [number, number]
  ) => {
    const oRange = oldMax - oldMin;
    const nRange = newMax - newMin;

    return ((value - oldMin) * nRange) / oRange + newMin;
  };

  const xRange: [number, number] = [rectangleCenterX, wrapperWidth - rectangleCenterX];
  const yRange: [number, number] = [rectangleCenterY, wrapperHeight - rectangleCenterY];

  const convertXToPan = (xValue: number) => convertToRange(xRange, xValue, [-1, 1]);

  const convertYToTilt = (yValue: number) => convertToRange(yRange, yValue, [-1, 1]);

  const convertPanToX = (panValue: number) => convertToRange([-1, 1], panValue, xRange);

  const convertTiltToY = (tiltValue: number) => convertToRange([-1, 1], tiltValue, yRange);

  const [position, setPosition] = useState({
    x: initialPositionPan ? convertPanToX(initialPositionPan) : wrapperCenterX,
    y: initialPositionTilt ? convertTiltToY(initialPositionTilt) : wrapperCenterY,
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
    const panValue = convertXToPan(position.x);
    const tiltValue = convertYToTilt(position.y);

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
