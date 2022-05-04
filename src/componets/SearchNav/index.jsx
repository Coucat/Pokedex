import React, { useState, useEffect } from 'react';
import Dropdown from './dropdown';
import FromTo from './fromTo';
import {
  NavContainer,
  SearchBar,
  SearchInput,
  SearchButton,
  FilterBar,
  EraseFilterBtn,
} from './styles';
import Icon from '../Icon';

function SearchNav() {
  const localData = {
    weakness: [
      { name: 'Bug', active: false },
      { name: 'Dark', active: false },
      { name: 'Dragon', active: false },
      { name: 'Electric', active: false },
      { name: 'Fairy', active: false },
      { name: 'Fighting', active: false },
      { name: 'Fire', active: false },
      { name: 'Flying', active: false },
      { name: 'Ghost', active: false },
      { name: 'Normal', active: false },
      { name: 'Water', active: false },
      { name: 'Grass', active: false },
      { name: 'Ground', active: false },
      { name: 'Ice', active: false },
      { name: 'Poison', active: false },
      { name: 'Psychic', active: false },
      { name: 'Rock', active: false },
      { name: 'Steel', active: false },
    ],
    ability: [
      { name: 'Stench', active: false },
      { name: 'Drizzle', active: false },
      { name: 'Speed-Boost', active: false },
      { name: 'Battle-armor', active: false },
      { name: 'Sturdy', active: false },
      { name: 'Damp', active: false },
      { name: 'Limber', active: false },
      { name: 'Sand-veil', active: false },
    ],
    weight: [
      { name: 'Light', active: false },
      { name: 'Medium', active: false },
      { name: 'Heavy', active: false },
    ],
    type: [
      { name: 'Bug', active: false },
      { name: 'Dark', active: false },
      { name: 'Dragon', active: false },
      { name: 'Electric', active: false },
      { name: 'Fairy', active: false },
      { name: 'Fighting', active: false },
      { name: 'Fire', active: false },
      { name: 'Flying', active: false },
      { name: 'Ghost', active: false },
      { name: 'Normal', active: false },
      { name: 'Water', active: false },
      { name: 'Grass', active: false },
      { name: 'Ground', active: false },
      { name: 'Ice', active: false },
      { name: 'Poison', active: false },
      { name: 'Psychic', active: false },
      { name: 'Rock', active: false },
      { name: 'Steel', active: false },
    ],
    height: [
      { name: 'Small', active: false },
      { name: 'Medium', active: false },
      { name: 'Large', active: false },
    ],
  };
  const [order, setOrder] = useState([
    { name: 'Ascending', active: true },
    { name: 'Descending', active: false },
    { name: 'A-Z', active: false },
    { name: 'Z-A', active: false },
  ]);
  const [isActiveBtn, setActiveBtn] = useState(false);
  const [data, setData] = useState({ ...localData });
  const clean = () => {
    setData({ ...localData });
  };
  useEffect(() => {
    const allObjects = Object.keys(data).map(
      (item) => data[item].some((element) => element.active),
    );
    setActiveBtn(allObjects.some((item) => item));
  }, [data]);
  const sendData = () => {
    const filterData = Object.keys(data).map(
      (item) => data[item].filter((element) => element.active),
    );
    // eslint-disable-next-line no-console
    console.log(filterData);
  };
  const updateData = (property, index) => {
    const updatingData = ({ ...data });
    if (property === 'ability') {
      updatingData.ability = data.ability.map((item) => ({ name: item.name, active: false }));
    }
    updatingData[property][index].active = !data[property][index].active;
    setData({ ...updatingData });
  };
  const updateOrder = (index) => {
    const updatingData = order.map((item) => ({ name: item.name, active: false }));
    updatingData[index].active = !order[index].active;
    setOrder([...updatingData]);
  };

  const checkActive = (property) => data[property].some((item) => item.active);

  const {
    type, ability, height, weight, weakness,
  } = data;
  return (
    <NavContainer>
      <SearchBar>
        <SearchInput placeholder="Search your Pokemon..." />
        <SearchButton onClick={sendData}>
          <Icon name="pkicon" width="30px" height="30px" fill="#FFF" />
        </SearchButton>
      </SearchBar>
      <FilterBar>
        <Dropdown placeholder={order.find((item) => item.active)?.name} onlyOne options={order} color="#000" background={false} setData={(index) => updateOrder(index)} />
        <FromTo />
        <Dropdown placeholder="type" options={type} haveIcon setData={(index) => updateData('type', index)} isActive={checkActive('type')} />
        <Dropdown placeholder="weakness" options={weakness} haveIcon setData={(index) => updateData('weakness', index)} isActive={checkActive('weakness')} />
        <Dropdown placeholder={ability.find((item) => item.active)?.name || 'ability'} options={ability} setData={(index) => updateData('ability', index)} isActive={checkActive('ability')} />
        <Dropdown placeholder="height" options={height} setData={(index) => updateData('height', index)} isActive={checkActive('height')} />
        <Dropdown placeholder="weight" options={weight} setData={(index) => updateData('weight', index)} isActive={checkActive('weight')} />
        <EraseFilterBtn onClick={clean} isActiveBtn={isActiveBtn}>
          <Icon name="crossicon" width="20px" height="20px" fill="#FFF" />
        </EraseFilterBtn>
      </FilterBar>
    </NavContainer>
  );
}
export default SearchNav;
