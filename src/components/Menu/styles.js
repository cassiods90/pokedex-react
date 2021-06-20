import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { variables } from '../../theme'

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;

`

export const Link = styled(NavLink)`
    display: flex;
    text-decoration: none;
    color: ${variables.themeColors.textColor};
    margin: 0 15px;
    font-size: 1.1em;
    font-weight: bold;
    transition: all 0.5s ease;

    &.menu-active {
        text-decoration: none;
        color: ${variables.themeColors.secColor};
        border-bottom: 2px solid ${variables.themeColors.secColor};
    }

    &:hover {
        color: ${variables.themeColors.secColor};
    }
`

