import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderSection,
  IconPokeball,
  Line,
} from './styles';

function Section({ isActive }) {
  return (
    <HeaderSection isActive={isActive}>
      <IconPokeball />
      Pokedex
      <Line />
    </HeaderSection>
  );
}
Section.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
export default Section;
