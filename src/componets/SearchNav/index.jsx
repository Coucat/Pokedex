import React from 'react';
import Dropdown from './dropdown';
import Sort from './sort';
import {
  NavContainer,
  SearchBar,
  SearchInput,
  SearchButton,
  SearchIcon,
  FilterBar,
  EraseFilterBtn,
  XIcon,
} from './styles';

function SearchNav() {
  const options = ['One', 'Two', 'Three'];
  return (
    <NavContainer>
      <SearchBar>
        <SearchInput placeholder="Search your Pokemon..." />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchBar>
      <FilterBar>
        <Dropdown placeholder="Ascending" options={options} color="#000" Background={false} />
        <Sort />
        <Dropdown placeholder="Type" options={options} />
        <Dropdown placeholder="Weakness" options={options} />
        <Dropdown placeholder="Ability" options={options} />
        <Dropdown placeholder="Height" options={options} />
        <Dropdown placeholder="Weight" options={options} />
        <EraseFilterBtn>
          <XIcon />
        </EraseFilterBtn>
      </FilterBar>
    </NavContainer>
  );
}
export default SearchNav;
