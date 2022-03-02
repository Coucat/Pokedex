import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderSection,
  IconPokeball,
  Line,
} from './styles';

function Section({ active }) {
  return (
    <HeaderSection className={active}>
      <IconPokeball />
      Pokedex
      <Line />
    </HeaderSection>
  );
}
Section.defaulProps = {
  active: 'active',
};
Section.propTypes = {
  active: PropTypes.string.isRequired,
};
export default Section;
