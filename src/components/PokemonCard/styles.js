import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { variables } from '../../theme'


export const Container = styled(Link)`
	width: 330px;
	/* height: 115px; */
	padding: 30px;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 3px 3px;
	position: relative;
	margin: 30px 20px;
	border-radius: 10px;
	text-decoration: none;
	background: ${({ types }) => variables.backgrounds[types[0].type.name]};
	transition: all 0.8s ease; 
	
	&:hover {
		filter: brightness(70%);
		transition: all 0.8s ease;

		.pokeImg {
			transform: translateY(-5px);
		}
	}
`

export const Id = styled.div`
	font-weight: bold;
	color: rgba(23, 23, 27, 0.6);
	line-height: 14px;
	font-size: ${variables.fontSize.cardId};
`

export const Name = styled.div`
	text-transform: capitalize;
	font-weight: bold;
	font-size: ${variables.fontSize.cardName};
	line-height: 31px;
	color: ${variables.themeColors.white};
	margin: 10px 0;
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

export const PokemonImage = styled.div`
	position: absolute;
	top: -30%;
	right: 0;
`
