import * as React from 'react'
import { api, getPokemons } from '../../services'
import { Spinner } from '../../components'
import { Container, MainContent, LeftSide, RightSide, Content, Text, InputContent, Input, ButtonDiv, Button } from './styles'

function MiniGame() {
    const [pokeSorted, setPokeSorted] = React.useState()
    const [loading, setLoading] = React.useState(true)
    const [pokeName, setPokeName] = React.useState('')
    const [correctWrong, setCorrectWrong] = React.useState(false)

    // console.log('Poke Sorted: ', pokeSorted)
    console.log('estate certo ou errado', correctWrong)
    React.useEffect(() => {
        if(correctWrong === false) {
            setLoading(true)
            async function fetchPokemons(){
                const pokeData = await getPokemons()
                
                if(pokeData.success) {
                    const promises = []
                    
                    pokeData.data.results.forEach(pokemon =>  
                        promises.push(api.get(pokemon.url)),
                    )
    
                    Promise.allSettled(promises).then(results => {
                        const updatedPokemons = []
                        const tamArray = results.length
                        // console.log('tam result', tamArray)
    
                        const arraySorted = (Math.floor(Math.random() * tamArray)) + 1;
                        // console.log('arraySorted', arraySorted)
    
                        results.forEach(result => {
                            if(result.status === 'fulfilled' && result.value.data.id === arraySorted) {
                                const uniquePokemon = {
                                    id: result.value.data.id,
                                    name: result.value.data.name,
                                    image: result.value.data.sprites.other['official-artwork'].front_default, 
                                }
                                updatedPokemons.push(uniquePokemon)
                            }
                        })
                        setPokeSorted(updatedPokemons)
                        setLoading(false)
                    })
                }
            }
            fetchPokemons()
        }
        
    }, [correctWrong])

    React.useEffect(() => {
        // console.log('recebe input', pokeName)
        // console.log('pokemon sorteado', pokeSorted.[0].name)
        if(pokeSorted && pokeSorted.length) {
            const pokemonSorted = pokeSorted[0]
            console.log('pokemonSorted', pokemonSorted)
    
            if(pokeName === pokemonSorted.name) {
                setCorrectWrong(true)
            }
        }
        
    }, [pokeName, pokeSorted])

    if(loading) return <Spinner />

    return (
        <Container>
            <MainContent>
                <LeftSide correctWrong={correctWrong}>
                    <img src={pokeSorted.[0].image}  />
                </LeftSide>
                <RightSide>
                    <Content>
                        <Text> Who's that Pokemon ??? </Text>
                        <Text>
                        
                        </Text>
                    </Content>
                    
                    <InputContent>
                        <Input  type="text" placeholder="Digite um Pokémon" onChange={evt => setPokeName(evt.target.value)} />
                    </InputContent>

                    <ButtonDiv>
                        <Button type="button" onClick={(e) => {setCorrectWrong(false)}}>Randon Poke</Button>
                    </ButtonDiv>
                </RightSide>     
            </MainContent>
        </Container>
    )
}

export { MiniGame }