import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  Image,
  Number,
  Name,
  Type,
  TypeContainer,
} from './styles';

function PokemonCard({ name, image, id }) {
  return (
    <CardContainer>
      <Image src={image} alt="" />
      <Number>{id}</Number>
      <Name>{name}</Name>
      <TypeContainer>
        <Type color="grass">Grass</Type>
        <Type color="poison">Poison</Type>
      </TypeContainer>
    </CardContainer>
  );
}
PokemonCard.defaulProps = {
  name: 'PokemonName',
  id: 'N° 000',
  image: '',
};
PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
export default PokemonCard;
