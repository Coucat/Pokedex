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

function PokemonCard({
  name, image, id, types,
}) {
  return (
    <CardContainer>
      <Image src={image} alt={`${name} Image`} />
      <Number>{id}</Number>
      <Name>{name}</Name>
      <TypeContainer>
        {
         types.map((item) => <Type type={item.type.name}>{item.type.name}</Type>)
         }
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
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PokemonCard;
