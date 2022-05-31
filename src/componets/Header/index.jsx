import React from 'react';
import PropTypes from 'prop-types';
import Section from './section';
import {
  HeaderBar,
} from './styles';

function Header({ name = 'Pokedex' }) {
  return (
    <HeaderBar>
      <Section isActive={name === 'Pokedex'} />
      <Section isActive={name === 'Example'} />
    </HeaderBar>
  );
}
Header.defaultProps = {
  name: 'Pokedex',
};
Header.propTypes = {
  name: PropTypes.string,
};
export default Header;
