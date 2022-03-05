import React from 'react';
import PropTypes from 'prop-types';
import WriteNumber from '../../utils';
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
    <CardContainer key={id}>
      <Image src={image} alt={`${name} Image`} />
      <Number>{WriteNumber(id)}</Number>
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
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PokemonCard;
