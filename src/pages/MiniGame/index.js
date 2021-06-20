import * as React from 'react'
import { api, getPokemons } from '../../services'
import { Spinner } from '../../components'
import { Container, MainContent, LeftSide, RightSide, Content, Title, Hint, InputContent, Input, ButtonDiv, Button, LightBulbIcon, Scoreboard } from './styles'

function MiniGame() {
    const [pokemons, setPokemons] = React.useState()
    const [pokeSorted, setPokeSorted] = React.useState()
    const [loading, setLoading] = React.useState(true)
    const [pokeName, setPokeName] = React.useState('')
    const [correctWrong, setCorrectWrong] = React.useState(false)
    const [toggle, setToggle] = React.useState(true);
    const [questionAnswer, setQuestionAnswer] = React.useState('');
    const [counter, setCounter] = React.useState(0);

    // console.log('Pokemons array: ', pokemons)
    // console.log('questionAnswer', questionAnswer)
    // console.log('estate certo ou errado: ', correctWrong)
    // console.log('toggle: ', toggle)
    // console.log('pokemon sorteado: ', pokeSorted)
    // console.log('Counter: ', counter)

    React.useEffect(() => { // consulta a api e cria um array com um array de cada pokemon
        async function fetchPokemons(){
            const pokeData = await getPokemons()
            
            if(pokeData.success) {
                const promises = []
                
                pokeData.data.results.forEach(pokemon =>  
                    promises.push(api.get(pokemon.url)),
                )

                Promise.allSettled(promises).then(results => {
                    const updatedPokemons = []

                    results.forEach(result => {
                        if(result.status === 'fulfilled') {
                            const uniquePokemon = {
                                id: result.value.data.id,
                                name: result.value.data.name,
                                image: result.value.data.sprites.other['official-artwork'].front_default, 
                            }
                            updatedPokemons.push(uniquePokemon)
                        }
                    })
                    setPokemons(updatedPokemons)
                    setLoading(false)
                })
            }
        }
        fetchPokemons()
    }, [])


    React.useEffect(() => {     //Depois que consulta a api e cria o array com todos os pokemons, esse effect sorteia o poke aleatorio
        if(toggle === false) {  //somente passando o corretwrong, ele recarrega o poke somente quando acerta, para recarrar                             
            setToggle(true)     //independente se tentou ou não, tem q passar o toggle e assim, foi unica forma q consegui sem da bug (por enquanto =])
        }

        if(correctWrong === false && toggle) {
            if(pokemons && pokemons.length) {
                const tamArray = pokemons.length
                // console.log('tamArray: ', tamArray)

                const arraySorted = (Math.floor(Math.random() * tamArray)) + 1;
                // console.log('arraySorted', arraySorted)
                
                pokemons.forEach(poke => {
                    if(poke.id === arraySorted) {
                        setPokeSorted(poke)
                    }
                })
            }
        }  
    }, [pokemons, correctWrong, toggle])


    React.useEffect(() => { // Este effect faz o state mudar de falso para verdadeiro e controla geral o que exibir no html.
        if(pokeSorted) { //esse if faz executar o use effect só depois q o pokesorted tiver carregado
            // console.log('recebe input', pokeName)
            // console.log('pokemon sorteado', pokeSorted.name)

            if(pokeName === pokeSorted.name) {
                setCounter(counter + 0.5)
                setQuestionAnswer(`Gotcha !!! The poke name is ${pokeSorted.name}`)
                setCorrectWrong(true)
            } else {
                setQuestionAnswer("Who's that Pokemon ???")
            }
        }
    }, [pokeName, pokeSorted, questionAnswer])


    if(loading) return <Spinner />


    return (
        <Container>
            <MainContent>
                <LeftSide correctWrong={correctWrong}>
                    <img src={pokeSorted.image}  />
                    <Hint><LightBulbIcon /> Hover your mouse here, to reveal the pokemon's name <p>{pokeSorted.name}</p></Hint>
                </LeftSide>
                
                <RightSide>
                    <Title> {questionAnswer} </Title>
                    
                    <Content>
                        <InputContent>
                            <Input  type="text" placeholder="Type a pokemon name"  onChange={evt => setPokeName(evt.target.value)} />
                        </InputContent>

                        <Scoreboard>Pokemons Hit: {counter}</Scoreboard>

                        <ButtonDiv>
                            <Button type="button" onClick={(e) => { setCorrectWrong(false); setToggle((state) => !state);}}>Random Poke</Button>
                        </ButtonDiv>
                    </Content>
                </RightSide>    
            </MainContent>
        </Container>
    )
}

export { MiniGame }