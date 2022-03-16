import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  UpIcon,
  DownIcon,
} from './styles';

function Dropdown({
  placeholder,
  options,
  color,
  Background,
}) {
  const dropDrownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [itemSelect, setItemSelect] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setItemSelect(true);
    close();
  };
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropDrownRef.current !== null && !dropDrownRef.current.contains(e.target)) {
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
        Background={Background}
        selected={itemSelect}
      >
        {selectedOption || placeholder }
        {isOpen
          ? <UpIcon color={color} selected={itemSelect} />
          : <DownIcon color={color} selected={itemSelect} />}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer ref={dropDrownRef}>
          <DropDownList>
            {options.map((option) => (
              <ListItem
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
Dropdown.defaultProps = {
  color: '#8F9396',
  Background: true,
};
Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  color: PropTypes.string,
  Background: PropTypes.bool,
};
export default Dropdown;
