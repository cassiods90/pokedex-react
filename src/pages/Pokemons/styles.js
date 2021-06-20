import styled from 'styled-components'
import { variables } from '../../theme'

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`
export const InputContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 15px;
	padding: 20px 0;
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


