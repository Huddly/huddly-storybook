import React, { useState, useRef, useEffect, useId } from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import rem from '../../../shared/pxToRem';

const Wrapper = styled.div`
  position: relative;
`;

const ToolTipWrapper = styled.div<{
  visible: boolean;
  horizontalAlign: string;
  verticalAlign: string;
}>`
  display: flex;
  visibility: ${(p) => (p.visible ? 'visible' : 'hidden')};
  position: absolute;
  left: ${(p) =>
    p.horizontalAlign === 'left' ? 0 : p.horizontalAlign === 'center' ? '50%' : 'auto'};
  right: ${(p) => (p.horizontalAlign === 'right' ? 0 : 'auto')};
  justify-content: ${(p) =>
    p.horizontalAlign === 'left'
      ? 'flex-start' // Left
      : p.horizontalAlign === 'right'
      ? 'flex-end' // Right
      : 'center'}; // Center
  align-items: center;
  width: max-content;
  max-width: 400px;
  transform: translateY(
      ${(p) => (p.verticalAlign === 'top' ? 'calc(-100% - 10px)' : 'calc(100% + 10px)')}
    )
    translateX(${(p) => (p.horizontalAlign === 'center' ? '-50%' : '0')});

  &:before {
    position: absolute;
    top: ${(p) => (p.verticalAlign === 'top' ? '100%' : 'auto')};
    bottom: ${(p) => (p.verticalAlign === 'bottom' ? '100%' : 'auto')};
    transform: ${(p) => (p.verticalAlign === 'top' ? 'rotate(0deg)' : 'rotate(180deg)')};
    width: 0;
    height: 0;
    border-top: 5px solid black;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: '';
    margin-right: 12px;
    margin-left: 12px;
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
  /**
   * @default 'center'
   */
  align?: 'left' | 'right' | 'center';
}

/**
 * Tooltip component
 */
export const Tooltip = ({ children, className, text, align = 'center' }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [verticalAlign, setVerticalAlign] = useState<'top' | 'bottom'>('bottom');
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

    const mousePath = `M0 ${_verticalAlign === 'top' ? 0 : pathHeight} 
          L${tooltipSize.x} ${_verticalAlign === 'top' ? 0 : pathHeight}
          L${tooltipSize.x} ${tooltipSize.y}
          L${
            align === 'center'
              ? (tooltipSize.x - triggerSize.x) / 2 + triggerSize.x - 10 // center align
              : align === 'right'
              ? tooltipSize.x // right align
              : triggerSize.x // left align
          } ${_verticalAlign === 'top' ? pathHeight : 0}
          L${
            align === 'center'
              ? (tooltipSize.x - triggerSize.x) / 2 + 10 // center align
              : align === 'right'
              ? tooltipSize.x - triggerSize.x // right align
              : 0 // left align
          } ${_verticalAlign === 'top' ? pathHeight : 0}
          L0 ${tooltipSize.y}
          Z`;
  }, [isVisible]);

  useEffect(() => {
    if (!tooltipRef.current || !triggerRef.current) return;

    const tooltip = tooltipRef.current;
    const trigger = triggerRef.current;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    let visibilityTimeout: ReturnType<typeof setTimeout>;

    const mouseEnter = () => {
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

      svg.style.position = 'absolute';
      svg.style.right = align === 'right' ? '0' : 'auto';
      svg.style.left = align === 'left' ? '0' : align === 'center' ? '50%' : 'auto';
      svg.style.width = `${tooltipSize.x}px`;
      svg.style.height = `${pathHeight}px`;
      svg.style.pointerEvents = 'none';
      svg.style.transform = `translateX(${align === 'center' ? '-50%' : '0'})`;

      path.style.fill = 'none';
      path.style.pointerEvents = 'all';
      path.style.stroke = 'red';
      path.style.strokeWidth = '2px';
      path.style.strokeDasharray = '5, 5';

      svg.appendChild(path);
      tooltip.parentElement.prepend(svg);

      // Calculate vertical align, align bottom if tooltip is too close to the top, else align top
      // calculate the top value by using our exisiting tooltip and trigger elements
      const tooltipTop = tooltipSize.y + triggerSize.y + 10;
      const windowTop = window.scrollY;
      const _verticalAlign = tooltipTop + windowTop > window.innerHeight ? 'top' : 'bottom';

      console.log({
        _verticalAlign,
      });

      svg.style.top = _verticalAlign === 'top' ? 'auto' : '0';
      svg.style.bottom = _verticalAlign === 'bottom' ? 'auto' : '0';
      setVerticalAlign(_verticalAlign);

      const mousePath = `M0 ${_verticalAlign === 'top' ? 0 : pathHeight} 
          L${tooltipSize.x} ${_verticalAlign === 'top' ? 0 : pathHeight}
          L${tooltipSize.x} ${tooltipSize.y}
          L${
            align === 'center'
              ? (tooltipSize.x - triggerSize.x) / 2 + triggerSize.x - 10 // center align
              : align === 'right'
              ? tooltipSize.x // right align
              : triggerSize.x // left align
          } ${_verticalAlign === 'top' ? pathHeight : 0}
          L${
            align === 'center'
              ? (tooltipSize.x - triggerSize.x) / 2 + 10 // center align
              : align === 'right'
              ? tooltipSize.x - triggerSize.x // right align
              : 0 // left align
          } ${_verticalAlign === 'top' ? pathHeight : 0}
          L0 ${tooltipSize.y}
          Z`;

      visibilityTimeout = setTimeout(() => {
        setIsVisible(true);

        path.setAttribute('d', mousePath);
      }, 200);
    };

    const mouseLeave = () => {
      clearTimeout(visibilityTimeout);
      setIsVisible(false);
      setVerticalAlign('top');
      path.removeAttribute('d');
    };

    trigger.addEventListener('mouseenter', mouseEnter);
    tooltip.parentElement.addEventListener('mouseleave', mouseLeave);

    return () => {
      trigger.removeEventListener('mouseenter', mouseEnter);
      tooltip.parentElement.removeEventListener('mouseleave', mouseLeave);
      svg.remove();
    };
  }, [text, children, align]);

  return (
    <Wrapper className={className} role='tooltip'>
      <ToolTipWrapper
        horizontalAlign={align}
        verticalAlign={verticalAlign}
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
