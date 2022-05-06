import React from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { Direction, Ordering } from '.';
import { Carrot } from './Carrot';

const TH = styled.td<{ align: 'left' | 'right' | 'center'; width: string }>`
  text-align: ${(p) => p.align};
  width: 1fr;
`;

interface Props {
  ordering: Ordering;
  columnKey: string;
  header: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  width?: string;
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
}: Props) => {
  const onClick = () => {
    const isCurrentlySelected = ordering.field === columnKey;
    const direction = isCurrentlySelected
      ? invertedDirection[ordering.direction]
      : 'ASC';
    setOrdering({
      field: columnKey,
      direction: direction,
    });
  };
  return (
    <React.Fragment key={`header_column_${columnKey}`}>
      <TH align={align} width={width}>
        <Flex justify={align === 'right' ? 'flex-end' : 'flex-start'}>
          {header}
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
        <TH align='right' width='30px'>
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
