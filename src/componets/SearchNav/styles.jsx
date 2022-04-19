import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SearchBar = styled.div`
  width: 80%;
  height: 60px;
  background: white;
  border-radius: 10px;
  border: 2px solid #EEEE;
  position: relative;
  min-width: 350px;
  min-width: 350px;
`;
export const SearchInput = styled.input`
  position: absolute;
  padding-left: 20px;
  width: 100%;
  height: 100%;
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
    box-shadow: 4px 4px 4px rgba(255, 83, 80, .5);
  }
`;
export const FilterBar = styled.div`
  width: 80%;
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
  background-color: ${({ background }) => (!background ? '' : '#FFF')};
  box-shadow: ${({ background }) => (!background ? '' : '0 2px 3px rgba(0, 0, 0, 0.15)')};
  font-weight: 900;
  font-size: 14px;
  color: ${({ selected, color }) => (selected ? 'rgba(255,83,80,0.8)' : color || '#8F9396')};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px ;
  text-transform: capitalize;
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100px;
  max-height: 150px;
  overflow: auto;
  margin-top: 2px;
  margin-left: 5px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.19);
  border: 1px solid #FFF;
  &::-webkit-scrollbar{
    width: 0;
  }
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
  ${({ selected }) => (!selected ? '&:active' : '')}{
    color: rgba(255,83,80,0.8);
    background-color: #F5F5F5;
  }
`;
export const FromToContainer = styled.div`
  width: 171px;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 900;
  font-size: 14px ;
`;
export const FromToInput = styled.input`
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
  align-items: center;
  transition: all .3s ease;
  justify-content: center;
  cursor: pointer;
  display: ${({ isActiveBtn }) => (isActiveBtn ? 'flex' : 'none')};
  &:hover{
    box-shadow: 4px 4px 4px rgba(255, 83, 80, 0.5);
  }  
`;
