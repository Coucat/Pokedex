import styled, { keyframes } from 'styled-components';
import { ReactComponent as PokeballIcon } from '../../assets/pokeball.svg';

export const HeaderBar = styled.div`
    width: 80%;
    height: 70px;
    background: white;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    z-index: 0;
    border: 2px solid #EEEE;
    min-width: 350px;
    padding: 0 20px ;
    margin: 20px 10% 10px 10%;
`;
export const IconPokeball = styled(PokeballIcon)`
    width: 25px;
    height: 25px;
    margin-right: 5px ;
`;

export const Line = styled.span`
    height: 3px;
    position: absolute;
    bottom: 0;
`;
const growBar = keyframes`
    from{
        width: 0;
    }
    to{
        width: 100%;
    }
`;
export const HeaderSection = styled.div`
    height: 70px;
    display: flex;
    position: relative;
    flex-direction: row;
    color: #80808080;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    border-radius: 5px;
    padding: 0 10px ;
    ${({ isActive }) => (isActive ? '' : '&:hover')}{
        color: #FF535050;
        ${Line}{
            animation-name: ${growBar};
            animation-fill-mode: both;
            animation-duration: .3s;
            background-color: #FF000050;
        }
        ${IconPokeball} path{
               fill: #FF535050;
        }
    }
    ${({ isActive }) => (!isActive ? '&:active' : '')}{
       color: #FF5350;
       ${Line}{
           background-color: #FF5350;
           animation: none;
           width: 100%;
       }
       ${IconPokeball} path{
            fill: #FF5350;
       }
       &:hover{
        background: none;
       };
    };
`;
