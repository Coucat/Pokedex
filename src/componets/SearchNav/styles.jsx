import styled from 'styled-components';
import { ReactComponent as PokeballICon } from '../../assets/pokeball.svg';
import { ReactComponent as AngleUpIcon } from '../../assets/angleUp.svg';
import { ReactComponent as AngleDownIcon } from '../../assets/angleDown.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

export const NavContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SearchBar = styled.div`
  width: 74%;
  height: 60px;
  background: white;
  border-radius: 10px;
  border: 2px solid #EEEE;
  min-width: 350px;
  min-width: 350px;
  position: relative;
`;
export const SearchInput = styled.input`
  position: absolute;
  padding-left: 20px;
  width: 101%;
  height: 102%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 900;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  &:focus {
    box-shadow: 1px 2px 9px rgba(255, 83, 80, 0.5);
  }
`;
export const SearchButton = styled.button`
  position: absolute;
  top: 7px;
  right: 10px;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #FF5350;
  display: flex;
  align-items: center;
  transition: all .3s ease;
  justify-content: center;
  cursor: pointer;
  &:hover{
    box-shadow: 4px 4px 4px rgba(255, 83, 80, 0.5);
  }
`;
export const SearchIcon = styled(PokeballICon)`
  width: 30px;
  height: 30px;
  path{
    fill: #FFF;
  }
`;
export const FilterBar = styled.div`
  width: 74%;
  height: 40px;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 15px;
`;

export const DropDownContainer = styled.div`
  width: auto;
  height: 36px; 
  cursor: pointer;
`;

export const DropDownHeader = styled.div`
  padding: 10px;
  background-color: ${({ Background }) => (!Background ? '' : '#FFF')};
  box-shadow: ${({ Background }) => (!Background ? '' : '0 2px 3px rgba(0, 0, 0, 0.15)')};
  font-weight: 900;
  font-size: 14px;
  color: ${({ selected, color }) => (selected ? 'rgba(255,83,80,0.8)' : color || '#8F9396')};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px ;
  
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 80px;
  margin-top: 2px;
  margin-left: 5px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.19);
`;

export const DropDownList = styled.ul`
  background: #ffffff;
  box-sizing: border-box;
  color: #8F9396;
  font-size: 14px;
  font-weight: 500;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 25px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  list-style: none;
  &:hover {
    color: #000;
    background-color: lightgray;
  }
`;

export const UpIcon = styled(AngleUpIcon)`
  width: 12px;
  height: 13px;
  margin-left: 10px;
  path{
    fill:  ${({ selected, color }) => (selected ? 'rgba(255,83,80,0.8)' : color || '#8F9396')};
  }
`;
export const DownIcon = styled(AngleDownIcon)`
  width: 12px;
  height: 13px;
  margin-left: 10px;
  path{
    fill: ${({ selected, color }) => (selected ? 'rgba(255,83,80,0.8)' : color || '#8F9396')};
  }
`;
export const SortContainer = styled.div`
  width: 171px;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 900;
  font-size: 14px ;
`;
export const SortInput = styled.input`
  width: 52px;
  height: 30px;
  margin: 0 5px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
  &:focus{
    border: 2px solid #8F9396;
  }
`;
export const EraseFilterBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #FF5350;
  display: flex;
  align-items: center;
  transition: all .3s ease;
  justify-content: center;
  cursor: pointer;
  &:hover{
    box-shadow: 4px 4px 4px rgba(255, 83, 80, 0.5);
  }  
`;
export const XIcon = styled(CloseIcon)`
  width: 26px;
  height: 26px;
  path {
    fill: #FFF;
  }
`;
