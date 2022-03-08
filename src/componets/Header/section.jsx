import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderSection,
  IconPokeball,
  Line,
} from './styles';

function Section({ isActive, section }) {
  return (
    <HeaderSection isActive={isActive} section={section}>
      <IconPokeball />
      Pokedex
      <Line />
    </HeaderSection>
  );
}
Section.propTypes = {
  isActive: PropTypes.bool.isRequired,
  section: PropTypes.string.isRequired,
};
export default Section;
