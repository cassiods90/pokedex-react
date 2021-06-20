import styled from 'styled-components'
import { variables } from '../../theme'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 30px 0 0;
	position: relative;
	background: ${({ types }) => variables.backgrounds[types[0].type.name]};
	min-height: calc(100vh - 72px);
	border-top: 1px solid ${variables.themeColors.white};
`

export const PokeName = styled.h1`
	font-size: ${variables.fontSize.pokeTitleShadow};
	position: absolute;
	top: 0;
	margin-top: -20px;
	text-transform: capitalize;
	background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 76.04%);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
`

export const MainContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 70px 0 10px;
	width: 100%;
`

export const LeftSide = styled.div`
	width: 100%;
	max-width: 250px;
	margin-right: 20px;

	img {
		max-width: 100%;
	}
`

export const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: 20px;
`

export const Id = styled.span`
	font-size: ${variables.fontSize.pokeId};
	font-weight: bold;
	color: ${variables.themeColors.gray};
`

export const Name = styled.h1`
	font-size: ${variables.fontSize.pokeName};
	font-weight: bold;
	color: ${variables.themeColors.textColor};
	text-transform: capitalize;
	margin: 5px 0;
`

export const Badges = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`

export const Badge = styled.div`
	height: 25px;
	border-radius: 3px;
	
	&:first-child {
		margin-right: 15px;
	}
`

export const BadgeImage = styled.img`
  	border-radius: 3px;
`

export const Content = styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const PokeStats = styled.div`
	background: ${variables.themeColors.background};
	border-radius: 20px;
	width: 35%;
	padding:20px;
	margin: 10px; 
	min-height: 300px;
`

export const PokeStatsTitle = styled.span`
	color: ${({ types }) => variables.backgrounds[types[0].type.name]};
  	font-size: ${variables.fontSize.pokeCardTitle};
	font-weight: bold;
`

export const Stats = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	min-height: 46px;
`

export const StatName = styled.div`
	color: ${variables.themeColors.black};
	text-transform: capitalize;
	font-weight: bold;
	padding: 5px 0;
	width: 70px;
`

export const ProgressBar = styled.div`
    border-radius: 5px;
    height: 5px;
	width: 80%;
    transition: all 2s ease 0s;
	margin: 0 10px 0 5px;
	border:1px solid ${({ types }) => variables.backgrounds[types[0].type.name]};
`

export const Bar = styled.div`
	animation: progress 5s;
    background: ${({ types }) => variables.backgrounds[types[0].type.name]};
    border-radius: 5px;
    height: 5px;
    width: ${({ percent }) => percent}%;
	max-width: 100%;
    transition: 0.8s ease-out;

    /* @keyframes progress {
        0% {
            width: 0%;
        }

        ${({ percent }) => percent}% {
            width: ${({ percent }) => percent}%;
            box-shadow: 0 0 10px ${({ types }) => variables.backgrounds[types[0].type.name]};
        }
    } */
`

export const StatValue = styled.div`
	color: ${variables.themeColors.black};
	text-transform: capitalize;
	font-weight: bold;
	width: 35px;
`

export const PokeAbout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 10px 0 30px;
`

export const AboutInfos = styled.span`
	display: flex;
	align-items: center;
	color: ${({ types }) => variables.backgrounds[types[0].type.name]};
	font-weight: bold;
	font-size: ${variables.fontSize.text};
	padding: 5px 0;
	
	strong {
		color: ${variables.themeColors.black};
		font-weight: 400;
		font-size: ${variables.fontSize.text};
		margin-left: 5px;
		text-transform: capitalize;
	}
`

export const PokeDescription = styled.span`
	color: ${variables.themeColors.black};
	font-weight: 400;
	font-size: ${variables.fontSize.text};
	padding-top: 30px;
	text-align: justify;
`