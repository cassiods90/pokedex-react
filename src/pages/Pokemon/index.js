import * as React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Spinner } from '../../components'
import { api, getPokemons, getPokemonSpecies } from '../../services'
import { convertToPokemonId } from '../../utils'
import { badges } from '../../assets/badges'
import { Container, MainContent, LeftSide, RightSide, Id, Name, Badges,
         Badge, BadgeImage, PokeName, Content, PokeStats, Stats, StatName,
         ProgressBar, Bar, StatValue, PokeStatsTitle, PokeAbout, AboutInfos, PokeDescription } from './styles'

function Pokemon() {
	const [pokemons, setPokemons] = React.useState()
    const [loading, setLoading] = React.useState(true)
	const { pokemon } = useParams()
	// console.log('useParams', pokemon)
    // console.log('objeto do pokemon', pokemons)

	React.useEffect(() => {
        async function fetchPokemons(pokemon){
            const pokeData = await getPokemons()
            const pokeSpecie = await getPokemonSpecies(pokemon)
            // console.log('pokeData', pokeData)
            // console.log('pokeSpecie', pokeSpecie)

            if(pokeData.success) {
                const promises = []
                
                pokeData.data.results.forEach(pokemon =>  
                    promises.push(api.get(pokemon.url)),
                )
                // console.log('promises', promises)

                Promise.allSettled(promises).then(results => {
                    const updatedPokemons = []

                    results.forEach(result => {
						// console.log('result', result.value.data.name)
						// console.log('pokemon', pokemon)

                        if(result.status === 'fulfilled' & result.value.data.name === pokemon & pokeSpecie.success) {
                            // console.log('array dos poke', result.value.data)

                            const uniquePokemon = {
                                id: result.value.data.id,
                                name: result.value.data.name,
                                types: result.value.data.types,
                                image: result.value.data.sprites.other['official-artwork'].front_default,
                                weight: result.value.data.weight,
                                height: result.value.data.height,
                                stats: result.value.data.stats,
                            }
                                // console.log('pokeSpecie', pokeSpecie.pokeSpecies)
                                
                                const uniquePokemonSpecie = {
                                    description: pokeSpecie.pokeSpecies.flavor_text_entries.[0].flavor_text,
                                    habitat: pokeSpecie.pokeSpecies.habitat.name,
                                    growthRate: pokeSpecie.pokeSpecies.growth_rate.name,
                                }
                                // console.log('uniquePokeSpecie', uniquePokemonSpecie)

                                const pokeObject = {...uniquePokemon, ...uniquePokemonSpecie}                          
                                // console.log('complete object pokemon: ', pokeObject)
    
                            updatedPokemons.push(pokeObject)                   
                        }
                    })
                    
                    // console.log('pokemon Unico', updatedPokemons)
                    setPokemons(updatedPokemons)
                    setLoading(false)
                })
            }
        }

        fetchPokemons(pokemon)
    }, [])


	if(loading) return <Spinner />


	return (
		<Container types={pokemons.[0].types}>
            <PokeName>{pokemons.[0].name}</PokeName>
            <MainContent>
                <LeftSide>
                    <img src={pokemons.[0].image} />
                </LeftSide>
                <RightSide>
                    <Id> {convertToPokemonId(`${pokemons.[0].id}` )} </Id>
                    <Name>{pokemons.[0].name}</Name>
                    <Badges> 
                        {pokemons.[0].types.map(type => (
                            <Badge key={`${pokemons.[0].name}-${type.type.name}`}>
                                <BadgeImage src={badges[type.type.name]} alt={`badge${type.type.name}`} />
                            </Badge>
                        ))}    
                    </Badges>
                </RightSide>     
            </MainContent>
            
            <Content>
                <PokeStats>
                        <PokeStatsTitle types={pokemons.[0].types}>Base Stats:</PokeStatsTitle>
                    {pokemons.[0].stats.map(stats => (
                        <Stats key={stats.stat.name}>
                            <StatName>{`${stats.stat.name}:`}</StatName>
                            <ProgressBar types={pokemons.[0].types}>
                                <Bar types={pokemons.[0].types} percent={stats.base_stat / 1.5}></Bar>
                            </ProgressBar>
                            <StatValue>{stats.base_stat}</StatValue>
                        </Stats>
                    ))}
                </PokeStats>

                <PokeStats>
                    <PokeStatsTitle PokeStatsTitle types={pokemons.[0].types}>About:</PokeStatsTitle>
                    <PokeAbout>  
                        <AboutInfos types={pokemons.[0].types}> Weight: <strong>{`${pokemons.[0].weight / 10}Kg` }</strong> </AboutInfos>
                        <AboutInfos types={pokemons.[0].types}> Height: <strong>{`${pokemons.[0].height / 10}M` } </strong> </AboutInfos>
                        <AboutInfos types={pokemons.[0].types}> Habitat: <strong>{pokemons.[0].habitat}</strong></AboutInfos>
                        <AboutInfos types={pokemons.[0].types}> Growth Rate: <strong>{pokemons.[0].growthRate}</strong></AboutInfos>
                    </PokeAbout>
                    
                    <PokeDescription> {pokemons.[0].description.replace('', ' ')} </PokeDescription>
                </PokeStats>
            </Content>
		</Container>
	)
}

export { Pokemon }

