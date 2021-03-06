import styled, { keyframes } from 'styled-components';

const typeBackground = {
  grass: '#56be36',
  fire: '#E64B50',
  poison: '#b97fc9',
  flying: '#3dc7ef',
  water: '#4592c4',
  bug: '#74E600',
  normal: '#a4acaf',
  electric: '#eed535',
  rock: '#a38c21',
  ghost: '#7b62a3',
  psychic: '#f366b9',
  dragon: 'linear-gradient(0deg,#53A4CF 23%,#f16e57 79%)',
  fairy: '#fdb9e9',
  dark: '#707070 ',
  steel: '#9eb7b8',
  ice: '#51c4e7',
  ground: '#ab9842',
  fighting: '#d56723',
};
export const ContainerGrid = styled.div`
    width: 80%; 
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px auto;
    user-select: none;
`;
const updown = keyframes`
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-8px);   
    }
    100%{
        transform: translateY(0px);   
    }
`;
export const CardContainer = styled.div`
  width: 210px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 10px;
  margin: 20px 10px;
  padding: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  cursor: pointer;
  line-height: 22px;
  box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.2) ;
  &:hover{
      animation-name: ${updown};
      animation-duration: .5s;
      animation-iteration-count: 1;
  }
`;

export const Image = styled.img`
    width: 70px;
    height: 60px;
    position: absolute;
    top: -30px;
    object-fit: contain;
    filter:drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.3)); ;
`;
export const Number = styled.span` 
    font-size: 15px;
    color: #8F9396;
    margin-top: 10px;
`;
export const Name = styled.span`
    font-weight: 900;
    font-size: 19px;
    color: #000;
`;
export const TypeContainer = styled.div`
    width: 160px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Type = styled.div`
    width: auto;
    height: 25px;
    margin: 0 5px;
    ${({ type }) => (typeBackground[type] ? `background: ${typeBackground[type]};` : 'background: white;')}
    padding: 2px 5px;
    border-radius: 4px;
    color: white;
    text-transform: capitalize;
`;
