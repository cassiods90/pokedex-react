import { Container, Id, Name, Badges, Badge, BadgeImage, PokemonImage } from './styles'
import { convertToPokemonId } from '../../utils'
import { badges } from '../../assets/badges'


function PokemonCard( { id, name, types, image } ) {
    return (
        <Container types={types} to={`/pokemons/${name}`}>
            <Id> {convertToPokemonId(id)} </Id>
            <Name> {name} </Name>
            <Badges> 
                {types.map(type => (
                    <Badge key={`${name}-${type.type.name}`}>
                        <BadgeImage src={badges[type.type.name]} alt={`badge${type.type.name}`} />
                    </Badge>
                ))}    
            </Badges>
            <PokemonImage>
                <img className="pokeImg" src={image} alt={`Imagem do ${name}`} width="180" height="180" />
            </PokemonImage>
        </Container>
    ) 
}

export { PokemonCard }