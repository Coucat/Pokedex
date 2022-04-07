import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from './styles';
import Icon from '../Icon/index';

function Dropdown({
  placeholder,
  options,
  color,
  background,
  haveIcon,
  setFilters,
  filters,
  setActiveBtn,
  setData,
}) {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const localFilters = { ...filters };
  const localData = { ...options };
  const close = () => setIsOpen(false);
  const addFilter = (name, value) => {
    const lower = name.toLowerCase();
    if (lower === 'ascending') localFilters[lower] = [value];
    else localFilters[lower] = [...localFilters[lower], value];
    setFilters({ ...localFilters });
  };
  const onOptionClicked = (name, value, index) => () => {
    addFilter(name, value);
    setActiveBtn(true);
    localData[name][index].active = !localData[name][index].active;
    setActive(localData[name].some((item) => item.active));
    setData({ ...localData });
    close();
  };
  const toggling = () => setIsOpen(!isOpen);
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropDownRef.current !== null && !dropDownRef.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen) window.addEventListener('click', pageClickEvent);
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen]);
  return (
    <DropDownContainer>
      <DropDownHeader
        onClick={toggling}
        color={color}
        background={background}
        selected={isActive}
      >
        { placeholder }
        {isOpen
          ? <Icon name="UpIcon" fill={color} width="15px" height="15px" margin="0 0 0 5px" selected={isActive} />
          : <Icon name="DownIcon" fill={color} width="15px" height="15px" margin="0 0  0 5px" selected={isActive} />}
      </DropDownHeader>
      {isOpen && (
      <DropDownListContainer ref={dropDownRef}>
        <DropDownList>
          {
          options[placeholder].map((option, index) => (
            <ListItem
              onClick={onOptionClicked(placeholder, option, index)}
              key={Math.random()}
              selected={option.active}
            >
              {haveIcon ? (
                <Icon
                  name={option.name}
                  width="15px"
                  height="15px"
                  margin="0 10px 0 0"
                  selected={option.active}
                  fill={color}
                />
              ) : ''}
              {option.name}
            </ListItem>
          ))
        }
        </DropDownList>
      </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
Dropdown.defaultProps = {
  color: '#8F9396',
  background: true,
  haveIcon: false,
  setActiveBtn: () => {},
  setData: () => {},
};
Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  color: PropTypes.string,
  background: PropTypes.bool,
  haveIcon: PropTypes.bool,
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.instanceOf(Array)).isRequired,
  setActiveBtn: PropTypes.func,
  setData: PropTypes.func,
};
export default Dropdown;
