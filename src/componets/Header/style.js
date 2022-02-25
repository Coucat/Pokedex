/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Headers = styled.div`
    width: 76%;
    height: 70px;
    background: white;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 0;
    border: 2px solid #EEEE;
    min-width: 350px;
`;
export const Icon = styled.img`
    width: 25px;
    filter: grayscale(100%) drop-shadow(0 0 0 white);
    margin-right: 10px;
`;
export const Line = styled.span`
    height: 3px;
    background: gray;
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
export const Section = styled.div`
    width: 110px;
    height: 70px;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    border-radius: 5px;
    margin: 0 10px;
    &:hover{
        color: red;
        background: #eeeeee;
        ${Line}{
            animation-name: ${growBar};
        animation-fill-mode: both;
        animation-duration: 2s;
        background-color: red;
        }
        ${Icon}{
            filter: grayscale(0);
        }
    }
    &.active{
       color: red;
       ${Icon}{
           filter: grayscale(0%);
       };
       ${Line}{
           background-color: red;
           animation: none;
           width: 100%;
       }
       &:hover{
        background: none;
       }
    }
`;
