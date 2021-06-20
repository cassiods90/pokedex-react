import styled from 'styled-components'
import { variables } from '../../theme'
import { LightBulb } from '@styled-icons/heroicons-solid/LightBulb'

export const Container = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    width: 100%;
	min-height: calc(100vh - 72px);
` 

export const MainContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 550px;
` 

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 50%;

    img {
        filter: brightness${({ correctWrong }) => correctWrong === false ? '(0%)' : '(100%)'};
        width: 100%;
        max-width: 475px;
        transition: ${({ correctWrong }) => correctWrong === false ? 'all 0.5s ease' : 'all 4s ease'};
    }
` 

export const LightBulbIcon = styled(LightBulb)`
    color: ${variables.themeColors.white};
    font-size: ${variables.fontSize.text};
    font-weight: bold;
    text-align: center;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    transition: all 1s ease;

    &:hover {
        color: ${variables.themeColors.secColor};
    }
`

export const Hint = styled.span`
    color: ${variables.themeColors.white};
    font-size: ${variables.fontSize.text};
    text-align: center;

    p {
        color: ${variables.themeColors.white};
        font-size: ${variables.fontSize.pokeCardTitle};
        font-weight: 700;
        text-align: center;
        margin: 10px 0 0 0;
        transition: all 4s ease;
        opacity: 0;
        text-transform: capitalize;
    }

    &:hover {
        p {
            opacity: 1;
        }
    }
`

export const RightSide = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
` 

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-height: 250px;
    justify-content: space-between;
`

export const Title = styled.h1`
    font-family: 'Permanent Marker', cursive;
    color: ${variables.themeColors.secColor};
    font-size: ${variables.fontSize.pokeName};
    font-weight: bold;
    letter-spacing: 5px;
    text-align: center;
    transition: all 4s ease;
`  

export const InputContent = styled.div`

`

export const Input = styled.input`
    padding: 0 10px;
    width: 300px;
    height: 45px;
    border: 0;
    border-bottom: 2px solid ${variables.themeColors.baseColor};
    font-size: ${variables.fontSize.text};
    background: rgba(255, 255, 255, 0.1);
    color: ${variables.themeColors.textColor};
    transition: all 1s ease;

    &:focus-visible {
        outline: none;
        border-color: ${variables.themeColors.secColor};
    }
` 

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Button = styled.button`
    background: none;
    color: ${variables.themeColors.secColor};
    font-size: ${variables.fontSize.pokeInputButton};
    padding: 8px;
    border-radius: 5px;
    border: 1px solid ${variables.themeColors.baseColor};
    cursor: pointer;
    height: 45px;
    transition: all 1s ease;
    width: 300px;
    
    &:hover {
        border-color: ${variables.themeColors.secColor};
    }
`

export const Scoreboard = styled.span`
    color: ${variables.themeColors.white};
    font-size: ${variables.fontSize.pokeInputButton};
    text-align: center;
`