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
  setData,
  onlyOne,
}) {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const localData = { ...options };
  const close = () => setIsOpen(false);
  const onOptionClicked = (name, index) => () => {
    if (onlyOne) {
      localData[name].forEach((item) => {
        console.log(item.name === localData[name][index].name);
        if (item.name === localData[name][index].name) {
          console.log('filter 1');
          if (item.active === true) {
            localData[name][index].active = false;
            console.log('filter 2');
          } else { localData[name][index].active = true; console.log('else filter 1'); }
        } else if (item.active === false) { localData[name][index].active = false; console.log('else if 1'); }
      });
    } else localData[name][index].active = !localData[name][index].active;
    setData({ ...localData });
    close();
  };
  useEffect(() => {
    setActive(localData[placeholder].some((item) => item.active));
  }, [localData]);
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
              onClick={onOptionClicked(placeholder, index)}
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
  setData: () => {},
  onlyOne: false,
};
Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.instanceOf(Array)).isRequired,
  color: PropTypes.string,
  background: PropTypes.bool,
  haveIcon: PropTypes.bool,
  setData: PropTypes.func,
  onlyOne: PropTypes.bool,
};
export default Dropdown;
