import React from 'react';
import Section from './section';
import {
  HeaderContainer,
  HeaderBar,
} from './styles';

function Header() {
  return (
    <HeaderContainer>
      <HeaderBar>
        <Section active="active" />
        <Section />
      </HeaderBar>
    </HeaderContainer>
  );
}

export default Header;
