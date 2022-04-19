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
}) {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const localData = { ...options };
  const close = () => setIsOpen(false);
  const onOptionClicked = (name, index) => () => {
    localData[name][index].active = !localData[name][index].active;
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
};
Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.instanceOf(Array)).isRequired,
  color: PropTypes.string,
  background: PropTypes.bool,
  haveIcon: PropTypes.bool,
  setData: PropTypes.func,
};
export default Dropdown;
