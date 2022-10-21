import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { Flex } from '../Flex';
import { Direction, Ordering } from '../../../shared/types';
import { Carrot } from './Carrot';

const TH = styled.th<{ align: 'left' | 'right' | 'center'; width: string; firstItem?: boolean }>`
  text-align: ${(p) => p.align};
  font-size: var(--font-size-14);
  font-weight: bold;
  color: var(--color-grey35);
  width: ${(p) => p.width ?? 'auto'};
  letter-spacing: var(--extra-letter-spacing);
  padding-left: ${(p) => (p.firstItem ? 'var(--spacing-16)' : 0)};
`;

interface Props {
  ordering: Ordering;
  columnKey: string;
  header: string;
  index: number;
  align?: 'left' | 'right' | 'center';
  width?: string;
  isCheckable?: boolean;
  onClickHeader?: () => void;
  isSortable?: boolean;
  setOrdering: (ordering: Ordering) => void;
}

const invertedDirection: { [key: string]: Direction } = {
  ASC: 'DESC',
  DESC: 'ASC',
};

const TableHeaderItem = ({
  ordering,
  columnKey,
  header,
  align = 'left',
  width,
  isSortable,
  setOrdering,
  index,
}: Props) => {
  const onClick = () => {
    const isCurrentlySelected = ordering.field === columnKey;
    const direction = isCurrentlySelected ? invertedDirection[ordering.direction] : 'DESC';
    setOrdering({
      field: columnKey,
      direction: direction,
    });
  };

  return (
    <React.Fragment key={`header_column_${columnKey}`}>
      <TH align={align} width={width} firstItem={index === 0}>
        <Flex justify={align === 'right' ? 'flex-end' : 'flex-start'}>
          {header.toUpperCase()}
          {isSortable && align !== 'right' && (
            <Carrot
              onClick={onClick}
              currentSorting={ordering.field === columnKey}
              direction={ordering.direction}
            />
          )}
        </Flex>
      </TH>
      {isSortable && align === 'right' && (
        <TH align='right' width={rem(30)}>
          <Carrot
            onClick={onClick}
            currentSorting={ordering.field === columnKey}
            direction={ordering.direction}
          />
        </TH>
      )}
    </React.Fragment>
  );
};

export default TableHeaderItem;
