import React from 'react';
import { SortContainer, SortInput } from './styles';

function Sort() {
  return (
    <SortContainer>
      from
      <SortInput type="number" min="0" placeholder="-" />
      to
      <SortInput type="number" min="0" placeholder="-" />
    </SortContainer>
  );
}
export default Sort;
