import React from 'react';
import {
  Container,
  Headers,
  Section,
  SectionIcon,
  Line,
} from './style';

function Header() {
  return (
    <Container>
      <Headers>
        <Section className="active">
          <SectionIcon name="pokeballIcon" />
          Pokedex
          <Line />
        </Section>
        <Section>
          <SectionIcon name="pokeballIcon" />
          Pokedex
          <Line />
        </Section>
        <Section>
          <SectionIcon name="pokeballIcon" />
          Pokedex
          <Line />
        </Section>
      </Headers>
    </Container>
  );
}

export default Header;
