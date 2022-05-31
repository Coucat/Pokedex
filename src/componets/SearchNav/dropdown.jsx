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
  isActive,
}) {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const onOptionClicked = (index) => () => {
    setData(index);
  };
  const toggling = () => setIsOpen(!isOpen);
  useEffect(() => {
    const pageClickEvent = (e) => {
      const {
        bottom,
        height,
        left,
        right,
      } = e.target.getBoundingClientRect();
      if (bottom && height && left && right) setIsOpen(false);
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
        {placeholder}
        <Icon name={isOpen ? 'UpIcon' : 'DownIcon'} fill={color} width="15px" height="15px" margin="0 0 0 5px" selected={isActive} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer ref={dropDownRef}>
          <DropDownList>
            {
              options.map((option, index) => (
                <ListItem
                  onClick={onOptionClicked(index)}
                  key={Math.random()}
                  selected={option.active}
                >
                  {haveIcon && (
                    <Icon
                      name={option.name}
                      width="15px"
                      height="15px"
                      margin="0 10px 0 0"
                      selected={option.active}
                      fill={color}
                    />
                  )}
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
  setData: () => { },
  isActive: false,
};
Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.instanceOf(Array)).isRequired,
  color: PropTypes.string,
  background: PropTypes.bool,
  haveIcon: PropTypes.bool,
  setData: PropTypes.func,
  isActive: PropTypes.bool,
};

export default Dropdown;
