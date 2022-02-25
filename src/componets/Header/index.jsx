import React from 'react';
import {
  Container,
  Headers,
  Section,
  Icon,
  Line,
} from './style';
import pokedexIcon from '../../assets/pokeball.png';

function Header() {
  return (
    <Container>
      <Headers>
        <Section className="active">
          <Icon src={pokedexIcon} />
          Pokedex
          <Line />
        </Section>
        <Section>
          <Icon src={pokedexIcon} />
          Pokedex
          <Line />
        </Section>
        <Section>
          <Icon src={pokedexIcon} />
          Pokedex
          <Line />
        </Section>
      </Headers>
    </Container>
  );
}

export default Header;
