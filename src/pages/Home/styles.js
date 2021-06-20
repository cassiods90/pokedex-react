import styled from 'styled-components'
import { variables } from '../../theme'
import bg from '../../assets/images/charizard.png'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: calc(100vh - 100px);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;

    &:after {
        content: "";
        background: url(${bg}) no-repeat center center;
        width: 800px;
        height: 850px;
        background-size: contain;

        @media(max-width: 1370px) {
            width: 600px;
            height: 550px;
        }
    }
`

export const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
`

export const Title = styled.h1`
    font-size: ${variables.fontSize.title};
    margin-bottom: 0;
    color: ${variables.themeColors.titleColor};
    text-align: left;
`

export const SubTitle = styled.span`
    display: flex;
    align-items: center;
    margin: 60px 0 15px;
    font-size: ${variables.fontSize.subTitle};
    text-align: left;
`