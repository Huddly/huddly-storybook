import React, { useState, useRef, useEffect, useId, useCallback } from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import rem from '../../../shared/pxToRem';
import { AlignX, AlignY, alignMap, arrowAlignMap } from './alignments';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const ToolTipWrapper = styled.div<{
  alignX: AlignX;
  alignY: AlignY;
  visible: boolean;
}>`
  --gap: ${rem(10)};
  display: flex;
  visibility: ${(p) => (p.visible ? 'visible' : 'hidden')};
  position: absolute;
  align-items: center;
  // clamp auto width, max 400px but no more than 80vw
  width: clamp(1px, 80vw, ${rem(400)});
  ${(p) => alignMap[p.alignY][p.alignX]}

  // Tooltip arrow
  &:before {
    --height: ${rem(8)};
    position: absolute;
    width: 0;
    height: 0;
    border-width: ${rem(8)} ${rem(6.5)} 0 ${rem(6.5)};
    border-style: solid;
    border-color: var(--color-black) transparent transparent transparent;
    content: '';
    margin-inline: ${(p) => p.alignY === 'center' && 'calc(var(--height) * -1)'};
    ${(p) => arrowAlignMap[p.alignY][p.alignX]}
  }
`;

const ToolTipText = styled(Text)`
  position: relative;
  background: var(--color-black);
  padding: 6px 12px;
  border-radius: 3px;
`;

export interface Props {
  children: React.ReactNode;
  className?: string;
  text: string;
  /**
   * @default 'center'
   */
  alignX?: AlignX;
  /**
   * @default 'top'
   */
  alignY?: AlignY;
}

/**
 * Tooltip component
 */
export const Tooltip = ({
  children,
  className,
  text,
  alignX = 'center',
  alignY = 'top',
}: Props) => {
  // alignX and alignY cannot be both 'center'
  if (alignX === 'center' && alignY === 'center') {
    alignY = 'top';
    console.warn(
      'Tooltip: alignX and alignY cannot be both "center". alignY has been set to "top".'
    );
  }

  const tooltipId = useId();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [localAlignX, setLocalAlignX] = useState<AlignX>(alignX);
  const [localAlignY, setLocalAlignY] = useState<AlignY>(alignY);

  const handleAlignReset = useCallback(() => {
    setLocalAlignX(alignX);
    setLocalAlignY(alignY);
  }, [alignX, alignY]);

  const handleAlignIfOutOfViewport = () => {
    // Check if tooltip is outside of viewport
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    // When alignY is center, the tooltip is displayed inline with the trigger
    const inline = localAlignY === 'center';

    const leftOrRight = () => {
      if (tooltipRect.left < 0) {
        setLocalAlignX(inline ? 'right' : 'left');
      } else if (tooltipRect.right > window.innerWidth) {
        setLocalAlignX(inline ? 'left' : 'right');
      }
    };

    const topOrBottom = () => {
      if (tooltipRect.top < 0) {
        setLocalAlignY('bottom');
      } else if (tooltipRect.bottom > window.innerHeight) {
        setLocalAlignY('top');
      }
    };

    if (localAlignY === 'center') {
      leftOrRight();
    } else {
      leftOrRight();
      topOrBottom();
    }
  };

  useEffect(() => {
    if (!tooltipRef.current) return;
    const wrapper = tooltipRef.current.parentElement;

    let enterTimeout: ReturnType<typeof setTimeout>;
    let leaveTimeout: ReturnType<typeof setTimeout>;

    const mouseEnter = () => {
      leaveTimeout ? clearTimeout(leaveTimeout) : handleAlignIfOutOfViewport();
      enterTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 200);
    };

    const mouseLeave = () => {
      clearTimeout(enterTimeout);
      leaveTimeout = setTimeout(() => {
        handleAlignReset();
        setIsVisible(false);
      }, 200);
    };

    wrapper.addEventListener('mouseenter', mouseEnter);
    wrapper.addEventListener('mouseleave', mouseLeave);
    return () => {
      wrapper.removeEventListener('mouseenter', mouseEnter);
      wrapper.removeEventListener('mouseleave', mouseLeave);
    };
  }, [text, children, localAlignX, localAlignY]);

  console.log('render');

  return (
    <Wrapper className={className} role='tooltip'>
      <ToolTipWrapper
        alignX={localAlignX}
        alignY={localAlignY}
        aria-hidden={!isVisible}
        id={tooltipId}
        ref={tooltipRef}
        role='tooltip'
        visible={isVisible}
      >
        <ToolTipText color='white'>{text}</ToolTipText>
      </ToolTipWrapper>

      <span aria-describedby={tooltipId}>{children}</span>
    </Wrapper>
  );
};
