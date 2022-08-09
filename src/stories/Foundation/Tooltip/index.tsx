import React, { useRef, useEffect, useId } from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

const Wrapper = styled.div`
  position: relative;
`;

const ToolTipWrapper = styled.div`
  display: flex;
  visibility: hidden;
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

const setCursorPath = (tooltip: HTMLElement, trigger: HTMLElement) => {
  if (document.querySelector('svg')) {
    document.querySelector('svg').remove();
  }

  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const triggerWidth = trigger.offsetWidth;
  const pathHeight =
    trigger.getBoundingClientRect().bottom -
    tooltip.getBoundingClientRect().bottom +
    tooltipHeight;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.cssText = `
  position: absolute;
  bottom: 0;
  left: ${triggerWidth / 2 - tooltipWidth / 2}px;
  width: ${tooltipWidth}px;
  height: ${pathHeight}px;
  pointer-events: none;`;

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    `M0 0 
    L${tooltipWidth} 0
    L${tooltipWidth} ${tooltipHeight}
    L${(tooltipWidth - triggerWidth) / 2 + triggerWidth - 10} ${pathHeight} 
    L${(tooltipWidth - triggerWidth) / 2 + 10} ${pathHeight} 
    L0 ${tooltipHeight}
    Z`
  );
  path.style.fill = 'none';
  path.style.pointerEvents = 'all';

  // Debug
  // path.setAttribute('stroke-dasharray', '2');
  // path.setAttribute('stroke', 'gray');
  // path.setAttribute('stroke-linecap', 'round');

  svg.appendChild(path);
  tooltip.parentElement.prepend(svg);

  const mouseEnter = () => {
    tooltip.style.transitionDelay = '200ms';
    tooltip.style.visibility = 'visible';
    tooltip.setAttribute('aria-hidden', 'false');
  };
  const mouseLeave = () => {
    tooltip.style.transitionDelay = '0ms';
    tooltip.style.visibility = 'hidden';
    tooltip.setAttribute('aria-hidden', 'true');
  };

  trigger.addEventListener('mouseenter', mouseEnter);
  tooltip.parentElement.addEventListener('mouseleave', mouseLeave);

  return () => {
    trigger.removeEventListener('mouseenter', mouseEnter);
    tooltip.parentElement.removeEventListener('mouseleave', mouseLeave);
    svg.remove();
  };
};

export interface Props {
  children: React.ReactNode;
  className?: string;
  text: string;
}

/**
 * Tooltip component
 */
export const Tooltip = ({ children, className, text }: Props) => {
  const tooltipId = useId();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!tooltipRef.current || !triggerRef.current) return;
    setCursorPath(tooltipRef.current, triggerRef.current);
  }, [text, children]);

  return (
    <Wrapper className={className} role='tooltip'>
      <ToolTipWrapper
        aria-hidden='true'
        id={tooltipId}
        ref={tooltipRef}
        role='tooltip'
      >
        <ToolTipText color='white'>{text}</ToolTipText>
      </ToolTipWrapper>

      <span ref={triggerRef} aria-describedby={tooltipId}>
        {children}
      </span>
    </Wrapper>
  );
};
