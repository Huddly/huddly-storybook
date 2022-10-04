import React from 'react';
import { ErrorSeverity } from '../../../shared/types';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';

const getColorForSeverity: {
  [key in ErrorSeverity]: { border: string; background: string; color: string };
} = {
  warning: { border: 'sunYellow', background: 'cheesecakeYellow', color: 'autumnYellow' },
  error: { border: 'petitePink', background: 'whisperCoral', color: 'redWine' },
  success: { border: 'springGreen', background: 'whisperGreen', color: 'oreganoGreen' },
  neutral: { border: 'grey76', background: 'grey91', color: 'grey35' },
  info: { border: 'plumbagoBlue', background: 'whisperBlue', color: 'royalBlue' },
};

const Wrapper = styled.span<{ severity: ErrorSeverity }>`
  border: ${(p) => `${rem(2)} solid var(--color-${getColorForSeverity[p.severity].border})`};
  background: ${(p) => `var(--color-${getColorForSeverity[p.severity].background})`};
  color: ${(p) => `var(--color-${getColorForSeverity[p.severity].color})`};
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--border-radius);
  font-size: ${rem(12)};
  letter-spacing: 0.02em;
  font-weight: 700;
`;

export interface StatusTagProps {
  className?: string;
  children: string;
  severity: ErrorSeverity;
}

/**
 * StatusTag component
 */
export const StatusTag = ({ className, children, severity }: StatusTagProps) => {
  return (
    <Wrapper severity={severity} className={className} role='status'>
      {children.toUpperCase()}
    </Wrapper>
  );
};
