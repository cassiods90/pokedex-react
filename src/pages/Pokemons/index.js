import * as React from 'react'
import { api, getPokemons } from '../../services'
import { Spinner, PokemonCard } from '../../components'
import { Wrapper, Input, InputContent } from './styles'

function Pokemons() {
    const [pokemons, setPokemons] = React.useState()
    const [loading, setLoading] = React.useState(true)
    const [backupPokemons, SetBackupPokemons] = React.useState()
    const [pokeName, setPokeName] = React.useState('')
    // console.log('pokemons', pokemons)
    
    React.useEffect(() => {
        async function fetchPokemons(){
            const pokeData = await getPokemons()
            // console.log('pokeData', pokeData)
            
            if(pokeData.success) {
                const promises = []
                
                pokeData.data.results.forEach(pokemon =>  
                    promises.push(api.get(pokemon.url)),
                )
                // console.log('promises', promises)

                // metodo allSettled, segue executando depois que todas as
                // promisses estiverem carregadas.
                Promise.allSettled(promises).then(results => {
                    // console.log('carrega results', results)
                    
                    const updatedPokemons = []

                    results.forEach(result => {
                        // Se o result tiver como status fullfilled ou seja carregar sem falhar, ele vai pegar e criar um objeto com as 
                        // informações que preciso para cada pokemon.

                        if(result.status === 'fulfilled') {
                            const uniquePokemon = {
                                id: result.value.data.id,
                                name: result.value.data.name,
                                types: result.value.data.types,
                                image:
                                result.value.data.sprites.other['official-artwork']
                                    .front_default, 
                            }
                            updatedPokemons.push(uniquePokemon)
                        }
                    })
                    
                    // console.log('mostra o objeto dos poke criado: ', updatedPokemons)
                    // setpoke e setbackup são a mesma coisa, mas um dado fica salvo com o estado original e o outro posso usar pra manipular ele
                    setPokemons(updatedPokemons)
                    SetBackupPokemons(updatedPokemons)
                    setLoading(false)
                })
            
            }
        }

        fetchPokemons()
    }, [])

    React.useEffect(() => {
        // console.log(pokemons)
        if (backupPokemons) {
            const oldPokemons = [...backupPokemons]
            const filteredPokemons = oldPokemons.filter(pokemon =>
              pokemon.name.includes(pokeName.toLowerCase()),
            )
            setPokemons(filteredPokemons)
          }
        }, [pokeName, backupPokemons])


    if(loading) return <Spinner />
    

    return (
        <Wrapper>
            <InputContent>
                <Input placeholder="Digite um Pokémon" value={pokeName} onChange={evt => setPokeName(evt.target.value)} />
            </InputContent>
                {pokemons.map(pokemon => (
                    <PokemonCard {...pokemon} key={pokemon.name}/>
                ))}    
        </Wrapper>
    )
}

export { Pokemons }
