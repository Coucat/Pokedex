import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-width: 350px;
  min-height: 120px;
`;
export const SearchBar = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  border-radius: 10px;
  border: 2px solid #EEEE;
  position: relative;
`;
export const SearchInput = styled.input`
  position: absolute;
  padding-left: 20px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Public Sans', sans-serif;
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
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 10px auto;
  flex-wrap: wrap-reverse;
  user-select: none;
`;

export const DropDownContainer = styled.div`
  width: auto;
  height: 36px; 
  cursor: pointer;
  margin-top: 5px;
`;

export const DropDownHeader = styled.div`
  padding: 10px;
  font-family: 'Arimo', sans-serif;
  background-color: ${({ background }) => (!background ? '' : '#FFF')};
  box-shadow: ${({ background }) => (!background ? '' : '0 2px 3px rgba(0, 0, 0, 0.15)')};
  font-weight: 700;
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
  max-height: 218px;
  margin-top: 2px;
  margin-left: 5px;
  box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.19);
  border: 1px solid #FFF;
`;

export const DropDownList = styled.ul`
  background: #ffffff;
  box-sizing: border-box;
  color: #8F9396;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Arimo', sans-serif;
  overflow-y: auto;
  max-height: 225px;
  &::-webkit-scrollbar{
    width: 5px;
}
&::-webkit-scrollbar-track{
    background-color: none;
}
&::-webkit-scrollbar-thumb{
    background-color: #C4C4C4; 
    border-radius: 10px;
    height: 104px;
}
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
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 14px;
  margin-top: 5px;
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
  margin: 5px 10px 0 0;
  display: ${({ isActiveBtn }) => (isActiveBtn ? 'flex' : 'none')};
  &:hover{
    box-shadow: 4px 4px 4px rgba(255, 83, 80, 0.5);
  }  
`;
