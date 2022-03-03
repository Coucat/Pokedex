import styled, { keyframes } from 'styled-components';
import { ReactComponent as PokeballIcon } from '../../assets/pokeball.svg';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const HeaderBar = styled.div`
    width: 76%;
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

`;
export const IconPokeball = styled(PokeballIcon)`
    width: 25px;
    height: 25px;
    margin: 0 5px 0 13px;
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
    &:hover{
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
    &.active{
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
       }
    }
    &:first-child{
        margin-left: 30px;
    }
`;
