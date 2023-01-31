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
  width: clamp(1rem, 80vw, 25rem);
  max-width: max-content;
  // Get alignment from map
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
    // Get alignment from arrow-map
    ${(p) => arrowAlignMap[p.alignY][p.alignX]}
  }
`;

const ToolTipText = styled(Text)`
  position: relative;
  background: var(--color-black);
  padding: ${rem(6)} ${rem(12)};
  border-radius: ${rem(3)};
  width: 100%;
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

    const touchEnter = () => {
      leaveTimeout ? clearTimeout(leaveTimeout) : handleAlignIfOutOfViewport();
      setIsVisible(true);
    };

    const reset = () => {
      clearTimeout(enterTimeout);
      leaveTimeout = setTimeout(() => {
        leaveTimeout = undefined;
        handleAlignReset();
        setIsVisible(false);
      }, 200);
    };

    // Mouse events
    wrapper.addEventListener('mouseenter', mouseEnter);
    wrapper.addEventListener('mouseleave', reset);
    // Touch events
    wrapper.addEventListener('touchstart', touchEnter);
    wrapper.addEventListener('touchend', reset);
    return () => {
      // Mouse events
      wrapper.removeEventListener('mouseenter', mouseEnter);
      wrapper.removeEventListener('mouseleave', reset);
      // Touch events
      wrapper.removeEventListener('touchstart', touchEnter);
      wrapper.removeEventListener('touchend', reset);
    };
  }, [text, children, localAlignX, localAlignY]);

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
