import React from 'react';
import { FromToContainer, FromToInput } from './styles';

function FromTo() {
  return (
    <FromToContainer>
      from
      <FromToInput type="number" min="0" placeholder="-" />
      to
      <FromToInput type="number" min="0" placeholder="-" />
    </FromToContainer>
  );
}
export default FromTo;
