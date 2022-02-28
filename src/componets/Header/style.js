/* eslint-disable no-console */
import styled, {
  keyframes,
} from 'styled-components';
import Icon from '../UI/Icon';

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
    justify-content: left;
    align-items: center;
    z-index: 0;
    border: 2px solid #EEEE;
    min-width: 350px;
`;
export const SectionIcon = styled(Icon)`
    & svg{
        & path{
            fill: #808080;
        }
    }
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
export const Section = styled.div`
    width: 110px;
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
    margin: 0 10px;
    &:hover{
        color: #FF535050;
        ${Line}{
            animation-name: ${growBar};
            animation-fill-mode: both;
            animation-duration: .5s;
            background-color: #FF000050;
        }
        ${SectionIcon}{
            & svg{
                & path{
                    fill: #FF535050;
                }
            }
        }
    }
    &.active{
       color: #FF5350;
       ${Line}{
           background-color: #FF5350;
           animation: none;
           width: 100%;
       }
       ${SectionIcon}{
        & svg{
                & path{
                    fill: #FF5350;
                }
            }
       }
       &:hover{
        background: none;
       }
    }
`;
