import styled from 'styled-components'
import { variables } from '../../theme'
import { PersonOutline } from '@styled-icons/evaicons-outline/PersonOutline'
import { LinkedinOutline } from '@styled-icons/evaicons-outline/LinkedinOutline'
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline'

export const Container = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    width: 100%;
    min-height: calc(100vh - 90px);
    margin-top: 25px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`
    color: ${variables.themeColors.white};
    font-size: ${variables.fontSize.pokeCardTitle};
    font-weight: 400;
`

export const SubTitle = styled.span`
    color: ${variables.themeColors.white};
    font-size: ${variables.fontSize.pokeInputButton};
    font-weight: 400;
`

export const Contact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const SocialContact = styled.span`

`

export const SocialContactLink = styled.a`
    color: ${variables.themeColors.white};
    font-size: ${variables.fontSize.text};
    font-weight: 400;
    padding: 0 40px;
`

export const PersonOutlineIcon = styled(PersonOutline)`
    color: ${variables.themeColors.white};
    font-size: ${variables.fontSize.text};
    width: 40px;
    height: 40px;
    transition: all 1s ease;

    &:hover {
        color: ${variables.themeColors.titleColor};
    }
`

export const LinkedinOutlineIcon = styled(LinkedinOutline)`
    color: ${variables.themeColors.white};
    font-size: ${variables.fontSize.text};
    width: 40px;
    height: 40px;
    transition: all 1s ease;

    &:hover {
        color: ${variables.themeColors.titleColor};
    }
`

export const GithubOutlineIcon = styled(GithubOutline)`
    color: ${variables.themeColors.white};
    font-size: ${variables.fontSize.text};
    width: 40px;
    height: 40px;
    transition: all 1s ease;

    &:hover {
        color: ${variables.themeColors.titleColor};
    }
`