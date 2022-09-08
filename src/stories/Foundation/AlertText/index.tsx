import React from 'react';
import styled from 'styled-components';
import { InfoSmall, WarningFilled } from '@huddly/frokost/havre18px';
import { ErrorSeverity } from '../../../shared/types';
import { GreenTonesEnum, SignalScaleTonesEnum, YellowTonesEnum } from '../../../shared/colors';
import { Text } from '../../../index';
import { Colors } from '../../../shared/colors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: var(--spacing-8);
  font-size: var(--font-size-12);

  i {
    display: inline-flex;
  }
`;

export interface AlertTextProps {
  children?: React.ReactNode;
  className?: string;
  hideIcon?: boolean;
  id?: string;
  severity: ErrorSeverity;
}

const SEVERITY_STYLING: { [key: string]: { color: Colors; icon: JSX.Element } } = {
  success: { color: 'mossGreen', icon: <InfoSmall color={GreenTonesEnum.mossGreen} /> },
  info: { color: 'grey15', icon: <InfoSmall /> },
  warning: { color: 'autumnYellow', icon: <WarningFilled color={YellowTonesEnum.autumnYellow} /> },
  error: {
    color: 'intenseOrange',
    icon: <WarningFilled color={SignalScaleTonesEnum.intenseOrange} />,
  },
};

/**
 * AlertText component
 */
export const AlertText = ({
  children,
  className,
  hideIcon,
  id,
  severity = 'info',
}: AlertTextProps) => {
  return (
    <Wrapper className={className} id={id} role='alert'>
      {!hideIcon && <i aria-hidden='true'>{SEVERITY_STYLING[severity].icon}</i>}
      <Text type='span' color={SEVERITY_STYLING[severity].color}>
        {children}
      </Text>
    </Wrapper>
  );
};
