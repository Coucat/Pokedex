import React from 'react';
import PropTypes from 'prop-types';
import Section from './section';
import {
  HeaderContainer,
  HeaderBar,
} from './styles';

function Header({ name }) {
  return (
    <HeaderContainer>
      <HeaderBar>
        <Section isActive={name === 'Pokedex'} />
        <Section isActive={name === 'Example'} />
      </HeaderBar>
    </HeaderContainer>
  );
}
Header.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Header;
