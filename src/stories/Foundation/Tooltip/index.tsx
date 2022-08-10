import React, { useState, useRef, useEffect, useId } from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

const Wrapper = styled.div`
  position: relative;
`;

const ToolTipWrapper = styled.div<{ visible: boolean }>`
  display: flex;
  visibility: ${(p) => (p.visible ? 'visible' : 'hidden')};
  transition-delay: ${(p) => (p.visible ? '200ms' : '0ms')};
  position: absolute;
  left: 50%;
  justify-content: center;
  align-items: center;
  width: max-content;
  max-width: 400px;
  transform: translate(-50%, calc(-100% - 10px));

  &:before {
    position: absolute;
    top: 100%;
    width: 0;
    height: 0;
    border-top: 5px solid black;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: '';
  }
`;

const ToolTipText = styled(Text)`
  position: relative;
  background: black;
  padding: 6px 12px;
  border-radius: 2px;
`;

export interface Props {
  children: React.ReactNode;
  className?: string;
  text: string;
}

/**
 * Tooltip component
 */
export const Tooltip = ({ children, className, text }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!tooltipRef.current || !triggerRef.current) return;

    const tooltip = tooltipRef.current;
    const trigger = triggerRef.current;

    if (document.querySelector('svg')) {
      document.querySelector('svg').remove();
    }

    const tooltipSize = {
      x: tooltip.offsetWidth,
      y: tooltip.offsetHeight,
    };
    const triggerSize = {
      x: trigger.offsetWidth,
      y: trigger.offsetHeight,
    };
    const pathHeight =
      trigger.getBoundingClientRect().bottom -
      tooltip.getBoundingClientRect().bottom +
      tooltipSize.y;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.cssText = `
  position: absolute;
  bottom: 0;
  left: ${triggerSize.x / 2 - tooltipSize.x / 2}px;
  width: ${tooltipSize.x}px;
  height: ${pathHeight}px;
  pointer-events: none;`;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
      'd',
      `M0 0 
    L${tooltipSize.x} 0
    L${tooltipSize.x} ${tooltipSize.y}
    L${(tooltipSize.x - triggerSize.x) / 2 + triggerSize.x - 10} ${pathHeight} 
    L${(tooltipSize.x - triggerSize.x) / 2 + 10} ${pathHeight} 
    L0 ${tooltipSize.y}
    Z`
    );
    path.style.fill = 'none';
    path.style.pointerEvents = 'all';

    svg.appendChild(path);
    tooltip.parentElement.prepend(svg);

    const mouseEnter = () => {
      setIsVisible(true);
    };
    const mouseLeave = () => {
      setIsVisible(false);
    };

    trigger.addEventListener('mouseenter', mouseEnter);
    tooltip.parentElement.addEventListener('mouseleave', mouseLeave);

    return () => {
      trigger.removeEventListener('mouseenter', mouseEnter);
      tooltip.parentElement.removeEventListener('mouseleave', mouseLeave);
      svg.remove();
    };
  }, [text, children]);

  return (
    <Wrapper className={className} role='tooltip'>
      <ToolTipWrapper
        aria-hidden={!isVisible}
        id={tooltipId}
        ref={tooltipRef}
        role='tooltip'
        visible={isVisible}
      >
        <ToolTipText color='white'>{text}</ToolTipText>
      </ToolTipWrapper>

      <span ref={triggerRef} aria-describedby={tooltipId}>
        {children}
      </span>
    </Wrapper>
  );
};
