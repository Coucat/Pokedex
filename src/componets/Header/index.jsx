import React from 'react';
import PropTypes from 'prop-types';
import Section from './section';
import {
  HeaderContainer,
  HeaderBar,
} from './styles';

function Header({ state }) {
  return (
    <HeaderContainer>
      <HeaderBar>
        <Section state={state} />
        <Section />
      </HeaderBar>
    </HeaderContainer>
  );
}
Header.propTypes = {
  state: PropTypes.string.isRequired,
};
Header.defaulProps = {
  state: 'active',
};
export default Header;
