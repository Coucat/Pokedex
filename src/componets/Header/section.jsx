import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderSection,
  IconPokeball,
  Line,
} from './styles';

function Section({ state }) {
  return (
    <HeaderSection className={state}>
      <IconPokeball />
      Pokedex
      <Line />
    </HeaderSection>
  );
}
Section.propTypes = {
  state: PropTypes.string.isRequired,
};
Section.defaulProps = {
  state: 'active',
};
export default Section;
